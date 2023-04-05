import React from 'react';
import { Routes as ContainerRoutes, Route } from 'react-router-dom';
import { AddHouse, AddAddress } from '../screens/';

export default function Routes() {
  return (
    <ContainerRoutes>
      <Route index element={<AddHouse />} />
      <Route path="/add-address" element={<AddAddress />} />
    </ContainerRoutes>
  );
}
