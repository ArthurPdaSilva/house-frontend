import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './context/auth';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer theme="colored" autoClose={1500} />
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
