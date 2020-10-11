// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img alt="Gobarber" src={logoImg} />

      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="nome" icon={FiUser} placeholder="Nome" />
        <Input name="e-mail" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="forgot">
        <FiArrowLeft />
        Voltar para o login
      </a>
    </Content>
  </Container>
);

export default SignUp;
