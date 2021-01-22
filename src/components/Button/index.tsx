import React, { ButtonHTMLAttributes } from 'react';
import { Container, Loader } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container {...rest}>{loading ? <Loader /> : children}</Container>
);
export default Button;
