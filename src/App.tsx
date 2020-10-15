import React from 'react';

import SignIn from './pages/SignIn';
// import Test from './pages/SignUp';
import ToastContainer from './components/ToastContainer';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/Auth';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
  </>
);

export default App;
