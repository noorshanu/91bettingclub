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
    const token = cookies.get('token') || localStorage.getItem('token');
    const refreshToken = cookies.get('refreshToken') || localStorage.getItem('refreshToken');
    const storedUser = localStorage.getItem('user');
    const csrfToken = localStorage.getItem('csrfToken');

    console.log('AuthProvider useEffect - token:', token);
    console.log('AuthProvider useEffect - refreshToken:', refreshToken);
    console.log('AuthProvider useEffect - storedUser:', storedUser);
    console.log('AuthProvider useEffect - csrfToken:', csrfToken);

    if (token && refreshToken && storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setToken(token));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setUser(user));
      setIsAuthenticated(true);
      console.log('User authenticated:', user);
    } else {
      setIsAuthenticated(false);
    }
  }, [dispatch]);

  useEffect(() => {
    console.log('isAuthenticated updated:', isAuthenticated);
  }, [isAuthenticated]);

  const login = (token, refreshToken, user, csrfToken) => {
    dispatch(setToken(token));
    dispatch(setRefreshToken(refreshToken));
    dispatch(setUser(user));
    const tokenExpiration = new Date(Date.now() + 4 * 60 * 60 * 1000); // 4 hours
    const refreshTokenExpiration = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    cookies.set('token', token, { path: '/', expires: tokenExpiration });
    cookies.set('refreshToken', refreshToken, { path: '/', expires: refreshTokenExpiration });
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    if (csrfToken) {
      localStorage.setItem('csrfToken', csrfToken);
      console.log('CSRF token saved:', csrfToken);
    }
    setIsAuthenticated(true);
    console.log('User logged in:', user);
  };

  const logout = () => {
    dispatch(clearToken());
    cookies.remove('token');
    cookies.remove('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('csrfToken');
    setIsAuthenticated(false);
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
