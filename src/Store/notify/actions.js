import { ERROR, SUCCESS, LOADING } from "./actionTypes";

export const notifyError = (data) => async (dispatch) => {
  console.log(data)
  dispatch({ type: ERROR, payload: data });
};
export const notifySuccess = (data) => async (dispatch) => {
  dispatch({ type: SUCCESS, payload: data });
};
export const notifyLoading = (data) => async (dispatch) => {
  dispatch({ type: LOADING, payload: data });
};
