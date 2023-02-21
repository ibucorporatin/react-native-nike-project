import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { login } from "../util/auth";

const initialState = {
  token: false,
  authenticated: false,
  email: "",
};

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (value) => {
    const { data, mode } = value;
    const { email, password } = data;
    if (mode == "signin") {
      try {
        return axios
          .post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgpXJpXRj__N1vxZ0KjZDpQAB67B81t-A",
            {
              email,
              password,
              returnSecureToken: true,
            }
          )
          .then((response) => response.data)
          .catch((err) => console.log(err));
      } catch (error) {
        console.log("error");
      }
    } else {
      console.log("register");
    }
    // return axios
    // .post(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgpXJpXRj__N1vxZ0KjZDpQAB67B81t-A",
    //   {
    //     email,
    //     password,
    //     returnSecureToken: true,
    //   }
    // )
    // .then((response) => response.data)
    // .catch((err) => console.log(err));
    //     return axios
    //       .post(
    //         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgpXJpXRj__N1vxZ0KjZDpQAB67B81t-A",
    //         {
    //           name: "ssss",
    //           email: "aibumohamed2001@gmail.com",
    //           password: "abcdefgh",
    //           returnSecureToken: true,
    //         }
    //       )
    //       .then((response) => response.data)
    //       .catch((err) => console.log(err));
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // authenticate: (state, action) => {
    //   state.token = "sdasdasd";
    // },
    // logout: (state, action) => {
    //   // console.log(action.payload);
    //   const cartItem = state.item.find((item) => {
    //     return item.product.id === action.payload.productId;
    //   });
    //   cartItem.quantity += action.payload.amount;
    //   if (cartItem.quantity <= 0) {
    //     state.item = state.item.filter(
    //       (produvtItem) => produvtItem !== cartItem
    //     );
    //   }
    // },
  },
  extraReducers: (buider) => {
    buider.addCase(authenticate.pending, (state) => {
      console.log("pending");
    });
    buider.addCase(authenticate.fulfilled, (state, action) => {
      //   console.log("success");
      console.log(action.payload, "from mmmm");
    });
    buider.addCase(authenticate.rejected, (state, action) => {
      console.log("error why");
    });
  },
});

export const isAuthenticated = (state) => {
  return state.auth.token ? !!state.auth.token : false;
};

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
