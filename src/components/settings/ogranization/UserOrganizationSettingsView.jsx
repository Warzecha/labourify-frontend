import React from 'react';
import PropTypes from 'prop-types';
import ErrorAlert from '../../generic/feedback/ErrorAlert';
import {makeStyles} from '@material-ui/core/styles';
import OrganizationSettingsListItem from '../../organizations/OrganizationSettingsListItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

const UserOrganizationSettingsView = props => {
    const {
        loading,
        error,
        organizations,
        onNewClicked
    } = props;

    const styles = useStyles();

    return (
        <div>
            <div className={styles.buttonRow}>

                <Button variant={'contained'} color={'primary'} onClick={onNewClicked}>
                    Create new
                </Button>
            </div>

            <ErrorAlert error={error}/>
            {loading && <LinearProgress color='secondary'/>}

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

const useStyles = makeStyles({
    buttonRow: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
});

export default UserOrganizationSettingsView;
