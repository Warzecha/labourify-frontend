import React from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';

const {REACT_APP_API_URL} = process.env;

const AxiosProvider = () => {
    const {accessToken} = useSelector(state => state.auth);
    axios.defaults.baseURL = REACT_APP_API_URL;
    axios.defaults.headers.common['Authorization'] = accessToken;
    return null;
};
export default AxiosProvider;
