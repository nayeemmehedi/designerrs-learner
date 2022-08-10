import { SINGLE_COURSE } from "./SingleCourseActionTypes";

const initialState = {
  loading: false,
  error: null,
  currentBox: 1,

  singleCourseValue: {
    id: 0,
    img: "",
    courseName: "",
    price: 0,
  },

  data: {},
};

const SingleCourseReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SINGLE_COURSE:
      state = {
        ...state,
        singleCourseValue: {
          ...state.singleCourseValue,
          id: action.payload.id,
          img: action.payload.img,
          courseName: action.payload.courseName,
          price: action.payload.price,
        },
      };
      break;

    default:
      break;
  }
  return state;
};

export default SingleCourseReducer;
