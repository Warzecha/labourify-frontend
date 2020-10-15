import {
    UPDATE_ACCOUNT_SETTINGS,
    ACCOUNT_SETTINGS_UPDATE_SUCCESS,
    ACCOUNT_SETTINGS_UPDATE_FAILURE,
} from './types';
import axios from 'axios';
import {operationErrorAction, operationSuccessAction} from './feedbackActions';


export const modifyProfileAction = (updateRequest, userId = 'me') => async (dispatch, getState) => {
    dispatch({type: UPDATE_ACCOUNT_SETTINGS});

    const {
        auth: {
            accessToken,
            user
        } = {}
    } = getState();

    const body = {...user, ...updateRequest};

    console.debug('Sending update user request');
    axios.put(`/users/${userId}`, body, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(({data}) => {
                console.debug('Saved successfully');
                dispatch(operationSuccessAction('Successfully saved account settings'));
                dispatch({
                    type: ACCOUNT_SETTINGS_UPDATE_SUCCESS,
                    payload: data
                });
            }
        )
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            console.error(err.message);
            dispatch(operationErrorAction(err));
            dispatch({
                type: ACCOUNT_SETTINGS_UPDATE_FAILURE,
                payload: err
            });
        });
};
