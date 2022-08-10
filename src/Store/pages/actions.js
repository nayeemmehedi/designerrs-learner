import axiosApi from "../../Helper/api";
import {
  GET_PAGE,
  GET_PAGE_DATA,
  GET_PAGE_API_ERROR,
  GET_SITE_INFO,
  FOOTER_PAGE,
  HEADER_PAGE,
} from "./actionTypes";

export const getPages = () => async (dispatch) => {
  dispatch({ type: GET_PAGE });
  axiosApi
    .get(`/learners`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_PAGE_DATA, payload: res.data });
      dispatch({ type: GET_PAGE_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_PAGE_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};
export const getSiteInfo = () => async (dispatch) => {
  dispatch({ type: GET_PAGE });

  axiosApi
    .get(`/admin/globalsettings/navigation?type=header`)
    .then((res) => {
      // console.log(res);
      dispatch({ type: HEADER_PAGE, payload: res.data });
      dispatch({ type: GET_PAGE_API_ERROR, payload: "" });
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch(
        dispatch({
          type: GET_PAGE_API_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        })
      );
    });
  axiosApi
    .get(`/admin/globalsettings/navigation?type=footer`)
    .then((res) => {
      console.log("footer", res);
      dispatch({ type: FOOTER_PAGE, payload: res.data });
      dispatch({ type: GET_PAGE_API_ERROR, payload: "" });
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch(
        dispatch({
          type: GET_PAGE_API_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        })
      );
    });
  axiosApi
    .get(
      `/admin/globalsettings/fields?fields=siteTitle,tagline,companyDescription,contactNumber,contactEmail,websiteLogo,retinaLogo,favicon,socialMediaLinks`
    )
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_SITE_INFO, payload: res.data });
      dispatch({ type: GET_PAGE_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_PAGE_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};
