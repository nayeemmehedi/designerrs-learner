import {

    GET_FEEDBACK,
    GET_FEEDBACK_DATA,
    GET_FEEDBACK_API_ERROR
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    feedback: {},
    error: "",
  };
  
  const Feedback = (state = initialState, action) => {
    switch (action.type) {
      case GET_FEEDBACK:
        state = {
          ...state,
          loading: true,
        };
        break;
      case GET_FEEDBACK_DATA:
        state = {
          ...state,
          feedback: action.payload,
          loading: false,
        };
        break;
      case GET_FEEDBACK_API_ERROR:
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
  
  export default Feedback;
  