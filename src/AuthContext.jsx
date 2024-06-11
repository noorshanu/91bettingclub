// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Cookies } from 'react-cookie';
import { setToken, setRefreshToken, clearToken, setUser } from './redux/api/user/userApiSlice';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get('token');
    const refreshToken = cookies.get('refreshToken');
    const storedUser = localStorage.getItem('user');

    if (token && refreshToken && storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setToken(token));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setUser(user));
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [dispatch]);

  const login = (token, refreshToken, user) => {
    dispatch(setToken(token));
    dispatch(setRefreshToken(refreshToken));
    dispatch(setUser(user));
    const tokenExpiration = new Date(Date.now() + 4 * 60 * 60 * 1000); // 4 hours
    const refreshTokenExpiration = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    cookies.set('token', token, { path: '/', expires: tokenExpiration });
    cookies.set('refreshToken', refreshToken, { path: '/', expires: refreshTokenExpiration });
    localStorage.setItem('user', JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const logout = () => {
    dispatch(clearToken());
    cookies.remove('token');
    cookies.remove('refreshToken');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
