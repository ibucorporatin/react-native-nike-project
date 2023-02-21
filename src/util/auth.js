import axios from "axios";
const API_KEY = "AIzaSyCgpXJpXRj__N1vxZ0KjZDpQAB67B81t-A";

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  console.log(url);
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  console.log("ithuwork agutha");

  return response;
};
export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};
export const login = async (email, password) => {
  return await authenticate("signInWithPassword", email, password);
};
