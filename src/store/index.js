import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { cartSlice } from "./cartSlise";

import { productsSlice } from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});
