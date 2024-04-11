import { apiSlice } from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // @desc    Register New User
    // @route   POST /wingo/register/
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/wingo/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),

  overrideExisting: true,
});

export const { useRegisterUserMutation } = userApiSlice;
