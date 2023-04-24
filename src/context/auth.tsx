import React, { createContext, useState, useCallback, useEffect } from 'react';
import UserType from '../Types/UserType';
import { toast } from 'react-toastify';
import api from '../services/api';

interface AuthContextInterface {
  token: string;
  logout: () => void;
  signUp: ({ name, username, email, password }: UserType) => void;
  signIn: ({ username, password }: UserType) => void;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface,
);

export default function AuthProvider({ children }: { children: JSX.Element }) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(JSON.parse(token));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [setToken]);

  const signUp = useCallback(
    async ({ name, username, email, password }: UserType) => {
      await api
        .post('/user', { name, username, email, password })
        .then((value) => {
          toast.success('Bem vindo, novo usuário :)');
          setToken(value.data);
          localStorage.setItem('token', value.data);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
    [],
  );

  const signIn = useCallback(
    async ({ username, password }: UserType) => {
      await api
        .post('/api/login', { username: username, password: password })
        .then((value) => {
          toast.success('Entrando na plataforma');
          setToken(value.data.toString());
          localStorage.setItem('token', JSON.stringify(value.data));
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
    [token, setToken],
  );

  const logout = useCallback(async () => {
    await api
      .post('/api/logout')
      .then(() => {
        toast.success('Saindo da plataforma');
        setToken('');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [setToken]);

  return (
    <AuthContext.Provider
      value={{
        token,
        logout,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
