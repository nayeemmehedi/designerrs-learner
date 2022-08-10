import { SINGLE_COURSE } from "./SingleCourseActionTypes";

export const singlecourse = (id, img, courseName, price) => ({
  type: SINGLE_COURSE,
  payload: {
    id,
    img,
    courseName,
    price,
  },
});
