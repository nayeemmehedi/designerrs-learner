import { OPEN_BOXES, COURSE_BUY } from "./actionTypes";

const initialState = {
  loading: false,
  error: null,
  currentBox: 1,

  completeBox: {
    boxOne: false,
    boxTwo: false,

    boxThree: false,
    boxFour: false,
  },

  data: {},
  pay: {}
};

const courseEnrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_BOXES:
      state = {
        ...state,
        completeBox: {
          ...state.completeBox,
          [action.payload.key]: action.payload.value,
          [action.payload.key1]: action.payload.value1,
        },
      };
      break;
    case COURSE_BUY:
      state = {
        ...state,
        pay: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
};

export default courseEnrollReducer;
