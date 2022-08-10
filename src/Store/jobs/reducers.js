import {
  GET_JOB_POST,
  GET_JOB_POST_OPP,
  GET_JOB_POST_APP,
  GET_JOB_POST_SHORT,
  GET_JOB_POST_HIRED,
  GET_JOB_POST_API_ERROR,
  GET_JOB_POST_DETAILS_DATA,
  FLUSH_JOBS,
  FILTER_TYPE,
} from "./actionTypes"

const initialState = {
  loading: false,
  opportunities: {},
  applied: {},
  shortlisted: {},
  hired: {},
  error: "",
  details: {},
  filterType: "",
}

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_POST:
      state = {
        ...state,
        loading: true,
      }
      break
    case GET_JOB_POST_OPP:
      state = {
        ...state,
        opportunities: action.payload,
        loading: false,
      }
      break
    case GET_JOB_POST_APP:
      state = {
        ...state,
        applied: action.payload,
        loading: false,
      }
      break
    case GET_JOB_POST_SHORT:
      state = {
        ...state,
        shortlisted: action.payload,
        loading: false,
      }
      break
    case GET_JOB_POST_HIRED:
      state = {
        ...state,
        hired: action.payload,
        loading: false,
      }
      break
    case GET_JOB_POST_DETAILS_DATA:
      state = {
        ...state,
        details: action.payload,
        loading: false,
      }
      break
    case FLUSH_JOBS:
      state = {
        ...state,
        details: [],
      }
      break
    case FILTER_TYPE:
      state = {
        ...state,
        filterType: action.payload,
      }
      break

    case GET_JOB_POST_API_ERROR:
      state = {
        ...state,
        error: action.payload,
        loading: false,
        sLoad: false,
      }
      break

    default:
      state = {
        ...state,
      }
      break
  }
  return state
}

export default jobs
