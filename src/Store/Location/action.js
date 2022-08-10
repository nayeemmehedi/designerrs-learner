import axiosApi from "../../Helper/api";
import { GET_LOCATION, GET_LOCATION_DATA, GET_LOCATION_API_ERROR } from "./actionTypes";

export const getLocation = () => async (dispatch) => {
  dispatch({ type: GET_LOCATION });
  
  axiosApi
    .get(`admin/location/filters?status=active`)
    .then((res) => {
      console.log(res)
      dispatch({ type: GET_LOCATION_DATA, payload: res.data });
      dispatch({ type: GET_LOCATION_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_LOCATION_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};
