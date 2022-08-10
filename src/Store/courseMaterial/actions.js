import axiosApi from "../../Helper/api";

import {
  GET_ALL_COURSE_SESSIONS,
  GET_ONE_COURSE_SESSIONS,
  POST_ASSIGNMENT,
  SESSION_ERROR,
  SESSION_LOAD,
  GET_ASSIGNMENT,
  GET_COMMENTS,
  LOADER_COURSEMAT,
} from "./actionTypes";

export const getAllCourseSeason = (id, batch) => async (dispatch) => {
  const role = localStorage.getItem("role");
  dispatch({
    type: SESSION_LOAD,
  });
  if (role == "mentor") {
    axiosApi
      .get(`/mentor/courses/${batch}/sessions`)
      .then((res) => {
        console.log("res", res);
        dispatch({ type: GET_ALL_COURSE_SESSIONS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SESSION_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        });
      });
  } else if (role == "learner") {
    axiosApi
      .get(`/learner/courses/${id}/sessions`)
      .then((res) => {
        console.log("sessions data api", res);
        dispatch({ type: GET_ALL_COURSE_SESSIONS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SESSION_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        });
      });
  }
};

export const getOneCourseSeason = (id, batch, sessionId) => async (dispatch) => {
  dispatch({
    type: LOADER_COURSEMAT,
  });
  const role = localStorage.getItem("role");
  if (role == "mentor") {
    axiosApi
      .get(`/mentor/courses/${batch}/sessions/${sessionId}`)
      .then((res) => {
        console.log("session Details", res);
        dispatch({ type: GET_ONE_COURSE_SESSIONS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SESSION_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        });
      });
  } else if (role == "learner") {
    axiosApi
      .get(`/learner/courses/${id}/sessions/${sessionId}`)
      .then((res) => {
        console.log("res", res);
        dispatch({ type: GET_ONE_COURSE_SESSIONS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SESSION_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        });
      });
  }
};

export const postAssignment =
  (id, sessionId, assignmentId, data) => async (dispatch) => {
    dispatch({
      type: LOADER_COURSEMAT,
    });
    const role = localStorage.getItem("role");
    if (role == "mentor") {
      const res = await axiosApi.post(
        `/mentor/courses/${id}/sessions/${sessionId}/assignments/${assignmentId}`,
        data
      );
      dispatch({
        type: POST_ASSIGNMENT,
        payload: res.data,
      });
    } else if (role == "learner") {
      axiosApi
        .post(
          `/learner/courses/${id}/sessions/${sessionId}/assignments/${assignmentId}`,
          data
        )
        .then((res) => {
          console.log(res);
          dispatch({ type: POST_ASSIGNMENT, payload: res.data });
          dispatch(getAssignment(id, sessionId, assignmentId));
        })
        .catch((err) => {
          dispatch({
            type: SESSION_ERROR,
            payload: err?.response?.data?.error || "Invalid Operation",
          });
        });
    }
  };
export const updateAssignment =
  (id, sessionId, assignmentId, data) => async (dispatch) => {
    dispatch({
      type: LOADER_COURSEMAT,
    });
    const role = localStorage.getItem("role");
    if (role == "mentor") {
      const res = await axiosApi.post(
        `/mentor/courses/${id}/sessions/${sessionId}/assignments/${assignmentId}`,
        data
      );
      dispatch({
        type: POST_ASSIGNMENT,
        payload: res.data,
      });
    } else if (role == "learner") {
      axiosApi
        .patch(
          `/learner/courses/${id}/sessions/${sessionId}/assignments/${assignmentId}`,
          data
        )
        .then((res) => {
          console.log("postAssignment", res);
          dispatch({ type: POST_ASSIGNMENT, payload: res.data });
          dispatch(getAssignment(id, sessionId, assignmentId));
        })
        .catch((err) => {
          dispatch({
            type: SESSION_ERROR,
            payload: err?.response?.data?.error || "Invalid Operation",
          });
        });
    }
  };
export const getAssignment =
  (id, sessionId, assignmentId) => async (dispatch) => {
    dispatch({
      type: LOADER_COURSEMAT,
    });
    const role = localStorage.getItem("role");
    if (role == "mentor") {
      // const res = await axiosApi.post(
      //   `/mentor/courses/${id}/sessions/${sessionId}/assignments/${assignmentId}`,
      //   data
      // );
      // dispatch({
      //   type: POST_ASSIGNMENT,
      //   payload: res.data,
      // });
    } else if (role == "learner") {
      axiosApi
        .get(
          `/learner/courses/${id}/sessions/${sessionId}/assignments/${assignmentId}`
        )
        .then((res) => {
          console.log(res);
          dispatch({ type: GET_ASSIGNMENT, payload: res.data });
        })
        .catch((err) => {
          dispatch({
            type: SESSION_ERROR,
            payload: err?.response?.data?.error || "Invalid Operation",
          });
        });
    }
  };

// Comment
export const postComment = (assignmentId, value) => async (dispatch) => {
  const role = localStorage.getItem("role");
  console.log(value, assignmentId);
  if (role == "mentor") {
    // const res = await axiosApi.post(
    //   `/mentor/courses/${id}/sessions/${sessionId}/assignments/${assignmentId}`,
    //   data
    // );
    // dispatch({
    //   type: POST_ASSIGNMENT,
    //   payload: res.data,
    // });
  } else if (role == "learner") {
    axiosApi
      .post(`/learner/assignments/${assignmentId}/comments`, value)
      .then((res) => {
        console.log("postComment", res);
        dispatch(getComment(assignmentId));
        // dispatch({ type: GET_ASSIGNMENT, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SESSION_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        });
      });
  }
};
export const getComment = (assignmentId) => async (dispatch) => {
  const role = localStorage.getItem("role");
  console.log(assignmentId);
  if (role == "mentor") {
    // const res = await axiosApi.post(
    //   `/mentor/courses/${id}/sessions/${sessionId}/assignments/${assignmentId}`,
    //   data
    // );
    // dispatch({
    //   type: POST_ASSIGNMENT,
    //   payload: res.data,
    // });
  } else if (role == "learner") {
    axiosApi
      .get(`/learner/assignments/${assignmentId}/comments`)
      .then((res) => {
        console.log("getComment", res);
        dispatch({ type: GET_COMMENTS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SESSION_ERROR,
          payload: err?.response?.data?.error || "Invalid Operation",
        });
      });
  }
};
