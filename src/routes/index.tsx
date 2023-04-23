import React from 'react';
import { Routes as ContainerRoutes, Route } from 'react-router-dom';
import {
  AddHouse,
  AddAddress,
  ListHouses,
  ListAddress,
  ChangeHouse,
  ChangeAddress,
  Login,
  Register,
} from '../pages/';
import PrivateRouter from './privateRoute';

export default function Routes() {
  return (
    <ContainerRoutes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/add-house"
        element={
          <PrivateRouter>
            <AddHouse />
          </PrivateRouter>
        }
      />
      <Route
        path="/list-houses"
        element={
          <PrivateRouter>
            <ListHouses />
          </PrivateRouter>
        }
      />
      <Route
        path="/change-house/:id"
        element={
          <PrivateRouter>
            <ChangeHouse />
          </PrivateRouter>
        }
      />
      <Route
        path="/add-address"
        element={
          <PrivateRouter>
            <AddAddress />
          </PrivateRouter>
        }
      />
      <Route
        path="/list-address"
        element={
          <PrivateRouter>
            <ListAddress />
          </PrivateRouter>
        }
      />
      <Route
        path="/change-address/:id"
        element={
          <PrivateRouter>
            <ChangeAddress />
          </PrivateRouter>
        }
      />
    </ContainerRoutes>
  );
}
