import { loadToken } from "../../App"
import axiosApi from "../../Helper/api"
import { storeBoxes } from "../CourseEnroll/actions"
import { GET_USER, GET_USER_DATA, GET_USER_API_ERROR } from "./actionTypes"
const uid = localStorage.getItem("uid")

export const getUser = () => async dispatch => {
  dispatch({ type: GET_USER })
  loadToken()
  if (uid) {
    axiosApi
      .get(`/learners/${uid}`)
      .then(res => {
        console.log(res.data)
        dispatch({ type: GET_USER_DATA, payload: res.data })
        dispatch({ type: GET_USER_API_ERROR, payload: "" })
      })
      .catch(err => {
        dispatch({
          type: GET_USER_API_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        })
      })
  }
}
export const updateUser = (data, next) => async dispatch => {
  loadToken()
  axiosApi
    .patch(`/learners/${uid}`, data)
    .then(res => {
      console.log(res)
      axiosApi
        .get(`/learners/${uid}`)
        .then(res => {
          console.log(res.data)
          dispatch({ type: GET_USER_DATA, payload: res.data })
          dispatch({ type: GET_USER_API_ERROR, payload: "" })
        })
        .catch(err => {
          dispatch({
            type: GET_USER_API_ERROR,
            payload: err?.response?.data?.error || "Invalid Operation",
          })
        })
      next && dispatch(storeBoxes("boxFour", true, "boxThree", false))
    })
    .catch(err => {
      dispatch({
        type: GET_USER_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      })
    })
}
