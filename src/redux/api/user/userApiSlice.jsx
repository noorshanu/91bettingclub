import { apiSlice } from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Register New User
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/wingo/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    // Login User
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/wingo/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: true,
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApiSlice;
