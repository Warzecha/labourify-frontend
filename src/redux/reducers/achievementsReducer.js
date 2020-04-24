import {
    ACHIEVEMENT_LIST_LOADING,
    ACHIEVEMENT_LIST_SUCCESS,
    ACHIEVEMENT_LIST_ERROR,
} from '../actions/types';

const initialState = {
    isLoading: false,
    allAchievements: [],
    error: null
};


const achievementListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACHIEVEMENT_LIST_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ACHIEVEMENT_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allAchievements: action.payload,
                error: null
            };
        case ACHIEVEMENT_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default achievementListReducer;
