import React from 'react';
import axios from 'axios';
import {withErrorBoundary} from '../../../utils/ErrorUtils';
import {useHistory} from 'react-router-dom';
import NewOrganizationView from './NewOrganizationView';
import useFieldValidation from '../../../utils/FieldValidation';
import {isRequired} from '../../../utils/ValidationUtils';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationHeaders} from '../../../utils/ApiUtils';
import {operationStatusAction} from '../../../redux/actions/feedbackActions';

const {REACT_APP_API_URL} = process.env;

const NewOrganizationContainer = () => {

    const nameField = useFieldValidation('', isRequired('Name is required'));
    const {accessToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        console.log('submit');

        if (nameField.validate()) {
            return;
        }

        const request = {name: nameField.value};

        axios.post(REACT_APP_API_URL + '/organizations', request, {
            headers: getAuthorizationHeaders(accessToken)
        })
            .then(({data}) => {
                console.log('created', data);
                const {urlSlug} = data;
                history.push(`/organizations/${urlSlug}`);
            })
            .catch(err => {

                if (err.response) {
                    const {data} = err.response;
                    console.error(data);
                    const {message = 'Unknown error'} = data;
                    dispatch(operationStatusAction('error', message));
                } else {
                    console.error(err.message);
                    dispatch(operationStatusAction('error', err.message));
                }
            });


    };

    return (
        <NewOrganizationView nameField={nameField} onSubmit={handleSubmit}/>
    );
};

export default withErrorBoundary(NewOrganizationContainer);
