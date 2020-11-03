import {
    FETCH_EXPERIENCE_LEVELS,
    FETCH_EXPERIENCE_LEVELS_SUCCESS,
    FETCH_EXPERIENCE_LEVELS_FAILURE
} from '../actions/types';

const initialState = {
    isLoading: false,
    levels: null,
    error: null
};


const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXPERIENCE_LEVELS:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_EXPERIENCE_LEVELS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                levels: action.payload,
                error: null
            };
        case FETCH_EXPERIENCE_LEVELS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};


export default experienceReducer;
