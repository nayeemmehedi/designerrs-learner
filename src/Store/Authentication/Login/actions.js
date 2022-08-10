import { post } from "../../../Helper/API/API_Helper";
import { LOGIN_ERROR, LOGIN_LOADING, STORE_LOGIN_DATA } from "./actionTypes";

export const storeLoginInfo = (data, history) => async (dispatch) => {
  dispatch(loginLoading("loading"));
  try {
    const response = await post("/login", data);
    localStorage.setItem("token", response.token);
    dispatch(storeLoginData("loginInfo", response));
    history.push("/");
  } catch (error) {
    dispatch(loginError(error.message || "Invalid Operation"));
  }
};

export const storeLoginData = (name, data) => ({
  type: STORE_LOGIN_DATA,
  payload: {
    name,
    data,
  },
});

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginError = (data) => ({
  type: LOGIN_ERROR,
  payload: {
    data,
  },
});
