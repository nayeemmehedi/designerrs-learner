import axiosApi from "../../Helper/api";
import { COUPON_CODE, PAY_ERROR, PAY_TRAN_ID } from "./Coupon_actionType";

export const coupon_code = (value) => ({
  type: COUPON_CODE,
  payload: value,
});

export const getTranId = (data) => async (dispatch) => {
  console.log("getTranId", data);
  axiosApi
    .post(`learner/transactions/initiate`, data)
    .then((res) => {
      console.log(res.data)
      dispatch({
        type: PAY_TRAN_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: PAY_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};
export const completePayment = (data, history) => async (dispatch) => {
  console.log("completePayment", data);
  axiosApi
    .post(`/learner/transactions`, data)
    .then((res) => {
      history && history.push("/dashboard");
    })
    .catch((err) => {
      dispatch({
        type: PAY_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};
