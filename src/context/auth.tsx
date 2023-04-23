import React, { createContext, useState, useCallback, useEffect } from 'react';
import UserType from '../Types/UserType';
import { toast } from 'react-toastify';
import api from '../services/api';

interface AppContextInterface {
  signed: boolean;
  user: UserType | null;
  logout: () => void;
  signUp: ({ name, username, email, password }: UserType) => void;
  signIn: ({ username, password }: UserType) => void;
}

export const AuthContext = createContext<AppContextInterface | null>(null);

export default function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const isUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (isUser) setUser(JSON.parse(isUser));
    if (token) {
      setToken(JSON.parse(token));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [setUser, setToken]);

  const signUp = useCallback(
    async ({ name, username, email, password }: UserType) => {
      await api
        .post('/user', { name, username, email, password })
        .then((value) => {
          toast.success('Bem vindo, novo usuário :)');
          setUser({ name, username, email, password });
          setToken(value.data);
          localStorage.setItem('token', value.data);
          storageUser({ name, username, email, password });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
    [setUser],
  );

  const signIn = useCallback(
    async ({ username, password }: UserType) => {
      await api
        .post('/api/login', { username, password })
        .then((value) => {
          toast.success('Entrando na plataforma');
          setUser({ username, password });
          setToken(value.data);
          localStorage.setItem('token', value.data);
          storageUser({ username, password });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
    [token, user, setToken, setUser],
  );

  function storageUser(user: UserType) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        uid: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
      }),
    );
  }

  const logout = useCallback(async () => {
    await api
      .post('/api/logout')
      .then(() => {
        toast.success('Saindo da plataforma');
        setUser(null);
        setToken('');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [setUser, setToken]);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        logout,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
