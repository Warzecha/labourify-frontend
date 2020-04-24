import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ValidatedTextInputField from "../generic/ValidatedTextInputField";
import ErrorAlert from '../generic/feedback/ErrorAlert';

const SignInFormView = props => {

    const styles = useStyles();

    return (
        <div className={styles.root}>

            <form className={styles.column} onSubmit={props.handleSubmit}>

                <Typography variant="h4" className={styles.heading}>
                    Sign In
                </Typography>


                <ValidatedTextInputField
                    label="Email"
                    variant="outlined"
                    field={props.emailField}
                    className={styles.formElement}
                />

                <ValidatedTextInputField
                    label="Password"
                    variant="outlined"
                    field={props.passwordField}
                    className={styles.formElement}
                    type={'password'}
                />

                <ErrorAlert error={props.error}/>

                <Button color="primary" variant="contained" className={styles.button}
                        type="submit">
                    Sign in
                </Button>

            </form>
        </div>

    );
};

const useStyles = makeStyles(() => ({
    root: {},
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    formElement: {
        marginTop: 20,
    },
    button: {
        marginTop: 40
    },
    heading: {
        textAlign: 'center'
    },
    loginError: {
        marginTop: 10,
        color: 'red',
        fontSize: 13
    }
}));

export default SignInFormView;
