import axiosApi from "../../Helper/api";
import {
  GET_MENTOR,
  GET_MENTOR_DATA,
  GET_MENTOR_API_ERROR,
  GET_MENTOR_DATA_DETAILS,
  FILTEER_DATA
} from "./actionTypes";

export const getMentor = () => async (dispatch) => {
  dispatch({ type: GET_MENTOR });

  axiosApi
    .get(`/admin/mentors`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_MENTOR_DATA, payload: res.data });
      dispatch({ type: GET_MENTOR_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_MENTOR_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};

export const getMentorDetails = (id) => async (dispatch) => {
  dispatch({ type: GET_MENTOR });

  axiosApi
    .get(`/admin/mentors/${id}`)
    .then((res) => {
      console.log("res", res.data);
      dispatch({ type: GET_MENTOR_DATA_DETAILS, payload: res.data });
      dispatch({ type: GET_MENTOR_API_ERROR, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: GET_MENTOR_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });
};

// api/admin/mentors/filters?status=unallocated&remuneration_max=100&remuneration_min=0&totalBatches_min=&totalBatches_max=&location=

export const filterData = (page, limit,filter) => async (dispatch) => {
  dispatch({ type: GET_MENTOR, payload: true });
  const url =
    filter?.status || filter?.remuneration_max || filter?.remuneration_min || filter?.totalBatches_min || filter?.totalBatches_min 
      ? `admin/mentors/filters?page=${page + 1}&limit=${limit ? limit : 10}&status=${filter?.status}&remuneration_max=${ filter?.remuneration_max}&remuneration_min=${ filter?.remuneration_min}&totalBatches_min=${filter?.totalBatches_min}&totalBatches_max=${ filter?.totalBatches_max}&`
      : `admin/mentors/filters?page=${page + 1}&limit=${limit ? limit : 10}`;
      
      
  axiosApi
    .get(url)
    .then((res) => {
      console.log("my", res);
      dispatch({ type: GET_MENTOR_DATA, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_MENTOR_API_ERROR,
        payload: err?.response?.data?.error || "Invalid Operation",
      });
    });

};


// Filter Course
// export const filterData =
//   (page, filter, limit) => async (dispatch) => {
//     console.log(filter);
//     const url =
//     filter?.status || filter?.remuneration_max || filter?.remuneration_min || filter?.totalBatches_min || filter?.totalBatches_min || filter.location
//         ? `/admin/courses/filter?page=${page + 1}&limit=${
//             limit ? limit : 10
//           }&status=${filter?.status}&sessionDuration=${
//             filter?.sessionDuration
//           }&&startPrice=${filter?.startPrice}&&endPrice=${filter?.endPrice}`
//         : `/admin/courses/filter?page=${page + 1}&limit=${limit ? limit : 10}`;

//     dispatch({ type: GET_COURSE_DETAILS_LOAD, payload: "" });
//     axiosApi
//       .get(url)
//       .then((res) => {
//         console.log(res.data);
//         dispatch(courseDetailsData(res.data));
//         dispatch(courseDetailsError(""));
//       })
//       .catch((err) => {
//         dispatch({ type: SEND_LOAD, payload: false });
//         dispatch(
//           courseDetailsError(err?.response?.data?.error || "Invalid Operation")
//         );
//       });
//   };

