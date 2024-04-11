import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    // const token = localStorage.getItem

    // if (token) {
    //   headers.set("authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
