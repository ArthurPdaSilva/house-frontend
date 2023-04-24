import React from 'react';
import { Routes as ContainerRoutes, Route, Navigate } from 'react-router-dom';
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
import useAuth from '../hooks/useAuth';

export default function Routes() {
  const { token } = useAuth();

  return (
    <ContainerRoutes>
      <Route index element={token ? <Navigate to="/add-house" /> : <Login />} />
      <Route
        path="/register"
        element={token ? <Navigate to="/add-house" /> : <Register />}
      />
      <Route
        path="/add-house"
        element={token ? <AddHouse /> : <Navigate to="/" />}
      />
      <Route
        path="/list-houses"
        element={token ? <ListHouses /> : <Navigate to="/" />}
      />
      <Route
        path="/change-house/:id"
        element={token ? <ChangeHouse /> : <Navigate to="/" />}
      />
      <Route
        path="/add-address"
        element={token ? <AddAddress /> : <Navigate to="/" />}
      />
      <Route
        path="/list-address"
        element={token ? <ListAddress /> : <Navigate to="/" />}
      />
      <Route
        path="/change-address/:id"
        element={token ? <ChangeAddress /> : <Navigate to="/" />}
      />
    </ContainerRoutes>
  );
}
