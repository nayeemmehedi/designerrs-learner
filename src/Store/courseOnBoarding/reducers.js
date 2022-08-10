import {
  GET_ENROLLED_COURSE,
  GET_ENROLLED_COURSE_DATA,
  GET_ENROLLED_COURSE_API_ERROR,
  GET_ONBOARDING_DATA,
} from "./actionTypes";

const initialState = {
  loading: false,
  courses: [],
  error: "",
  onBoarding: [],
};

const courseOnBoarding = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENROLLED_COURSE:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_ENROLLED_COURSE_DATA:
      state = {
        ...state,
        courses: action.payload,
        loading: false,
      };
      break;
    case GET_ENROLLED_COURSE_API_ERROR:
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
    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};

export default courseOnBoarding;
