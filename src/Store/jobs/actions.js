import axiosApi from "../../Helper/api"
import { notifyError, notifyLoading } from "../notify/actions"
import {
  GET_JOB_POST,
  GET_JOB_POST_OPP,
  GET_JOB_POST_APP,
  GET_JOB_POST_SHORT,
  GET_JOB_POST_HIRED,
  GET_JOB_POST_API_ERROR,
  GET_JOB_POST_DETAILS_DATA,
} from "./actionTypes"

export const getAllJobs = (type, filter) => async dispatch => {
  const url =
    filter?.status ||
    filter?.workExperience ||
    filter?.role ||
    filter?.locations ||
    filter?.jobType
      ? `/learner/jobs/filter?filterType=${type}&${
          filter?.status ? `status=${filter?.status}` : ""
        }${
          filter?.workExperience
            ? `&workExperience=${filter?.workExperience}`
            : ""
        }${filter?.role ? `&role=${filter?.role}` : ""}${
          filter?.locations ? `&locations=${filter?.locations}` : ""
        }${filter?.jobType ? `&jobType=${filter?.jobType}` : ""}`
      : `/learner/jobs?jobs=${type}`
console.log(url)
  axiosApi
    .get(url)
    .then(res => {
      switch (type) {
        case "opportunities":
          return dispatch({ type: GET_JOB_POST_OPP, payload: res.data })
        case "applied":
          return dispatch({ type: GET_JOB_POST_APP, payload: res.data })
        case "shortlisted":
          return dispatch({ type: GET_JOB_POST_SHORT, payload: res.data })
        case "hired":
          return dispatch({ type: GET_JOB_POST_HIRED, payload: res.data })
      }
      dispatch({ type: GET_JOB_POST_API_ERROR, payload: "" })
    })
    .catch(err => {
      dispatch({
        type: GET_JOB_POST_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      })
    })
}

export const getOnejobs = id => async dispatch => {
  dispatch({ type: GET_JOB_POST })
  axiosApi
    .get(`/learner/jobs/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: GET_JOB_POST_DETAILS_DATA, payload: res.data })
      dispatch({ type: GET_JOB_POST_API_ERROR, payload: "" })
    })
    .catch(err => {
      dispatch({
        type: GET_JOB_POST_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      })
    })
}
