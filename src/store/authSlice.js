import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { createUser, login } from "../util/auth";

const initialState = {
  token: null,
  authenticated: false,
  email: "",
  login: {
    errorMessage: "",
  },
  register: {
    errorMessage: "",
  },
  authenticating: false,
};

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (value, { rejectWithValue, dispatch }) => {
    const { data, mode } = value;
    const { email, password } = data;
    if (mode == "signin") {
      try {
        const response = await login(email, password);

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          // console.log(error.response.data.error.message);
          console.log("error");
          dispatch(
            authSlice.actions.setLoginErrorMessage(
              error.response.data.error.message
            )
          );
          return rejectWithValue(error.response.data);
        }
      }
    } else if (mode == "register") {
      console.log("registering");
      try {
        const response = await createUser(email, password);

        return response.data;
        // setTimeout(() => {
        //   state.authenticating = false;
        // }, 5000);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.log("error");
          dispatch(
            authSlice.actions.setRegisterErrorMessage(
              error.response.data.error.message
            )
          );

          return rejectWithValue(error.response.data);
        }
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.email = "";
      AsyncStorage.removeItem("user");
    },
    restoreUser: (state, action) => {
      // console.log(action);
      const data = action.payload;
      state.token = data.token;
      state.email = data.email;
    },
    setLoginErrorMessage: (state, action) => {
      state.login.errorMessage = action.payload;
    },
    setRegisterErrorMessage: (state, action) => {
      state.register.errorMessage = action.payload;
    },
    removeRegisterErrorMessage: (state, action) => {
      state.register.errorMessage = "";
    },
    removeLoginErrorMessage: (state, action) => {
      state.login.errorMessage = "";
    },
  },
  extraReducers: (buider) => {
    buider.addCase(authenticate.pending, (state) => {
      console.log("pending");
      state.authenticating = true;
    });
    buider.addCase(authenticate.fulfilled, (state, action) => {
      const data = action.payload;
      state.token = data.idToken;
      state.email = data.email;

      AsyncStorage.setItem(
        "user",
        JSON.stringify({ token: data.idToken, email: data.email })
      );
      console.log("work success");
      state.authenticating = false;
    });
    buider.addCase(authenticate.rejected, (state, action) => {
      // console.log(action.payload.error.message);

      console.log("reject");
      state.authenticating = false;
    });
  },
});

export const isAuthenticated = (state) => {
  return state.auth.token ? !!state.auth.token : false;
};
export const loginErrorMessage = (state) => {
  return state.auth.login.errorMessage;
};
export const registerErrorMessage = (state) => {
  return state.auth.register.errorMessage;
};

export const userEmail = (state) => {
  return state.auth.email;
};

export const authenticating = (state) => {
  return state.auth.authenticating;
};
