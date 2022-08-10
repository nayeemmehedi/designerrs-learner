import { ERROR, SUCCESS, LOADING } from "./actionTypes";

const initialState = {
  error: "",
  success: "",
  loading: false,
};

const alert = (state = initialState, action) => {
  // console.log(state, action)
  switch (action.type) {
    case ERROR:
      state = {
        ...state,
        error: action.payload,
      };
      break;
    case SUCCESS:
      state = {
        ...state,
        success: action.payload,
      };
      break;
    case LOADING:
      state = {
        ...state,
        loading: action.payload,
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

export default alert;
