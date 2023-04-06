import React from 'react';
import { ToastContainer } from 'react-toastify';
import { MyNavBarComponent } from './components';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" autoClose={1500} />
      <MyNavBarComponent />
      <Router />
    </BrowserRouter>
  );
};

export default App;
