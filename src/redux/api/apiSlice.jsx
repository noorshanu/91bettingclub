import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    // Uncomment and adjust this if you need to add authorization headers
    // const token = localStorage.getItem('token');
    // if (token) {
    //   headers.set("authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: () => ({}),
});
