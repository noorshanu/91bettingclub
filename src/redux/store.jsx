import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/api/user/userApiSlice';
import { apiSlice } from '../redux/api/apiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
