import { COUPON_CODE, PAY_TRAN_ID } from "./Coupon_actionType";

const initialState = {
  loading: false,
  error: null,
  data: "",
  transactionId: null
};

const Coupon_reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUPON_CODE:
      state = {
        ...state,
        data: action.payload,
      };
      break;
    case PAY_TRAN_ID:
      state = {
        ...state,
        transactionId: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
};

export default Coupon_reducer;
