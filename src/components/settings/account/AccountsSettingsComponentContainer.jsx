import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AccountSettingsComponentView from './AccountSettingsComponentView';
import useFieldValidation from '../../../utils/FieldValidation';
import {validateUsername} from '../../../utils/AuthValidation';

const AccountsSettingsComponentContainer = () => {

    const {
        user,
        isLoading
    } = useSelector(state => state.activeUser);

    const {
        username = '',
        githubAccount = {},
        slackAccount = {}
    } = user || {};


    const dispatch = useDispatch();


    const usernameField = useFieldValidation(username, validateUsername);
    const githubUsernameField = useFieldValidation(githubAccount.username || '');
    const slackUsernameField = useFieldValidation(slackAccount.username || '');

    const handleSave = () => {
        console.log('Save');
    };

    const handleCancel = () => {
        console.log('Cancel');
    };

    return <AccountSettingsComponentView user={user}
                                         usernameField={usernameField}
                                         githubUsernameField={githubUsernameField}
                                         slackUsernameField={slackUsernameField}
                                         isLoading={isLoading}
                                         onSave={handleSave()}
                                         onCancel={handleCancel}
    />;
};


export default AccountsSettingsComponentContainer;
