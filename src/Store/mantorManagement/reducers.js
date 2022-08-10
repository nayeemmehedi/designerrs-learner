import {

    GET_MENTOR,
    GET_MENTOR_DATA,
    GET_MENTOR_API_ERROR,
    GET_MENTOR_DATA_DETAILS,
    FILTEER_DATA
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    mentor: {},
    mentorDetails:{},
    error: ""
  };
  
  const mentors = (state = initialState, action) => {
    switch (action.type) {
      case GET_MENTOR:
        state = {
          ...state,
          loading: true,
        };
        break;
      case GET_MENTOR_DATA:
        state = {
          ...state,
          mentor: action.payload,
          loading: false,
        };
        break;
      case GET_MENTOR_DATA_DETAILS:
        state = {
          ...state,
          mentorDetails: action.payload,
          loading: false,
        };
        break;
      case GET_MENTOR_API_ERROR:
        state = {
          ...state,
          error: action.payload,
          loading: false,
        };
        break;

        case FILTEER_DATA:
          state = {
            ...state,
            mentor: action.payload,
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
  
  export default mentors;
  