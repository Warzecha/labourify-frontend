import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';


const initialState = {
    accessToken: localStorage.getItem('accessToken'),
    isAuthenticated: null,
    isLoading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('accessToken', action.payload.accessToken);
            return {
                ...state,
                accessToken: action.payload.accessToken,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: false,
                isLoading: false,
                error: null,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem('accessToken');
            return {
                ...state,
                accessToken: null,
                isAuthenticated: false,
                isLoading: false,
                error: action.payload
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('accessToken');
            return {
                ...state,
                accessToken: null,
                isAuthenticated: false,
                isLoading: false,
                error: null
            };
        default:
            return state;
    }
};

export default authReducer;
