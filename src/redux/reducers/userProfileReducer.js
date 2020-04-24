import {
    USER_PROFILE_LOADING,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_ERROR,
} from '../actions/types';

const initialState = {
    isLoading: false,
    userProfile: null,
    error: null
};


const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_PROFILE_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userProfile: action.payload,
                error: null
            };
        case USER_PROFILE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};


export default userProfileReducer;
