import {
  GET_PAGE,
  GET_PAGE_DATA,
  GET_PAGE_API_ERROR,
  GET_SITE_INFO,
  HEADER_PAGE,
  FOOTER_PAGE,
} from "./actionTypes";

const initialState = {
  loading: true,
  error: "",
  siteinfo: {},
  header: [],
  footer: [],
};

const pages = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGE:
      state = {
        ...state,
        loading: true,
      };
      break;
    case HEADER_PAGE:
      state = {
        ...state,
        header: action.payload,
        loading: false,
      };
      break;
    case FOOTER_PAGE:
      state = {
        ...state,
        footer: action.payload,
        loading: false,
      };
      break;
    case GET_SITE_INFO:
      state = {
        ...state,
        siteInfo: action.payload,
        loading: false,
      };
      break;
    case GET_PAGE_API_ERROR:
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

export default pages;
