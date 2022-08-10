import {
    GET_DETAUX_HOME_SUCCESS,
    GET_DETAUX_API_FAIL,
    GET_MEETUPS_SUCCESS,
    GET_MEETUPS_FAIL,
    GET_MEETUP_SUCCESS,
    GET_MEETUP_FAIL,
    GET_PUBLICATIONS_SUCCESS,
    GET_PUBLICATIONS_FAIL,
    GET_DATA_REQ
} from "./actionTypes";

const initialState = {
    loading: true,
    error: "",
    home: {},
    meetups: [],
    meetup: {},
    publications: []
};

const pages = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQ:
            state = {
                ...state,
                loading: true,
            };
            break;
        case GET_DETAUX_HOME_SUCCESS:
            state = {
                ...state,
                home: action.payload,
                loading: false,
            };
            break;
        case GET_MEETUPS_SUCCESS:
            state = {
                ...state,
                meetups: action.payload,
                loading: false,
            };
            break;
        case GET_MEETUP_SUCCESS:
            state = {
                ...state,
                meetup: action.payload,
                loading: false,
            };
            break;
        case GET_PUBLICATIONS_SUCCESS:
            state = {
                ...state,
                publications: action.payload,
                loading: false,
            };
            break;
        case GET_DETAUX_API_FAIL:
            state = {
                ...state,
                error: action.payload,
                loading: false,
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

export default pages;
