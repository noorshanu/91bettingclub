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

    // Attempt to refresh the token
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
        
        // Store the new tokens
        api.dispatch(setToken(newToken));
        cookies.set('token', newToken, { path: '/', expires: new Date(Date.now() + 86400000) });

        if (newRefreshToken) {
          api.dispatch(setRefreshToken(newRefreshToken));
          cookies.set('refreshToken', newRefreshToken, { path: '/', expires: new Date(Date.now() + 86400000 * 7) });
        }

        // Retry the original query with the new token
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
  }),
});

export const { useLoginUserMutation } = apiSlice;