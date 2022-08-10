import {
  GET_PORTFOLIO,
  GET_PORTFOLIO_DATA,
  GET_PORTFOLIO_API_ERROR,
  GET_MEDIUM_DATA,
  GETALL_CASE_STUDIES,
  GET_GLOBAL_DATA
} from "./ActionTypes";

const initialState = {
  loading: false,
  portfolioValue: {},
  error: "",
  caseStudies: [],
  medium: [],
  global: {}
};

const PortfolioReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PORTFOLIO:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_PORTFOLIO_DATA:
      state = {
        ...state,
        portfolioValue: action.payload,
        loading: false,
      };
      break;
    case GET_GLOBAL_DATA:
      state = {
        ...state,
        global: action.payload,
        loading: false,
      };
      break;
    case GETALL_CASE_STUDIES:
      state = {
        ...state,
        caseStudies: action.payload,
        loading: false,
      };
      break;
    case GET_MEDIUM_DATA:
      state = {
        ...state,
        medium: action.payload,
        loading: false,
      };
      break;

    case GET_PORTFOLIO_API_ERROR:
      state = {
        ...state,
        error: action.payload,
        loading: false,
      };
      break;

    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};

export default PortfolioReducers;
