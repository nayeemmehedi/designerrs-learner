import {

    GET_LOCATION,
    GET_LOCATION_DATA,
    GET_LOCATION_API_ERROR
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    location: {},
    error: "",
  };
  
  const Location = (state = initialState, action) => {
    switch (action.type) {
      case GET_LOCATION:
        state = {
          ...state,
          loading: true,
        };
        break;
      case GET_LOCATION_DATA:
        state = {
          ...state,
          location: action.payload,
          loading: false,
        };
        break;
      case GET_LOCATION_API_ERROR:
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
  
  export default Location;
  