import {
    ACHIEVEMENT_LIST_LOADING,
    ACHIEVEMENT_LIST_SUCCESS,
    ACHIEVEMENT_LIST_ERROR,
} from '../actions/types';
import axiosInstance from '../../utils/ApiConnector';

export const loadAvailableAchievements = () => (dispatch, getState) => {
    dispatch({type: ACHIEVEMENT_LIST_LOADING});

    const {
        auth: {
            accessToken
        } = {}
    } = getState();

    axiosInstance
        .get(`/achievements`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(({data}) =>
            dispatch({
                type: ACHIEVEMENT_LIST_SUCCESS,
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
