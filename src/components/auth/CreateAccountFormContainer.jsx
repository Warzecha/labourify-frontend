import React from 'react';
import {validateEmail, validatePassword, validateRepeatedPassword, validateUsername} from "../../utils/AuthValidation";
import {useHistory, useLocation} from "react-router-dom";
import useFieldValidation from "../../utils/FieldValidation";
import {useDispatch, useSelector} from 'react-redux';
import {loginAction, registerAction} from '../../redux/actions/authActions';
import CreateAccountFormView from './CreateAccountFormView';

const CreateAccountFormContainer = () => {
    // const history = useHistory();
    // const location = useLocation();

    // const {from} = location.state || {from: {pathname: "/"}};

    const emailField = useFieldValidation('', validateEmail);
    const usernameField = useFieldValidation('', validateUsername);
    const passwordField = useFieldValidation('', validatePassword);
    const passwordConfirmationField = useFieldValidation('', validateRepeatedPassword(passwordField.value));

    const dispatch = useDispatch();
    const history = useHistory();

    const error = useSelector(state => state.auth.error);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const usernameErrors = emailField.validate();
        const passwordErrors = passwordField.validate();
        const passwordConfirmationErrors = passwordConfirmationField.validate();

        if (!usernameErrors && !passwordErrors && !passwordConfirmationErrors) {

            const formData = {
                username: usernameField.value,
                email: emailField.value,
                password: passwordField.value,
                passwordConfirmation: passwordConfirmationField.value,
            };

            dispatch(registerAction(formData, history));
        }
    };

    return <CreateAccountFormView emailField={emailField}
                                  usernameField={usernameField}
                                  passwordField={passwordField}
                                  passwordConfirmationField={passwordConfirmationField}
                                  handleSubmit={handleSubmit}
                                  error={error}
    />;
};

export default CreateAccountFormContainer;
