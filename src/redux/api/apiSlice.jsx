// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cookies } from 'react-cookie';
import { setToken, setRefreshToken, clearToken } from './user/userApiSlice'; // Update the path accordingly

const cookies = new Cookies();

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://game.myclub11.com',
  prepareHeaders: (headers) => {
    const token = cookies.get('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.warn('Token expired, attempting to refresh');

    const refreshToken = cookies.get('refreshToken');
    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: '/wingo/token/refresh/',
          method: 'POST',
          body: { refresh: refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const { access: newToken, refresh: newRefreshToken } = refreshResult.data;

        console.log('New token acquired:', newToken);
        api.dispatch(setToken(newToken));
        cookies.set('token', newToken, { path: '/', expires: new Date(Date.now() + 4 * 60 * 60 * 1000) });

        if (newRefreshToken) {
          console.log('New refresh token acquired:', newRefreshToken);
          api.dispatch(setRefreshToken(newRefreshToken));
          cookies.set('refreshToken', newRefreshToken, { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
        }

        result = await baseQuery(args, api, extraOptions);
      } else {
        console.error('Failed to refresh token:', refreshResult.error);
        api.dispatch(clearToken());
        cookies.remove('token');
        cookies.remove('refreshToken');
      }
    } else {
      console.error('No refresh token available');
      api.dispatch(clearToken());
      cookies.remove('token');
      cookies.remove('refreshToken');
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/wingo/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Other endpoints can be added here
  }),
});

export const { useLoginUserMutation } = apiSlice;
