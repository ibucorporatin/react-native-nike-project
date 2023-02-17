import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  seleectedPrducts: null,
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProducts: (state, { payload }) => {
      const prodctId = payload;
      state.seleectedPrducts = state.products.find(
        (product) => product.id === prodctId
      );
    },
  },
});
