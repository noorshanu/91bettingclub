import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../apiSlice';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const initialState = {
  token: cookies.get('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null, // Retrieve user from localStorage
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      cookies.set('token', action.payload, { path: '/', expires: new Date(Date.now() + 86400000) }); // Store token in a cookie for 1 day
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Store user in localStorage
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null; // Clear user data
      cookies.remove('token');
      localStorage.removeItem('user'); // Remove user from localStorage
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user; // Assuming the user data is part of the response
      cookies.set('token', action.payload.token, { path: '/', expires: new Date(Date.now() + 86400000) });
      localStorage.setItem('user', JSON.stringify(action.payload.user)); // Store user in localStorage
    });
  }
});

export const { setToken, setUser, clearToken } = userSlice.actions;
export default userSlice.reducer;
