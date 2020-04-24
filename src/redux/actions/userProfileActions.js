import {
    USER_PROFILE_LOADING,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_ERROR,
} from './types';
import axiosInstance from '../../utils/ApiConnector';

export const fetchUserProfileAction = (id) => (dispatch, getState) => {
    dispatch({type: USER_PROFILE_LOADING});

    const {
        auth: {
            accessToken
        } = {}
    } = getState();

    axiosInstance
        .get(`/users/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(({data}) =>
            dispatch({
                type: USER_PROFILE_SUCCESS,
                payload: data
            })
        )
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            console.error(err.message);
            dispatch({
                type: USER_PROFILE_ERROR,
                payload: err.response.data
            });
        });
};
