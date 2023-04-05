import React from 'react';
import { MyNavBarComponent } from './components';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <MyNavBarComponent />
      <Router />
    </BrowserRouter>
  );
};

export default App;
