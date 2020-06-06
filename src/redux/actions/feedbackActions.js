import {
    OPERATION_STATUS,
    DISMISS_STATUS,
    GENERIC_STATUS,
} from './types';

export const operationStatusAction = (statusType, message) => {
    return {
        type: OPERATION_STATUS,
        statusType: statusType,
        message: message
    };
};

export const operationSuccessAction = (message) => {
    return operationStatusAction('success', message);
};

export const operationErrorAction = (error) => {
    return {
        type: OPERATION_STATUS,
        statusType: 'error',
        message: error.message,
        error: error
    };
};

export const operationWarningAction = (message) => {
    return operationStatusAction('warning', message);
};

export const operationInfoAction = (message) => {
    return operationStatusAction('info', message);
};


export const genericStatusAction = (statusType, message) => {
    return {
        type: GENERIC_STATUS,
        statusType: statusType,
        message: message
    };
};

export const genericSuccessAction = (message) => {
    return genericStatusAction('success', message);
};

export const genericErrorsAction = (error) => {
    return {
        type: GENERIC_STATUS,
        statusType: 'error',
        message: error.message,
        error: error
    };
};

export const genericWarningAction = (message) => {
    return genericStatusAction('warning', message);
};

export const genericInfoAction = (message) => {
    return genericStatusAction('info', message);
};


export const dismissStatusAction = () => {
    return {type: DISMISS_STATUS};
};
