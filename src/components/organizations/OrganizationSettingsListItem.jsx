import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useHistory} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';

const OrganizationSettingsListItem = ({organization, userRole}) => {
    const {
        name,
        icon,
        id,
        memberCount = 0,
        urlSlug
    } = organization;

    const history = useHistory();

    const styles = useStyles();

    const avatarUrl = icon || (name && `https://avatars.dicebear.com/v2/identicon/${name}.svg`);

    return (
        <div className={styles.tile}>
            <div style={{display: 'flex'}}>

                <img src={avatarUrl}
                     alt={name}
                     className={styles.avatar}/>
                <div className={styles.infoContainer}>
                    <div style={{display: 'flex'}}>
                        <Typography className={styles.organizationName}>{name}</Typography>
                        {userRole === 'ADMIN' && <Chip label={'ADMIN'}
                                                       variant={'outlined'}
                                                       size='small'
                                                       style={{marginLeft: 10}}
                        />}
                    </div>

                    <div className={styles.iconDataContainer}>
                        <PeopleIcon fontSize={'small'} color='disabled'/>
                        <Typography color='textSecondary'
                                    className={styles.iconDataText}>
                            {`${memberCount} members`}
                        </Typography>
                    </div>

                </div>
            </div>

            <div className={styles.actionsContainer}>

                {userRole === 'ADMIN' &&
                <Button variant={'contained'} color={'primary'}
                        onClick={() => history.push(`/organizations/${urlSlug}/settings`)}
                        className={styles.button}
                >
                    Settings
                </Button>}

                <Button onClick={() => history.push(`/organizations/${urlSlug}`)}
                        className={styles.button}
                >
                    View
                </Button>

            </div>
        </div>
    );
};

OrganizationSettingsListItem.propTypes = {
    organization: PropTypes.object.isRequired
};


const useStyles = makeStyles({
    tile: {
        display: 'flex',
        height: '100%',
        padding: 20,
        borderRadius: 10,
        border: '1px solid #d1d5da',
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    organizationName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    avatar: {
        height: '100%',
        maxHeight: 120,
        width: 'auto',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 20
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    iconDataContainer: {
        display: 'flex',
        paddingTop: 10
    },
    iconDataText: {
        paddingLeft: 10
    },
    button: {
        margin: 5
    }


});

export default OrganizationSettingsListItem;
