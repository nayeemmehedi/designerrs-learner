import axiosApi from "../../Helper/api";
import {
    GET_DETAUX_HOME_SUCCESS,
    GET_DETAUX_API_FAIL,
    GET_MEETUPS_SUCCESS,
    GET_MEETUP_SUCCESS,
    GET_PUBLICATIONS_SUCCESS,
    GET_DATA_REQ
} from "./actionTypes";


export const getDetauxHome = () => async (dispatch) => {
    dispatch({ type: GET_DATA_REQ });
    axiosApi
        .get(`/learner/detaux`)
        .then((res) => {
            console.log(res);
            dispatch({ type: GET_DETAUX_HOME_SUCCESS, payload: res.data });
            dispatch({ type: GET_DETAUX_API_FAIL, payload: "" });
        })
        .catch((err) => {
            dispatch({
                type: GET_DETAUX_API_FAIL,
                payload: err?.response?.data?.error || "Invalid Operation",
            });
        });
};
export const getMeetups = () => async (dispatch) => {
    dispatch({ type: GET_DATA_REQ });
    axiosApi
        .get(`/learner/detaux/meetups`)
        .then((res) => {
            console.log(res);
            dispatch({ type: GET_MEETUPS_SUCCESS, payload: res.data });
            dispatch({ type: GET_DETAUX_API_FAIL, payload: "" });
        })
        .catch((err) => {
            dispatch({
                type: GET_DETAUX_API_FAIL,
                payload: err?.response?.data?.error || "Invalid Operation",
            });
        });
};
export const getMeetup = (id) => async (dispatch) => {
    dispatch({ type: GET_DATA_REQ });
    axiosApi
        .get(`/learner/detaux/meetups/${id}`)
        .then((res) => {
            console.log(res);
            dispatch({ type: GET_MEETUP_SUCCESS, payload: res.data });
            dispatch({ type: GET_DETAUX_API_FAIL, payload: "" });
        })
        .catch((err) => {
            dispatch({
                type: GET_DETAUX_API_FAIL,
                payload: err?.response?.data?.error || "Invalid Operation",
            });
        });
};
export const getPublications = () => async (dispatch) => {
    dispatch({ type: GET_DATA_REQ });
    axiosApi
        .get(`/learner/detaux/publications`)
        .then((res) => {
            console.log(res);
            dispatch({ type: GET_PUBLICATIONS_SUCCESS, payload: res.data });
            dispatch({ type: GET_DETAUX_API_FAIL, payload: "" });
        })
        .catch((err) => {
            dispatch({
                type: GET_DETAUX_API_FAIL,
                payload: err?.response?.data?.error || "Invalid Operation",
            });
        });
};


export const enrolledMeetup = () => {
    dispatch({ type: GET_DATA_REQ });
    axiosApi
        .get(`/learner/meetups`)
        .then((res) => {
            console.log(res);
            dispatch({ type: GET_MEETUPS_SUCCESS, payload: res.data });
            dispatch({ type: GET_DETAUX_API_FAIL, payload: "" });
        })
        .catch((err) => {
            dispatch({
                type: GET_DETAUX_API_FAIL,
                payload: err?.response?.data?.error || "Invalid Operation",
            });
        });
}

