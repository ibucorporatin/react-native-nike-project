import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};
export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.item.find((item) => {
        return item.product.id === newProduct.id;
      });
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.item.push({ product: newProduct, quantity: 1 });
      }
    },
    // cartItemIncrement: (state, action) => {
    //   const cartItem = state.item.find((item) => {
    //     return item.product.id === action.payload;
    //   });
    //   cartItem.quantity += 1;
    // },
    // cartItemDecrement: (state, action) => {
    //   const cartItem = state.item.find((item) => {
    //     return item.product.id === action.payload;
    //   });
    //   if (cartItem.quantity > 1) {
    //     cartItem.quantity -= 1;
    //   }
    // },
    changeQuantity: (state, action) => {
      // console.log(action.payload);
      const cartItem = state.item.find((item) => {
        return item.product.id === action.payload.productId;
      });
      cartItem.quantity += action.payload.amount;
      if (cartItem.quantity <= 0) {
        state.item = state.item.filter(
          (produvtItem) => produvtItem !== cartItem
        );
      }
    },
  },
});

export const selectNumberOfItem = (state) => state.cart.item.length;

export const subTotal = (state) => {
  return state.cart.item.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );
};

export const cart = (state) => state.cart;
export const selectDeleveryPrice = createSelector(subTotal, cart, (sub, cart) =>
  sub >= cart.freeDeliveryFrom ? 0 : sub === 0 ? 0 : cart.deliveryFee
);

export const total = createSelector(
  subTotal,
  selectDeleveryPrice,
  (sub, del) => sub + del
);
