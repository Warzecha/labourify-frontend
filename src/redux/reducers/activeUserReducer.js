import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
} from '../actions/types';


const initialState = {
    isLoading: false,
    user: null,
    error: null
};

const activeUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case AUTH_ERROR:
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
