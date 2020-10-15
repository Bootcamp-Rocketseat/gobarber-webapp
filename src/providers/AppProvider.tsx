import React from 'react';

import { AuthProvider } from '../hooks/auth';
import { ToastProvider } from '../hooks/toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
};

export default AppProvider;
