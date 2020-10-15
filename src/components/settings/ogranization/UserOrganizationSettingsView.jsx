import React from 'react';
import PropTypes from 'prop-types';
import ErrorAlert from '../../generic/feedback/ErrorAlert';
import {makeStyles} from '@material-ui/core/styles';
import OrganizationSettingsListItem from '../../organizations/OrganizationSettingsListItem';

const UserOrganizationSettingsView = props => {
    const {
        loading,
        error,
        organizations
    } = props;

    const styles = useStyles();

    const OrganizationTile = (org) => {

        return (
            <div className={styles.organizationContainer}>


            </div>);


    };

    return (
        <div>

            <ErrorAlert error={error}/>
            {loading && 'Loading'}

            <div>
                {
                    organizations && organizations.map(orgPermission => {
                        const {organization, userRole} = orgPermission;
                        return <OrganizationSettingsListItem organization={organization} userRole={userRole}
                                                             key={organization.id}/>;
                    })
                }
            </div>


        </div>
    );
};

UserOrganizationSettingsView.propTypes = {};

const useStyles = makeStyles(theme => ({
    organizationContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 20,
        borderRadius: 10,
        border: '1px solid #d1d5da',
        maxWidth: 80
    },
    badge: {
        height: '100%',
        width: 'auto',
    },
    nameText: {
        fontWeight: 'bold'
    }
}));

export default UserOrganizationSettingsView;
