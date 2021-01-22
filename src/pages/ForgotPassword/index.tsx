import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useToast } from '../../hooks/toast';

import { Container, Content, Background } from './styles';
import api from '../../services/api';

interface ForgotPasswordormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordormData) => {
      try {
        setLoading(true);
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', {
          email: data.email,
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        addToast({
          title: 'Solicitação de recupeção enviada',
          description: `O link para recuperação de senha foi enviado para o email ${data.email}`,
          type: 'success',
        });
        formRef.current?.setErrors({});
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          title: 'Erro ao solicitar recuperação de senha',
          description:
            'Ocorreu um erro ao solicitar a recuperação de senha, tente novamente.',
          type: 'error',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <img alt="Gobarber" src={logoImg} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recupeção de senha</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Button loading={loading} type="submit">
            Enviar
          </Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
