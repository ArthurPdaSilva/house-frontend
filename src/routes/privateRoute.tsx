import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { MyNavBarComponent } from '../components';
import useAuth from '../hooks/useAuth';

export default function PrivateRouter({ children }: { children: JSX.Element }) {
  const { setUser } = useAuth();
  const [isUserS, setIsUserS] = useState<boolean>(false);

  useEffect(() => {
    const isUser = localStorage.getItem('user');
    if (isUser) {
      setUser(JSON.parse(isUser));
      setIsUserS(true);
    } else {
      setIsUserS(false);
    }
  }, [setUser, setIsUserS]);

  return isUserS !== null ? (
    <>
      <MyNavBarComponent />
      {children}
    </>
  ) : (
    <Navigate to="/" />
  );
}
