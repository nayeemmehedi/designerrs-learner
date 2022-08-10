import {
  GET_COURSE_DETAILS_LOAD,
  GET_COURSE_DETAILS_DATA,
  GET_COURSE_DETAILS_DATA_API_ERROR,
  GET_OVERVIEW_DATA,
  GET_OUTCOMES_DATA,
  GET_HIGHLIGHTS_DATA,
  GET_BENEFITS_DATA,
  GET_PLAN_DATA,
  GET_MODULES_DATA,
  GET_ELIGIBILTY_DATA,
  GET_CAREERPROSPECTS_DATA,
  GET_MENTORS_DATA,
  GET_TESTIMONIALS_DATA,
  GET_COURSE_DETAILS_FOR_UPDATE_DATA,
  WEB_STATUS,
  WEB_URL,
  ADD_MODULES,
  STORE_MODULES,
  EMPTY_COURSE_DETAILS,
  SEND_LOAD,
  FILTER_COURSE,
  GET_BATCH,
  FLUSH_COURSE
} from "./actionTypes";

const initialState = {
  sendLoad: false,
  loading: false,
  filter: {},
  data: [],
  error: "",
  overview: {},
  highlights: {},
  courseOutComes: {},
  benefits: {},
  plan: {},
  modules: [
    {
      moduleIcon: {},
      moduleName: "",
      sessions: "",
      topics: ["", "", "", "", ""],
    },
  ],
  eligibility: {},
  career: {},
  mentorsFour: [],
  testimonials: {},
  status: "",
  URL: "",
  details: {},
};

const courseDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_DETAILS_LOAD:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_COURSE_DETAILS_DATA:
      state = {
        ...state,
        data: action.payload,
        loading: false,
      };
      break;
    case GET_COURSE_DETAILS_FOR_UPDATE_DATA:
      state = {
        ...state,
        details: action.payload,
        loading: false,
      };
      break;
    case GET_COURSE_DETAILS_DATA_API_ERROR:
      state = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    case GET_OVERVIEW_DATA:
      state = {
        ...state,
        overview: action.payload,
      };
      break;
    case GET_HIGHLIGHTS_DATA:
      state = {
        ...state,
        highlights: action.payload,
      };
      break;
    case GET_OUTCOMES_DATA:
      state = {
        ...state,
        courseOutComes: action.payload,
      };
      break;
    case GET_BENEFITS_DATA:
      state = {
        ...state,
        benefits: action.payload,
      };
      break;
    case GET_PLAN_DATA:
      state = {
        ...state,
        plan: action.payload,
      };
      break;
    case ADD_MODULES:
      state = {
        ...state,
        modules: [
          ...state.modules,
          {
            moduleIcon: {},
            moduleName: "",
            sessions: "",
            topics: ["", "", "", "", ""],
          },
        ],
      };
      break;
    case STORE_MODULES:
      state = {
        ...state,
        modules: action.payload,
      };
      break;
    case GET_MODULES_DATA:
      state = {
        ...state,
        modules: action.payload,
      };
      break;
    case GET_ELIGIBILTY_DATA:
      state = {
        ...state,
        eligibility: action.payload,
      };
      break;
    case GET_CAREERPROSPECTS_DATA:
      state = {
        ...state,
        career: action.payload,
      };
      break;
    case GET_MENTORS_DATA:
      state = {
        ...state,
        mentorsFour: action.payload,
      };
      break;
    case GET_TESTIMONIALS_DATA:
      state = {
        ...state,
        testimonials: action.payload,
      };
      break;
    case WEB_STATUS:
      state = {
        ...state,
        status: action.payload,
      };
      break;
    case WEB_URL:
      state = {
        ...state,
        URL: action.payload,
      };
      break;
    case EMPTY_COURSE_DETAILS:
      state = initialState;

      break;
    case SEND_LOAD:
      state = {
        ...state,
        sendLoad: action.payload,
      };
      break;
    case FLUSH_COURSE:
      state = {
        ...state,
        data: [],
      };
      break;
    
     
  }
  return state;
};

export default courseDetails;
