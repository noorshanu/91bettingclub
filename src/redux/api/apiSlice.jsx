import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cookies } from 'react-cookie';

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
    // Attempt to refresh the token
    const refreshResult = await baseQuery(
      {
        url: '/wingo/token/refresh/',
        method: 'POST',
        body: { refresh: cookies.get('refreshToken') },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // Store the new token
      const { access: newToken, refresh: newRefreshToken } = refreshResult.data;
      api.dispatch(setToken(newToken));
      cookies.set('token', newToken, { path: '/', expires: new Date(Date.now() + 86400000) });
      if (newRefreshToken) {
        cookies.set('refreshToken', newRefreshToken, { path: '/', expires: new Date(Date.now() + 86400000 * 7) });
      }

      // Retry the original query with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
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
