import {

    GET_USER,
    GET_USER_DATA,
    GET_USER_API_ERROR
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    user: {},
    error: "",
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER:
        state = {
          ...state,
          loading: true,
        };
        break;
      case GET_USER_DATA:
        state = {
          ...state,
          user: action.payload,
          loading: false,
        };
        break;
      case GET_USER_API_ERROR:
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
  
  export default user;
  