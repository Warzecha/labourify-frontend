import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import ValidatedTextInputField from '../../generic/ValidatedTextInputField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChangeProfilePictureComponent from './ChangeProfilePictureComponent';

const AccountSettingsComponentView = (props) => {
    const styles = useStyles();

    const {
        usernameField,
        githubUsernameField,
        slackUsernameField,
        isLoading,
        user
    } = props;

    return (
        <div>
            <Backdrop open={isLoading} className={styles.backdrop}>
                <CircularProgress color={'primary'}/>
            </Backdrop>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={styles.heading}>Account settings</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>

                    <div className={styles.column}>
                        <ValidatedTextInputField
                            label="Username"
                            variant="outlined"
                            field={usernameField}
                            className={styles.formElement}
                        />

                        <Button variant={'outlined'} color={'primary'}>
                            Reset Password
                        </Button>


                        <Typography className={styles.sectionHeading}>Integrations</Typography>

                        <div className={styles.iconRow}>
                            <Avatar alt={'GitHub'} src={require('../../../assets/images/github_logo.png')}/>
                            <ValidatedTextInputField
                                label="GitHub username"
                                variant="outlined"
                                field={githubUsernameField}
                                className={classNames(styles.formElement, styles.iconTextInput)}
                            />
                        </div>

                        <div className={styles.iconRow}>
                            <Avatar alt={'Slack'} src={require('../../../assets/images/slack_logo.png')}/>
                            <ValidatedTextInputField
                                label="Slack username"
                                variant="outlined"
                                field={slackUsernameField}
                                className={classNames(styles.formElement, styles.iconTextInput)}
                            />
                        </div>

                        <div className={styles.buttonRow}>
                            <Button variant={'outlined'} color={'secondary'} className={styles.button}>
                                Cancel
                            </Button>
                            <Button variant={'contained'} color={'primary'} className={styles.button}>
                                Save
                            </Button>
                        </div>


                    </div>


                </Grid>

                <Grid item xs={12} sm={6}>
                    <ChangeProfilePictureComponent user={user}/>
                </Grid>


            </Grid>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: 24
    },
    sectionHeading: {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginTop: 30,
        marginBottom: 10,
    },
    formElement: {
        marginTop: 20,
        flex: 1
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    centeredColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    iconRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    iconTextInput: {
        marginLeft: 20
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#000',
    },
    button: {
        flex: 1,
        margin: 10
    },
    buttonRow: {
        display: 'flex'
    }

}));

export default AccountSettingsComponentView;
