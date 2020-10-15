import {
    ACHIEVEMENT_LIST_LOADING,
    ACHIEVEMENT_LIST_SUCCESS,
    ACHIEVEMENT_LIST_ERROR,
    USER_ACHIEVEMENT_LIST_SUCCESS,
} from '../actions/types';
import axios from 'axios';
import {getAccessTokenFromState} from '../../utils/ApiUtils';

export const loadAllAchievements = () => {
    return loadUserAchievements();
};

export const loadUserAchievements = (userId) => (dispatch, getState) => {
    dispatch({type: ACHIEVEMENT_LIST_LOADING});
    const accessToken = getAccessTokenFromState(getState);
    const url = userId ? `/users/${userId}/achievements` : '/achievements';

    axios.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(({data}) =>
            dispatch({
                type: (userId ? USER_ACHIEVEMENT_LIST_SUCCESS : ACHIEVEMENT_LIST_SUCCESS),
                payload: data
            })
        )
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            console.error(err.message);
            dispatch({
                type: ACHIEVEMENT_LIST_ERROR,
                payload: err.response.data
            });
        });
};
