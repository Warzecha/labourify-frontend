import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from './Alert';
import {useDispatch, useSelector} from 'react-redux';
import {dismissStatusAction} from '../../../redux/actions/feedbackActions';

const GlobalStatusSnackbar = () => {

    const {
        statusType,
        message,
        // error,
        autoHide,
        // allowDismiss
    } = useSelector(state => state.feedback);

    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(dismissStatusAction());
    };

    return (
        <Snackbar open={!!message}
                  autoHideDuration={autoHide ? 4000 : null}
                  onClose={handleClose}>
            <Alert severity={statusType || 'info'}
                   message={message || ''}
                   onClose={handleClose}/>
        </Snackbar>
    );
};

export default GlobalStatusSnackbar;
