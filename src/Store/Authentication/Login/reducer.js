import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, STORE_LOGIN_DATA } from "./actionTypes";

const initialState = {
    loginInfo: {},
    loading: false,
    success: false,
    error: ""
}
const login = (state = initialState, action) => {
    switch (action.type) {
        case STORE_LOGIN_DATA:
            state = {
                ...state, [
                    action.payload.name
                ]: action.payload.data,
                success: true,
                loading: false
            }
            break;
        case LOGIN_LOADING:
            state = {
                ...state,
                loading: true,
                error: ""
            }
            break;
        case LOGIN_SUCCESS:
            state = {
                ...state,
                success: true,
                loading: false,
                loginInfo: action.payload.data,
                error: ""
            }
            break;
        case LOGIN_ERROR:
            state = {
                ...state,
                success: false,
                loading: false,
                error: action.payload.data,
                loginInfo: {}
            }
            break;
        default:
            state = { ...state }
            break;
    }
    return state;
}

export default login;