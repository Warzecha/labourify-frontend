// import {returnErrors} from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';
import axiosInstance from '../../utils/ApiConnector';

const registrationErrorActionCreator = (err) => ({type: REGISTER_FAIL, payload: err});
const registrationSuccessActionCreator = (data) => ({type: REGISTER_SUCCESS, payload: data});
const loginSuccessActionCreator = (data) => ({type: LOGIN_SUCCESS, payload: data});
const loginErrorActionCreator = (err) => ({type: LOGIN_FAIL, payload: err});
const logoutSuccessActionCreator = () => ({type: LOGOUT_SUCCESS});

export const loadUserAction = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});

    console.log('state', getState());

    const {
        auth: {
            accessToken
        } = {}
    } = getState();

    axiosInstance
        .get('/users/me', {
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

export const registerAction = (body, history) => dispatch => {
    axiosInstance
        .post('/auth/register', body)
        .then(({data}) => {
            registrationSuccessActionCreator(data);
            history.push('/login?reason=registration');
        })
        .catch(err => {
            console.error(err.message);
            dispatch(registrationErrorActionCreator(err));
        });
};

export const loginAction = ({email, password}, history) => dispatch => {
    const body = {email, password};

    axiosInstance.post('/auth/login', body)
        .then(({data}) => {
            console.log('Login successful', data);
            dispatch(loginSuccessActionCreator(data));
            history.push('/user/me')
        })
        .catch(err => {
            console.error('Login unsuccessful', err.response);
            dispatch(loginErrorActionCreator(err.response.data));
        });
};

// Logout User
export const logout = history =>  dispatch => {
    dispatch(logoutSuccessActionCreator());
    history.replace('/')
};


