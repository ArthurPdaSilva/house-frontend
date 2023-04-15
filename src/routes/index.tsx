import React from 'react';
import { Routes as ContainerRoutes, Route } from 'react-router-dom';
import {
  AddHouse,
  AddAddress,
  ListHouses,
  ListAddress,
  ChangeHouse,
  ChangeAddress,
} from '../pages/';

export default function Routes() {
  return (
    <ContainerRoutes>
      <Route index element={<AddHouse />} />
      <Route path="/list-houses" element={<ListHouses />} />
      <Route path="/change-house/:id" element={<ChangeHouse />} />
      <Route path="/add-address" element={<AddAddress />} />
      <Route path="/list-address" element={<ListAddress />} />
      <Route path="/change-address/:id" element={<ChangeAddress />} />
    </ContainerRoutes>
  );
}
