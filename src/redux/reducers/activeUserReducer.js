import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    UPDATE_ACCOUNT_SETTINGS,
    ACCOUNT_SETTINGS_UPDATE_SUCCESS,
    ACCOUNT_SETTINGS_UPDATE_FAILURE,
} from '../actions/types';


const initialState = {
    isLoading: false,
    user: null,
    error: null
};

const activeUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
        case UPDATE_ACCOUNT_SETTINGS:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case USER_LOADED:
        case ACCOUNT_SETTINGS_UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case AUTH_ERROR:
        case ACCOUNT_SETTINGS_UPDATE_FAILURE:
            return {
                ...state,
                user: null,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default activeUserReducer;
