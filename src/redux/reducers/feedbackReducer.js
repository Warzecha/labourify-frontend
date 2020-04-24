import {OPERATION_STATUS, DISMISS_STATUS, GENERIC_STATUS} from '../actions/types';

const initialState = {
    statusType: null,
    message: null,
    error: null,
    autoHide: false,
    allowDismiss: true
};


const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERIC_STATUS:
            return {
                ...state,
                statusType: action.statusType,
                message: action.message,
                error: action.error,
                autoHide: false,
            };
        case OPERATION_STATUS:
            return {
                ...state,
                statusType: action.statusType,
                message: action.message,
                error: action.error,
                autoHide: true,
            };
        case DISMISS_STATUS:
            return initialState;
        default:
            return state;
    }
};

export default feedbackReducer;
