import React, { useCallback, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
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

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        const schema = Yup.object().shape({
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Confirmação inválida',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // Reset aqui
        const token = location.search.split('=')[1];
        await api.post('/password/reset', {
          token,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });

        addToast({
          title: 'Reset realizado com sucesso',
          description: 'Prossiga para a realização do login',
          type: 'success',
        });

        formRef.current?.setErrors({});
        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          title: 'Erro no reset',
          description: 'Ocorreu um erro ao realizar o reset, tente novamente.',
          type: 'error',
        });
      }
    },
    [location.search, addToast, history],
  );

  return (
    <Container>
      <Content>
        <img alt="Gobarber" src={logoImg} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Reset sua senha</h1>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmação de senha"
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
