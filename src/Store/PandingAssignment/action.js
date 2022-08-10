import axiosApi, { get } from "../../Helper/api"
import {
  GET_WEEK_DATA,
  GET_FILTER_DATA,
  GET_EFFORT_DATA,
  GET_MENROT_PANDING_ASSINMENT,
} from "./actionType"

export const getWeekData = (startDate, endDate) => async dispatch => {
  axiosApi
    .get(
      `/learner/courses/assignments/pending?startDate=${startDate}&endDate=${endDate}`
    )
    .then(res => {
      console.log("res", res)
      dispatch({ type: GET_WEEK_DATA, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const getFilterWeekData =
  (startDate, endDate, data) => async dispatch => {
    let filterData = data?.map(i => i.toLowerCase()).join(",")

    const url = `/learner/courses/assignments/pending?startDate=${startDate}&endDate=${endDate}&status=${filterData}`

    axiosApi
      .get(url)
      .then(res => {
        console.log("filterres", res)
        dispatch({ type: GET_FILTER_DATA, payload: res.data })
      })
      .catch(err => console.log(err))
  }

export const getEffortData = (startDate, endData) => async dispatch => {
  axiosApi
    .get(`/learner/effort?startDate=${startDate}&endDate=${endData}`)
    .then(res => {
      console.log("effort", res)
      dispatch({ type: GET_EFFORT_DATA, payload: res.data })
    })
}

export const getMenrotPandingAssignment = (id, batchId) => async dispatch => {
  axiosApi
    .get(`/mentor/course/${id}/batch/${batchId}/assignments`)
    .then(res => {
      dispatch({ type: GET_MENROT_PANDING_ASSINMENT, payload: res.data })
    })
}
