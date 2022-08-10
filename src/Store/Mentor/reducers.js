import {
  GET_ALL_ASSIGNED_COURSE,
  GET_ONBOARDING_DATA,
  GET_ALL_SESSIONS,
  GET_SESSION_DETAILS,
  GET_ALL_ASSIGNED_COURSE_ERROR,
  GET_ENROLLED_COURSE,
  GET_MENTOR_DATA
  } from "./actionTypes";
  
  const initialState = {
    loading: true,
    courses: [],
    sessions:[],
    error: "",
    onBoarding: [],
    mentorData: {}
  };

  
  const OnBoardingMentor = (state = initialState, action) => {
    switch (action.type) {
      case GET_ENROLLED_COURSE:
        state = {
          ...state,
          loading: true,
        };
        break;
      case GET_MENTOR_DATA:
        state = {
          ...state,
          mentorData: action.payload,
          loading: false,
        };
        break;
      case GET_ALL_ASSIGNED_COURSE:
        state = {
          ...state,
          courses: action.payload,
          loading: false,
        };
        break;
      case GET_ALL_ASSIGNED_COURSE_ERROR:
        state = {
          ...state,
          error: action.payload,
          loading: false,
        };
        break;
      case GET_ONBOARDING_DATA:
        state = {
          ...state,
          onBoarding: action.payload,
          loading: false,
        };
        break;

        case GET_ALL_SESSIONS:
          state = {
            ...state,
            sessions : action.payload,
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
  
  export default OnBoardingMentor;
  