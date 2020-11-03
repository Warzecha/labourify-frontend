import React from 'react';
import {withErrorBoundary} from '../../../../utils/ErrorUtils';
import {useParams, useHistory} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import {useDispatch, useSelector} from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import {getAuthorizationHeaders} from '../../../../utils/ApiUtils';
import {operationStatusAction} from '../../../../redux/actions/feedbackActions';

const {REACT_APP_API_URL} = process.env;

const ConnectGitHubAccountComponent = () => {

    const {installationId} = useParams();
    const history = useHistory();

    const {
        user,
        isLoading
    } = useSelector(state => state.activeUser);

    const {accessToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {
        username = '',
        githubAccount = {},
        slackAccount = {}
    } = user || {};

    const styles = useStyles();

    const handleAccept = () => {
        console.log('connected');

        axios.post(REACT_APP_API_URL + '/webhook/github/confirmation', {installationId}, {
            headers: getAuthorizationHeaders(accessToken)
        })
            .then(({data}) => {
                dispatch(operationStatusAction('success', 'Successfully connected with GitHub account.'));
                history.push('/');

            })
            .catch(err => {
                dispatch(operationStatusAction('error', 'Failed | ' + err.message));
            });


    };

    if (!accessToken) {
        console.log('Have to log user in');
    }

    return (
        <div>

            <Backdrop open={isLoading} className={styles.backdrop}>
                <CircularProgress color={'primary'}/>
            </Backdrop>

            <Dialog open={!accessToken}>

                <DialogTitle>Connect GitHub account</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        You have to log in to connect your GitHub account.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color='primary'>
                        Create Account
                    </Button>
                    <Button onClick={handleAccept} color='primary'>
                        Log In
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={accessToken}>

                <DialogTitle>Connect GitHub account</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Do you want to connect your account with GitHub?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={handleAccept} color='primary'>
                        Accept
                    </Button>
                </DialogActions>
            </Dialog>


        </div>
    );
};

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#000',
    },
}));

export default withErrorBoundary(ConnectGitHubAccountComponent);
