import React, {useCallback, useEffect, useState} from 'react';
import UserOrganizationSettingsView from './UserOrganizationSettingsView';
import {withErrorBoundary} from '../../../utils/ErrorUtils';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const UserOrganizationSettingsContainer = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [organizations, setOrganizations] = useState();

    const {user} = useSelector(state => state.activeUser);

    const history = useHistory();

    const handleNewClicked = useCallback(() => {
        history.push('/organizations/new');
    }, [history]);

    useEffect(() => {
        setLoading(true);
        const {orgPermissions = []} = user || {};

        Promise.all(
            orgPermissions.map(async (permission) => {

                const {organization, role} = permission;
                const {urlSlug} = organization;

                const orgDetailsResponse = await axios.get(`organizations/${urlSlug}`);
                console.log('fetched', orgDetailsResponse);
                return {
                    organization: orgDetailsResponse.data,
                    userRole: role
                };
            }))
            .then((res) => {
                setOrganizations(res);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [user]);

    return (<UserOrganizationSettingsView organizations={organizations}
                                          error={error}
                                          loading={loading}
                                          onNewClicked={handleNewClicked}
    />);
};

export default withErrorBoundary(UserOrganizationSettingsContainer);
