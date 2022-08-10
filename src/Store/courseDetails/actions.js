import axiosApi from "../../helpers/api";
import { notifyError } from "../notify/actions";

import {
  SEND_LOAD,
  GET_OVERVIEW_DATA,
  GET_COURSE_DETAILS_LOAD,
  GET_COURSE_DETAILS_DATA,
  GET_COURSE_DETAILS_DATA_API_ERROR,
  GET_HIGHLIGHTS_DATA,
  GET_OUTCOMES_DATA,
  GET_BENEFITS_DATA,
  GET_PLAN_DATA,
  GET_MODULES_DATA,
  GET_ELIGIBILTY_DATA,
  GET_CAREERPROSPECTS_DATA,
  GET_MENTORS_DATA,
  GET_TESTIMONIALS_DATA,
  WEB_STATUS,
  WEB_URL,
  GET_COURSE_DETAILS_FOR_UPDATE_DATA,

} from "./actionTypes";


//Get Details
export const getCourseDetailsForUpdateData = (id) => async (dispatch) => {
  axiosApi
    .get(`/admin/courses/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(courseDetailsForUpdateData(res.data));
      dispatch(courseDetailsError(""));
    })
    .catch((err) => {
      dispatch(courseDetailsError(err?.response?.data || "Invalid Operation"));
    });
};

//Post Course
export const postCourse = (value, toggle) => async (dispatch) => {
  axiosApi
    .post(`/admin/courses`, value)
    .then((res) => {
      console.log(res.data);
      dispatch(getCourseDetailsData());
      dispatch(courseDetailsError(""));
      toggle();
    })
    .catch((err) => {
      dispatch(courseDetailsError(err?.response?.data || "Invalid Operation"));
    });
};

//Filter Course
export const getCourseDetailsData =
  (page, filter, limit) => async (dispatch) => {
    console.log(filter);
    const url =
      filter?.status ||
      Number(filter?.sessionDuration) ||
      filter?.startPrice ||
      filter?.endPrice
        ? `/admin/courses/filter?page=${page + 1}&limit=${
            limit ? limit : 10
          }&status=${filter?.status}&sessionDuration=${
            filter?.sessionDuration
          }&&startPrice=${filter?.startPrice}&&endPrice=${filter?.endPrice}`
        : `/admin/courses/filter?page=${page + 1}&limit=${limit ? limit : 10}`;

    dispatch({ type: GET_COURSE_DETAILS_LOAD, payload: "" });
    axiosApi
      .get(url)
      .then((res) => {
        console.log(res.data);
        dispatch(courseDetailsData(res.data));
        dispatch(courseDetailsError(""));
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  };

export const overviewData = (data, post, setDetails) => async (dispatch) => {
  // console.log(data);
  dispatch({
    type: GET_OVERVIEW_DATA,
    payload: { ...data?.info, imageCarousel: data?.imageCarousel },
  });
  if (post) {
    const formData = new FormData();
    //console.log(data);
    for (const ovj in data.info) {
      // console.log(`${ovj}`, data.info[ovj]);
      formData.append(ovj, data.info[ovj]);
    }

    for (let i = 0; i < data?.overviewLocation?.length; i++) {
      const element = data?.overviewLocation[i];
      if (!element)
        return dispatch(notifyError("Please add at least one location"));
      formData.append(`overviewLocation[${i}]`, element);
    }

    for (let i = 0; i < data?.imageCarousel?.length; i++) {
      const element = data?.imageCarousel[i];
      if (!element?.image?.name || !element?.caption)
        return dispatch(notifyError("Please fill all Image Carousel Items"));
      formData.append(`imageCarousel[${i}][image]`, element?.image?.name);
      formData.append(`imageCarousel[${i}][caption]`, element?.caption);
    }

    dispatch({ type: SEND_LOAD, payload: true });

    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res);
        dispatch(getCourseDetailsForUpdateData(data.courseId));
        dispatch({ type: SEND_LOAD, payload: false });
        return setDetails ? setDetails("Highlights") : "";
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};
export const highLightsData = (data, post, setDetails) => async (dispatch) => {
  dispatch({ type: GET_HIGHLIGHTS_DATA, payload: data.items });

  if (post) {
    const formData = new FormData();
    for (let i = 0; i < data?.items?.length; i++) {
      const element = data.items[i];

      if (!element?.metricNumber || !element?.metricLabel)
        return dispatch(notifyError("Please fill all Highlight fields."));

      formData.append(`highlights[${i}][metricNumber]`, element.metricNumber);
      formData.append(`highlights[${i}][metricLabel]`, element.metricLabel);
    }

    dispatch({ type: SEND_LOAD, payload: true });
    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res.data);

        dispatch({ type: SEND_LOAD, payload: false });
        return setDetails ? setDetails("Course Outcomes") : "";
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};
export const courseOutComesData =
  (data, post, setDetails) => async (dispatch) => {
    dispatch({
      type: GET_OUTCOMES_DATA,
      payload: { ...data.info, cards: data?.cards },
    });

    if (post) {
      const formData = new FormData();
      //console.log(data);
      for (const ovj in data.info) {
        // console.log(`${ovj}`, data.info[ovj]);
        formData.append(`courseOutcomes[${ovj}]`, data.info[ovj]);
      }

      for (let i = 0; i < data?.cards?.length; i++) {
        const element = data.cards[i];

        if (!element?.heading || !element?.body || !element?.icon?.name)
          return dispatch(
            notifyError("Please fill all Course OutComes fields.")
          );

        formData.append(
          `courseOutcomes[cards][${i}][icon]`,
          element?.icon?.name
        );
        formData.append(
          `courseOutcomes[cards][${i}][heading]`,
          element?.heading
        );
        formData.append(`courseOutcomes[cards][${i}][body]`, element?.body);
      }

      dispatch({ type: SEND_LOAD, payload: true });
      axiosApi
        .patch(`admin/courses/${data.courseId}`, formData)
        .then((res) => {
          console.log(res.data);

          dispatch({ type: SEND_LOAD, payload: false });
          return setDetails ? setDetails("Benefits") : "";
        })
        .catch((err) => {
          dispatch({ type: SEND_LOAD, payload: false });
          dispatch(
            courseDetailsError(
              err?.response?.data?.error || "Invalid Operation"
            )
          );
        });
    }
  };
export const benefitsData = (data, post, setDetails) => async (dispatch) => {
  dispatch({
    type: GET_BENEFITS_DATA,
    payload: { ...data.info, cards: data?.cards },
  });

  if (post) {
    const formData = new FormData();
    //console.log(data);
    for (const ovj in data.info) {
      // console.log(`${ovj}`, data.info[ovj]);
      formData.append(`benefits[${ovj}]`, data.info[ovj]);
    }

    for (let i = 0; i < data?.cards?.length; i++) {
      const element = data.cards[i];

      if (!element?.heading || !element?.body || !element?.icon?.name)
        return dispatch(notifyError("Please fill all Course OutComes fields."));

      formData.append(`benefits[cards][${i}][icon]`, element?.icon?.name);
      formData.append(`benefits[cards][${i}][heading]`, element?.heading);
      formData.append(`benefits[cards][${i}][body]`, element?.body);
    }

    dispatch({ type: SEND_LOAD, payload: true });
    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res.data);

        dispatch({ type: SEND_LOAD, payload: false });
        return setDetails ? setDetails("Plan") : "";
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};
export const planData = (data, post, setDetails) => async (dispatch) => {
  dispatch({ type: GET_PLAN_DATA, payload: data.info });
  // console.log(data);
  if (post) {
    const formData = new FormData();
    //console.log(data);

    for (let i = 0; i < data?.info?.length; i++) {
      const element = data?.info[i];

      if (!element) return dispatch(notifyError("Please fill all the fields."));

      formData.append(`plans[${i}]`, element);
    }

    dispatch({ type: SEND_LOAD, payload: true });
    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res.data);

        dispatch({ type: SEND_LOAD, payload: false });
        return setDetails ? setDetails("Modules") : "";
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};
export const modulesData = (data, post, setDetails) => async (dispatch) => {
  // console.log(data);
  dispatch({ type: GET_MODULES_DATA, payload: data.items });
  if (post) {
    const formData = new FormData();
    for (let i = 0; i < data.items.length; i++) {
      console.log(data.items);
      const element = data.items[i];
      if (
        !element?.moduleIcon?.name ||
        !element?.moduleName ||
        !element?.sessions
      )
        return dispatch(notifyError("Please fill all Modules fields."));

      formData.append(`modules[${i}][moduleIcon]`, element.moduleIcon?.name);
      formData.append(`modules[${i}][moduleName]`, element.moduleName);
      formData.append(`modules[${i}][sessions]`, element.sessions);
      //topic
      for (let t = 0; t < element.topics.length; t++) {
        const topic = element.topics[t];
        if (!topic)
          return dispatch(notifyError("Please fill all Modules topic fields."));

        formData.append(`modules[${i}][topics][${t}]`, topic);
      }
    }

    dispatch({ type: SEND_LOAD, payload: true });
    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: SEND_LOAD, payload: false });
        return setDetails ? setDetails("Eligibility") : "";
      })
      .catch((err) => {
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};
export const eligibilyData = (data, post, setDetails) => async (dispatch) => {
  dispatch({
    type: GET_ELIGIBILTY_DATA,
    payload: { ...data.info, cards: data?.cards },
  });
  // console.log(data)
  if (post) {
    const formData = new FormData();
    //console.log(data);
    for (const ovj in data.info) {
      // console.log(`${ovj}`, data.info[ovj]);
      formData.append(`eligibility[${ovj}]`, data.info[ovj]);
    }

    for (let i = 0; i < data?.cards?.length; i++) {
      const element = data.cards[i];

      if (!element?.heading || !element?.body || !element?.icon?.name)
        return dispatch(notifyError("Please fill all Eligibility fields."));

      formData.append(`eligibility[cards][${i}][icon]`, element?.icon?.name);
      formData.append(`eligibility[cards][${i}][heading]`, element?.heading);
      formData.append(`eligibility[cards][${i}][body]`, element?.body);
    }

    dispatch({ type: SEND_LOAD, payload: true });
    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res.data);

        dispatch({ type: SEND_LOAD, payload: false });
        return setDetails ? setDetails("Career Prospects") : "";
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};
export const careerData = (data, post, setDetails) => async (dispatch) => {
  dispatch({
    type: GET_CAREERPROSPECTS_DATA,
    payload: { ...data.info, cards: data?.cards },
  });
  if (post) {
    const formData = new FormData();
    //console.log(data);
    for (const ovj in data.info) {
      // console.log(`${ovj}`, data.info[ovj]);
      formData.append(`careerPro[${ovj}]`, data.info[ovj]);
    }

    for (let i = 0; i < data?.cards?.length; i++) {
      const element = data.cards[i];

      if (!element?.heading || !element?.body || !element?.icon?.name)
        return dispatch(notifyError("Please fill all careerProspects fields."));

      formData.append(`careerPro[cards][${i}][icon]`, element?.icon?.name);
      formData.append(`careerPro[cards][${i}][heading]`, element?.heading);
      formData.append(`careerPro[cards][${i}][body]`, element?.body);
    }

    dispatch({ type: SEND_LOAD, payload: true });
    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res.data);

        dispatch({ type: SEND_LOAD, payload: false });
        return setDetails ? setDetails("Mentors") : "";
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};
export const mentorsData = (data, post, setDetails) => async (dispatch) => {
  dispatch({ type: GET_MENTORS_DATA, payload: data.info });

  if (post) {
    dispatch({ type: SEND_LOAD, payload: true });
    const formData = new FormData();

    formData.append("mentorsId", data.info[0]);
    formData.append("mentorsId", data.info[1]);
    formData.append("mentorsId", data.info[2]);
    formData.append("mentorsId", data.info[3]);

    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        dispatch({ type: SEND_LOAD, payload: false });
        return setDetails ? setDetails("Testimonials") : "";
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};
export const testimonialData = (data, post, history) => async (dispatch) => {
  dispatch({
    type: GET_TESTIMONIALS_DATA,
    payload: {
      faq: data?.info?.faq,
      testimonials: data?.info?.testimonials,
    },
  });
  if (post) {
    const formData = new FormData();
    for (let i = 0; i < data.info.testimonials?.length; i++) {
      const element = data.info.testimonials[i];
      console.log(element.name);
      if (!element?.name)
        return dispatch(notifyError("Please fill all Testimonial fields."));
      formData.append("testimonials", element?.name);
    }

    for (let i = 0; i < data?.info?.faq?.length; i++) {
      const element = data?.info?.faq[i];
      console.log(element);
      if (!element?.title || !element?.description)
        return dispatch(notifyError("Please fill all FAQ fields."));
      formData.append(`faq[${i}][title]`, element?.title);
      formData.append(`faq[${i}][description]`, element?.description);
    }

    dispatch({ type: SEND_LOAD, payload: true });
    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res);
        dispatch({ type: SEND_LOAD, payload: false });
        // history && history.push("/courses");
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};

export const updateCourse = () => {};
export const werbpageData = (data, post) => async (dispatch) => {
  dispatch({ type: WEB_STATUS, payload: data?.info?.status });
  dispatch({ type: WEB_URL, payload: data?.info?.URL });
  console.log(data.info);
  if (post) {
    dispatch({ type: SEND_LOAD, payload: true });
    const formData = new FormData();

    // formData.append("status", data.info.status);
    formData.append("URL", data.info.URL);

    axiosApi
      .patch(`admin/courses/${data.courseId}`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });

      axiosApi
      .post(`admin/courses/${data.courseId}/${data.info.status}`, formData)
      .then((res) => {
        dispatch({ type: SEND_LOAD, payload: false });
        console.log(res);
      })
      .catch((err) => {
        dispatch({ type: SEND_LOAD, payload: false });
        dispatch(
          courseDetailsError(err?.response?.data?.error || "Invalid Operation")
        );
      });
  }
};

export const courseDetailsData = (data) => {
  return {
    type: GET_COURSE_DETAILS_DATA,
    payload: data,
  };
};
export const courseDetailsForUpdateData = (data) => {
  return {
    type: GET_COURSE_DETAILS_FOR_UPDATE_DATA,
    payload: data,
  };
};

export const courseDetailsError = (err) => {
  return {
    type: GET_COURSE_DETAILS_DATA_API_ERROR,
    payload: err,
  };
};

