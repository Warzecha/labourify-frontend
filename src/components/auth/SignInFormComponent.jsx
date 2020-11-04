import React, {useState} from 'react';
import {validateEmail, validatePassword} from "../../utils/AuthValidation";
import {useHistory} from "react-router-dom";
import useFieldValidation from "../../utils/FieldValidation";
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../redux/actions/authActions';
import Typography from '@material-ui/core/Typography';
import ValidatedTextInputField from '../generic/ValidatedTextInputField';
import ErrorAlert from '../generic/feedback/ErrorAlert';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const SignInFormComponent = () => {
    const emailField = useFieldValidation('', validateEmail);
    const passwordField = useFieldValidation('', validatePassword);

    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const error = useSelector(state => state.auth.error);

    const handleSubmit = async (event) => {
        console.log('Login button clicked');
        event.preventDefault();
        const usernameErrors = emailField.validate();
        const passwordErrors = passwordField.validate();

        if (!usernameErrors && !passwordErrors) {
            const formData = {
                email: emailField.value,
                password: passwordField.value
            };
            dispatch(loginAction(formData, history));
        }
    };

    const styles = useStyles();

    return (
        <div className={styles.root}>

            <form className={styles.column} onSubmit={handleSubmit}>

                <Typography variant='h4' className={styles.heading}>
                    Sign In
                </Typography>


                <ValidatedTextInputField
                    label='Email'
                    variant='outlined'
                    field={emailField}
                    className={styles.formElement}
                />

                <TextField
                    value={passwordField.value}
                    error={!!passwordField.errors}
                    onBlur={passwordField.handleBlur}
                    helperText={passwordField.errors || ' '}
                    onChange={passwordField.handleChange}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position='end'>
                                <IconButton
                                    onMouseDown={() => setShowPassword(true)}
                                    onMouseUp={() => setShowPassword(false)}
                                >
                                    {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                </IconButton>
                            </InputAdornment>
                    }}

                    label='Password'
                    variant='outlined'
                    className={styles.formElement}
                    type={showPassword ? 'text' : 'password'}
                />

                <ErrorAlert error={error}/>

                <Button color='primary' variant='contained' className={styles.button}
                        type='submit'>
                    Sign in
                </Button>
            </form>
        </div>
    );

};

const useStyles = makeStyles({
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
    }
});

export default SignInFormComponent;
