import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../apiSlice';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const initialState = {
  token: cookies.get('token') || null,
  refreshToken: cookies.get('refreshToken') || null,
  user: (() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser || storedUser === "undefined") {
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      cookies.set('token', action.payload, { path: '/', expires: new Date(Date.now() + 86400000) });
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      cookies.set('refreshToken', action.payload, { path: '/', expires: new Date(Date.now() + 86400000 * 7) });
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearToken: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      cookies.remove('token');
      cookies.remove('refreshToken');
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
      const { token, refreshToken, user } = action.payload;
      state.token = token;
      state.refreshToken = refreshToken; // Assuming refreshToken is part of the response
      state.user = user;
      cookies.set('token', token, { path: '/', expires: new Date(Date.now() + 86400000) });
      cookies.set('refreshToken', refreshToken, { path: '/', expires: new Date(Date.now() + 86400000 * 7) });
      localStorage.setItem('user', JSON.stringify(user));
    });
  },
});

export const { setToken, setRefreshToken, setUser, clearToken } = userSlice.actions;
export default userSlice.reducer;
