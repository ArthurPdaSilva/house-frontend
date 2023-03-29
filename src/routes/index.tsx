import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AddHouse from '../pages/AddHouse';
import AddAddress from '../pages/AddAddress';

const Router = createBrowserRouter([
  {
    path: '/add-house',
    element: <AddHouse />,
  },
  {
    path: '/add-address',
    element: <AddAddress />,
  },
]);

export default Router;
