import React from 'react';

import SignIn from './pages/SignIn';
// import Test from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ToastProvider>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </ToastProvider>
  </>
);

export default App;
