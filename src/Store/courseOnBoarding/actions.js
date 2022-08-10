import axiosApi from "../../Helper/api";
import {
  GET_ENROLLED_COURSE,
  GET_ENROLLED_COURSE_DATA,
  GET_ENROLLED_COURSE_API_ERROR,
  GET_ONBOARDING_DATA,
} from "./actionTypes";

export const getEnrolledCourses = () => async (dispatch) => {
  dispatch({ type: GET_ENROLLED_COURSE });
  axiosApi
    .get(`/learner/courses/enrolled`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ENROLLED_COURSE_DATA, payload: res.data });
      dispatch({ type: GET_ENROLLED_COURSE_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_ENROLLED_COURSE_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};

export const getCourseOnBoarding = (id) => async (dispatch) => {
  dispatch({ type: GET_ENROLLED_COURSE });
  axiosApi
    .get(`/learner/courses/${id}/onboarding`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ONBOARDING_DATA, payload: res.data });
      dispatch({ type: GET_ENROLLED_COURSE_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_ENROLLED_COURSE_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};
