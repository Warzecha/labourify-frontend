import React from 'react';
import PropTypes from 'prop-types';
import DefaultFormComponent from '../../generic/layout/DefaultFormComponent';
import ValidatedTextInputField from '../../generic/ValidatedTextInputField';
import FormActionsContainer from '../../generic/layout/FormActionsContainer';
import Button from '@material-ui/core/Button';

const NewOrganizationView = props => {

    const {
        nameField,
        onSubmit
    } = props;

    return (
        <form onSubmit={onSubmit}>
            <DefaultFormComponent title={'New Organization'}>
                <ValidatedTextInputField label={'Name'} field={nameField}/>

                <FormActionsContainer>

                    <Button variant='contained' color={'primary'} style={{flex: 1, padding: 5}} type={'submit'}>
                        Submit
                    </Button>

                </FormActionsContainer>

            </DefaultFormComponent>
        </form>

    );
};

NewOrganizationView.propTypes = {};

export default NewOrganizationView;
