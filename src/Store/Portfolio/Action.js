import axiosApi, { get } from "../../Helper/api"
import {
  GET_PORTFOLIO,
  GET_PORTFOLIO_DATA,
  GET_PORTFOLIO_API_ERROR,
  GET_MEDIUM_DATA,
  GETALL_CASE_STUDIES,
  GET_GLOBAL_DATA,
} from "./ActionTypes"

export const getPortfolio = id => async dispatch => {
  dispatch({ type: GET_PORTFOLIO })
  axiosApi
    .get(`/learner/portfolio?uid=${id}`)
    .then(res => {
      console.log("is there any response", res.data)
      dispatch({ type: GET_PORTFOLIO_DATA, payload: res.data.Portfolio })
      dispatch({ type: GET_PORTFOLIO_API_ERROR, payload: "" })
    })
    .catch(err => {
      dispatch({
        type: GET_PORTFOLIO_API_ERROR,
        payload: err || "Invalid Operation",
      })
    })
}
export const postPortfolio = (id, data) => async dispatch => {
  // dispatch({ type: GET_PORTFOLIO })
  // console.log(data)
  axiosApi
    .post(`/learner/portfolio`, data)
    .then(res => {
      console.log(res.data)
      dispatch(getPortfolio(id))
      dispatch({ type: GET_PORTFOLIO_API_ERROR, payload: "" })
    })
    .catch(err => {
      dispatch({
        type: GET_PORTFOLIO_API_ERROR,
        payload: err || "Invalid Operation",
      })
    })
}
export const getCaseStudy = (type, name) => async dispatch => {
  axiosApi
    .get(`/learner/portfolio/integration?type=${type}&username=${name}`)
    .then(res => {
      dispatch({ type: GET_MEDIUM_DATA, payload: res.data })
      dispatch({ type: GET_PORTFOLIO_API_ERROR, payload: "" })
    })
    .catch(err => {
      dispatch({
        type: GET_PORTFOLIO_API_ERROR,
        payload: err || "Invalid Operation",
      })
    })
}

export const getAllStudies = () => async dispatch => {
  axiosApi
    .get(`/learner/casestudies`)
    .then(res => {
      console.log(res)
      dispatch({
        type: GETALL_CASE_STUDIES,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: GET_PORTFOLIO_API_ERROR,
        payload: err || "Invalid Operation",
      })
    })
}
export const createCaseStudy = data => async dispatch => {
  // console.log(data.title)
  axiosApi
    .post(`/learner/casestudies`, {
      tittle: data?.title,
      thumbnail: data?.thumbnail,
    })
    .then(res => {
      console.log(res)
      dispatch(getAllStudies())
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_PORTFOLIO_API_ERROR,
        payload: err || "Invalid Operation",
      })
    })
}
export const getGlobalData = () => async dispatch => {
  axiosApi
    .get(
      `admin/globalsettings/fields?fields=industry,learneSkills,learnerTools`
    )
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_GLOBAL_DATA,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: GET_PORTFOLIO_API_ERROR,
        payload: err || "Invalid Operation",
      })
    })
}
