import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../apiSlice';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const initialState = {
  token: cookies.get('token') || localStorage.getItem('token') || null,
  refreshToken: cookies.get('refreshToken') || localStorage.getItem('refreshToken') || null,
  user: (() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser || storedUser === 'undefined') {
      return null;
    }
    try {
      const parsedUser = JSON.parse(storedUser);
      console.log('Parsed user from localStorage:', parsedUser);
      return parsedUser;
    } catch (e) {
      console.error('Failed to parse user data from localStorage:', e);
      return null;
    }
  })(),
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log('Setting token:', action.payload);
      state.token = action.payload;
      cookies.set('token', action.payload, { path: '/', expires: new Date(Date.now() + 4 * 60 * 60 * 1000) });
      localStorage.setItem('token', action.payload);
    },
    setRefreshToken: (state, action) => {
      console.log('Setting refresh token:', action.payload);
      state.refreshToken = action.payload;
      cookies.set('refreshToken', action.payload, { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
      localStorage.setItem('refreshToken', action.payload);
    },
    setUser: (state, action) => {
      console.log('Setting user:', action.payload);
      if (!action.payload) {
        console.error('User payload is null or undefined');
        return;
      }
      state.user = action.payload;
      try {
        localStorage.setItem('user', JSON.stringify(action.payload));
      } catch (e) {
        console.error('Failed to save user to localStorage:', e);
      }
    },
    clearToken: (state) => {
      console.log('Clearing tokens and user data');
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      cookies.remove('token');
      cookies.remove('refreshToken');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
      console.log('Login user fulfilled payload:', action.payload);
      const { access, refresh, user } = action.payload;
      if (!access || !refresh || !user) {
        console.error('Login user fulfilled payload is missing access, refresh, or user:', action.payload);
        return;
      }
      state.token = access;
      state.refreshToken = refresh;
      state.user = user;
      cookies.set('token', access, { path: '/', expires: new Date(Date.now() + 4 * 60 * 60 * 1000) });
      cookies.set('refreshToken', refresh, { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
      try {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', access);
        localStorage.setItem('refreshToken', refresh);
      } catch (e) {
        console.error('Failed to save user to localStorage:', e);
      }
    });
    builder.addMatcher(apiSlice.endpoints.loginUser.matchRejected, (state, action) => {
      console.error('Login user rejected:', action.error);
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export const { setToken, setRefreshToken, setUser, clearToken } = userSlice.actions;
export default userSlice.reducer;
