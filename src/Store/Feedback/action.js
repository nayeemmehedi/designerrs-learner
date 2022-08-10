import axiosApi from "../../Helper/api";
import { GET_FEEDBACK, GET_FEEDBACK_DATA, GET_FEEDBACK_API_ERROR } from "./actionTypes";

export const getFeedBack = () => async (dispatch) => {
  dispatch({ type: GET_FEEDBACK });
  
  axiosApi
    .get(`/mentor/feedbacks`)
    .then((res) => {
      console.log("feedback res",res)
      dispatch({ type: GET_FEEDBACK_DATA, payload: res.data });
      dispatch({ type: GET_FEEDBACK_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_FEEDBACK_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};

