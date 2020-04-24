import {AUTH_ERROR, USER_LOADED, USER_LOADING} from './types';
import axiosInstance from '../../utils/ApiConnector';


export const modifyProfileAction = (updateRequest) => (dispatch, getState) => {
    dispatch({type: USER_LOADING});

    const {
        auth: {
            accessToken,
            user
        } = {}
    } = getState();

    const body = {...user, ...updateRequest};

    axiosInstance
        .put('/users/me', body, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(({data}) =>
            dispatch({
                type: USER_LOADED,
                payload: data
            })
        )
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            console.error(err.message);
            dispatch({
                type: AUTH_ERROR
            });
        });
};
