import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://viacep.com.br/ws/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (cep) => `${cep}/json/`,
    }),
  }),
});

export const { useGetUsersQuery } = api;
