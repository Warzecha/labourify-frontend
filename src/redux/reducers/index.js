import {combineReducers} from 'redux';

import authReducer from './authReducer';
import feedbackReducer from './feedbackReducer';
import userProfileReducer from './userProfileReducer';
import achievementListReducer from './achievementsReducer';
import activeUserReducer from './activeUserReducer';
import experienceReducer from './experienceReducer';

export default combineReducers({
    auth: authReducer,
    feedback: feedbackReducer,
    activeUser: activeUserReducer,
    user: userProfileReducer,
    achievements: achievementListReducer,
    experience: experienceReducer
});
