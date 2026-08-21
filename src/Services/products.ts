import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../Interfaces/products";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch }) {
        dispatch(
          productsApi.util.updateQueryData("getAllProducts", {}, (draft) => {            
            const index = draft.findIndex((product: Product) => product.id === id);
            if (index !== -1) {
              draft.splice(index, 1);
            }
          }),
        );
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useDeleteProductMutation } = productsApi;
