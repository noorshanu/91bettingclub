import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../apiSlice';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const initialState = {
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  user: (() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser || storedUser === 'undefined') {
      return null;
    }
    try {
      return JSON.parse(storedUser);
    } catch (e) {
      console.error('Failed to parse user data from localStorage:', e);
      return null;
    }
  })(),
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      localStorage.setItem('refreshToken', action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearToken: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
      const { access, refresh, user } = action.payload;
      state.token = access;
      state.refreshToken = refresh;
      state.user = user;
      localStorage.setItem('token', access);
      localStorage.setItem('refreshToken', refresh);
      localStorage.setItem('user', JSON.stringify(user));
    });
    builder.addMatcher(apiSlice.endpoints.loginUser.matchRejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export const { setToken, setRefreshToken, setUser, clearToken } = userSlice.actions;
export default userSlice.reducer;
