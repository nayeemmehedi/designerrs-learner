import {
  GET_ALL_COURSE_SESSIONS,
  GET_ONE_COURSE_SESSIONS,
  GET_CARTIFICATE_ID,
  SESSION_LOAD,
  SESSION_ERROR,
  GET_ASSIGNMENT,
  FLUSH_ASSIGNMENT,
  GET_COMMENTS,
  CMNT_IDX,
  LOADER_COURSEMAT
} from "./actionTypes";

const initialState = {
  sessions: [],
  sessionDetails: [],
  cartrificateId: null,
  loading: false,
  submittedAssigments:[],
  comments: [],
  commentIdx: null,
  sLoad: false
};

const courseMaterials = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_COURSEMAT:
      state = {
        ...state,
        sLoad: true,
      };
      break;
    case SESSION_LOAD:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_ALL_COURSE_SESSIONS:
      state = {
        ...state,
        loading: false,
        sessions: action.payload,
      };
      break;

    case GET_ONE_COURSE_SESSIONS:
      state = {
        ...state,
        loading: false,
        sessionDetails: action.payload,
        cartrificateId: false,
      };
      break;

    case FLUSH_ASSIGNMENT:
      state = {
        ...state,
        submittedAssigments: [],
      };
      break;
    case GET_ASSIGNMENT:
      state = {
        ...state,
        submittedAssigments: action.payload,
        sLoad: false
      };
      break;
    case GET_COMMENTS:
      state = {
        ...state,
        comments: action.payload,
        sLoad: false
      };
      break;
    case GET_CARTIFICATE_ID:
      state = {
        ...state,
        cartrificateId: true,
      };
      break;
    case CMNT_IDX:
      state = {
        ...state,
        commentIdx: action.payload,
      };
      break;
    case SESSION_ERROR:
      state = {
        ...state,
        error: action.payload,
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

export default courseMaterials;
