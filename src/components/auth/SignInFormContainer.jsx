import React from 'react';
import SignInFormView from "./SignInFormView";
import {validateEmail, validatePassword} from "../../utils/AuthValidation";
import {useHistory, useLocation} from "react-router-dom";
import useFieldValidation from "../../utils/FieldValidation";
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../redux/actions/authActions';

const SignInFormContainer = () => {
    // const history = useHistory();
    // const location = useLocation();

    // const {from} = location.state || {from: {pathname: "/"}};

    const emailField = useFieldValidation('', validateEmail);
    const passwordField = useFieldValidation('', validatePassword);

    const dispatch = useDispatch();
    const history = useHistory();

    const error = useSelector(state => state.auth.error);

    // console.log('auth state', error);

    const handleSubmit = async (event) => {
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

    return <SignInFormView emailField={emailField}
                           passwordField={passwordField}
        // authState={authState}
                           handleSubmit={handleSubmit}
                           error={error}
    />;
};

export default SignInFormContainer;
