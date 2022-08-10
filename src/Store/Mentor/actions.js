import axiosApi from "../../Helper/api"
import { notifyError, notifyLoading } from "../notify/actions"
import {
  GET_ALL_ASSIGNED_COURSE,
  GET_ONBOARDING_DATA,
  GET_ALL_SESSIONS,
  GET_SESSION_DETAILS,
  GET_ALL_ASSIGNED_COURSE_ERROR,
  GET_ENROLLED_COURSE,
  GET_MENTOR_DATA,
} from "./actionTypes"

export const getassigned_course = () => async dispatch => {
  // dispatch({ type:  GET_ENROLLED_COURSE });
  axiosApi
    .get(`/mentor/courses`)
    .then(res => {
      console.log(res)
      dispatch({ type: GET_ALL_ASSIGNED_COURSE, payload: res.data })
      dispatch({ type: GET_ALL_ASSIGNED_COURSE_ERROR, payload: "" })
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_ASSIGNED_COURSE_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      })
    })
}

export const getMentorOnBoarding = id => async dispatch => {
  dispatch({ type: GET_ENROLLED_COURSE })
  axiosApi
    .get(`/mentor/courses/${id}/onboarding`)
    .then(res => {
      console.log(res)
      dispatch({ type: GET_ONBOARDING_DATA, payload: res.data })
      dispatch({ type: GET_ALL_ASSIGNED_COURSE_ERROR, payload: "" })
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_ASSIGNED_COURSE_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      })
    })
}

export const getMentorSession = id => async dispatch => {
  dispatch({ type: GET_ENROLLED_COURSE })
  axiosApi
    .get(`/mentor/courses/${id}/sessions`)
    .then(res => {
      console.log("store session", res)
      dispatch({ type: GET_ALL_SESSIONS, payload: res.data })
      dispatch({ type: GET_ALL_ASSIGNED_COURSE_ERROR, payload: "" })
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_ASSIGNED_COURSE_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      })
    })
}

export const getMentorPortfolio = () => async dispatch => {
  axiosApi
    .get(`/mentor/profile`)
    .then(res => {
      console.log("Menor profile", res)
      dispatch({
        type: GET_MENTOR_DATA,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_ASSIGNED_COURSE_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      })
    })
}
export const updateMentorPortfolio = value => async dispatch => {
  dispatch(notifyLoading(true))
  axiosApi
    .patch(`/mentor/profile`, value)
    .then(res => {
      console.log("update mentor profile~", res)
      axiosApi
        .get(`/mentor/profile`)
        .then(res => {
          console.log("Menor profile", res)
          dispatch({
            type: GET_MENTOR_DATA,
            payload: res.data,
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ALL_ASSIGNED_COURSE_ERROR,
            payload: err?.response?.data?.error || "Invalid Operation",
          })
        })
      dispatch(notifyLoading(false))
    })
    .catch(err => {
      dispatch(notifyError(err?.response?.data?.error || "Invalid Operation"))
    })
}
