import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product'
    }),
    getProduct: builder.query({
      query: (id) => `/product/${id}`
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: '/cart',
        method: 'POST',
        body: { ...product }
      })
    })
  })
});
export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation } = productsApi;
