import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ToastProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ToastProvider>
  </BrowserRouter>
);

export default App;
