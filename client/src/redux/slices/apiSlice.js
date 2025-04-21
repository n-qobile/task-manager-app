import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_APP_BASE_URL + "/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { user } = getState().auth;

    if (user && user.token) {
      headers.set("Authorization", `Bearer ${user.token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Task", "User", "Auth", "Notification"],
  endpoints: (builder) => ({}),
});
