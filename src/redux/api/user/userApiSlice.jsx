import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../apiSlice';
import Cookies from 'js-cookie';

const initialState = {
  token: Cookies.get('token') || null,
  user: null, // Add this line
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      Cookies.set('token', action.payload, { expires: 1 }); // Store token in a cookie for 1 day
    },
    setUser: (state, action) => { // Add this reducer
      state.user = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null; // Clear user data
      Cookies.remove('token');
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user; // Assuming the user data is part of the response
      Cookies.set('token', action.payload.token, { expires: 1 });
    });
  }
});

export const { setToken, setUser, clearToken } = userSlice.actions;
export default userSlice.reducer;