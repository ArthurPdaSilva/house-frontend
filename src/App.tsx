import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './context/auth';
import { MyNavBarComponent } from './components';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer theme="colored" autoClose={1500} />
        <MyNavBarComponent />
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
