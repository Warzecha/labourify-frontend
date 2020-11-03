import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Link} from 'react-router-dom';

const SimpleOrgListItem = ({organization}) => {
    const {
        name,
        icon,
        id
    } = organization;

    const avatarUrl = icon || (name && `https://avatars.dicebear.com/v2/identicon/${name}.svg`);

    return (
        <ListItem component={Link} to={`/organizations/${id}`} style={{textDecoration: 'none'}} button hover>
            <ListItemAvatar>
                <Avatar alt={`${name} icon`} src={avatarUrl} variant={'rounded'}/>
            </ListItemAvatar>
            <ListItemText
                primary={name}
            />
        </ListItem>
    );
};

SimpleOrgListItem.propTypes = {
    organization: PropTypes.object.isRequired
};

export default SimpleOrgListItem;
