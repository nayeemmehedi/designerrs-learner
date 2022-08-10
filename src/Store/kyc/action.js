import axiosApi from "../../Helper/api";
import { GET_KYC, GET_KYC_DATA, GET_KYC_API_ERROR } from "./actionTypes";

export const getkyc = () => async (dispatch) => {
  dispatch({ type: GET_KYC });
  
  axiosApi
    .get(`/learner/kyc`)
    .then((res) => {
      console.log(res)
      dispatch({ type: GET_KYC_DATA, payload: res.data });
      dispatch({ type: GET_KYC_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_KYC_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};

