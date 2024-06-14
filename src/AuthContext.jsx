import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setRefreshToken, setUser, clearToken } from './redux/api/user/userApiSlice';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = !!token && !!user;

  useEffect(() => {
    const initializeAuth = () => {
      const token = localStorage.getItem('token');
      const refreshToken = localStorage.getItem('refreshToken');
      const storedUser = localStorage.getItem('user');

      if (token && refreshToken && storedUser) {
        const user = JSON.parse(storedUser);
        dispatch(setToken(token));
        dispatch(setRefreshToken(refreshToken));
        dispatch(setUser(user));
      } else {
        dispatch(clearToken());
      }
    };

    initializeAuth();
  }, [dispatch]);

  const login = (token, refreshToken, user) => {
    dispatch(setToken(token));
    dispatch(setRefreshToken(refreshToken));
    dispatch(setUser(user));
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    dispatch(clearToken());
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
