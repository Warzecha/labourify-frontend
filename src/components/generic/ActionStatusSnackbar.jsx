import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "./feedback/Alert";

const ActionStatusSnackbar = (props) => {
    const {
        onActionStatusDismissed,
        actionStatus,
    } = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        onActionStatusDismissed()
    };

    return (
        <Snackbar open={!!actionStatus} autoHideDuration={4000} onClose={handleClose}>
            {
                actionStatus && <Alert severity={actionStatus.type || 'warning'}
                                       message={actionStatus.message || ''}
                                       onClose={handleClose}/>
            }

        </Snackbar>
    );
};

export default ActionStatusSnackbar;
