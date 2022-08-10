import {

    GET_KYC,
    GET_KYC_DATA,
    GET_KYC_API_ERROR
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    kyc: {},
    error: "",
  };
  
  const kyc = (state = initialState, action) => {
    switch (action.type) {
      case GET_KYC:
        state = {
          ...state,
          loading: true,
        };
        break;
      case GET_KYC_DATA:
        state = {
          ...state,
          kyc: action.payload,
          loading: false,
        };
        break;
      case GET_KYC_API_ERROR:
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
  
  export default kyc;
  