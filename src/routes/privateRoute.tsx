import React from 'react';
import { Navigate } from 'react-router-dom';
import { MyNavBarComponent } from '../components';
import useAuth from '../hooks/useAuth';

export default function PrivateRouter({ children }: { children: JSX.Element }) {
  const { signed } = useAuth();
  console.log(signed);
  return signed ? (
    <>
      <MyNavBarComponent />
      {children}
    </>
  ) : (
    <Navigate to="/" />
  );
}
