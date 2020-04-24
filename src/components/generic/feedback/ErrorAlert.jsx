import React from 'react';
import Alert from './Alert';

const ErrorAlert = ({error}) => {
    return (error ? <Alert severity={'error'} message={error.message}/> : null);
};

export default ErrorAlert;
