import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { MyNavBarComponent } from '../components';

export default function PrivateRouter({ children }: { children: JSX.Element }) {
  const appContext = useContext(AuthContext);
  return appContext?.signed ? (
    <>
      <MyNavBarComponent />
      {children}
    </>
  ) : (
    <Navigate to="/" />
  );
}
