import { OPEN_BOXES } from "./actionTypes";

export const storeBoxes = (key, value, key1, value1) => ({
  type: OPEN_BOXES,
  payload: {
    key,
    value,
    key1,
    value1,
  },
});
