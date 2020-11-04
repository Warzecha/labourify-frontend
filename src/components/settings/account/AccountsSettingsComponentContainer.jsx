import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AccountSettingsComponentView from './AccountSettingsComponentView';
import useFieldValidation from '../../../utils/FieldValidation';
import {validateUsername} from '../../../utils/AuthValidation';
import {modifyProfileAction} from '../../../redux/actions/settingsActions';

const AccountsSettingsComponentContainer = () => {

    const {
        user,
        isLoading
    } = useSelector(state => state.activeUser);


    const dispatch = useDispatch();


    const usernameField = useFieldValidation('', validateUsername);
    const githubUsernameField = useFieldValidation('', () => null);
    const slackUsernameField = useFieldValidation('', () => null);

    useEffect(() => {

        if (user) {
            const {
                username = '',
                githubAccount = {},
                slackAccount = {}
            } = user || {};

            usernameField.setValue(username);
            githubUsernameField.setValue(githubAccount.username || '');
            slackUsernameField.setValue(slackAccount.username || '');
        }

    }, [user]);

    const handleSave = () => {
        console.debug('Save user account settings');
        // TODO: Verify correctness
        const updatedUser = {
            username: usernameField.value,
            githubAccount: {
                username: githubUsernameField.value
            },
            slackAccount: {
                username: slackUsernameField.value
            }
        };

        dispatch(modifyProfileAction(updatedUser));

    };

    const handleCancel = () => {
        console.debug('Cancel');
    };

    return <AccountSettingsComponentView user={user}
                                         usernameField={usernameField}
                                         githubUsernameField={githubUsernameField}
                                         slackUsernameField={slackUsernameField}
                                         isLoading={isLoading}
                                         onSave={handleSave}
                                         onCancel={handleCancel}
    />;
};


export default AccountsSettingsComponentContainer;
