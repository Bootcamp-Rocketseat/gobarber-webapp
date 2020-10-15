import React from 'react';

import { Container } from './styles';

import { ToastData } from '../../hooks/toast';

import Toast from './Toast';

interface ToastContainerProps {
  toasts: ToastData[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return (
    <Container>
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </Container>
  );
};

export default ToastContainer;
