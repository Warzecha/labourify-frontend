import {
    FETCH_EXPERIENCE_LEVELS,
    FETCH_EXPERIENCE_LEVELS_SUCCESS,
    FETCH_EXPERIENCE_LEVELS_FAILURE
} from './types';
import axios from 'axios';


export const fetchExperienceLevels = () => (dispatch, getState) => {
    dispatch({type: FETCH_EXPERIENCE_LEVELS});

    const {
        auth: {
            accessToken
        } = {}
    } = getState();

    axios.get('/experience/levels', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(({data}) =>
            dispatch({
                type: FETCH_EXPERIENCE_LEVELS_SUCCESS,
                payload: data
            })
        )
        .catch(err => {
            console.error(err.message);
            dispatch({
                type: FETCH_EXPERIENCE_LEVELS_FAILURE,
                payload: err.response.data
            });
        });
};
