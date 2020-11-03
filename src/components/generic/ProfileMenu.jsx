import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/authActions';
import {useHistory} from 'react-router-dom';

const ProfileMenu = (props) => {

    const {
        anchorEl,
        open,
        onClose,
    } = props;

    let dispatch = useDispatch();
    const history = useHistory();


    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            onClose={onClose}
        >
            <MenuItem onClick={() => {
                onClose();
                history.push('/user/me');
            }}>Your Profile</MenuItem>
            <MenuItem onClick={() => {
                onClose();
                history.push('/settings/profile');
            }}>Account Settings</MenuItem>
            <MenuItem onClick={() => {
                onClose();
                dispatch(logout(history));
            }}>Log out</MenuItem>
        </Menu>
    );
};

ProfileMenu.propTypes = {
    anchorEl: PropTypes.any,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default ProfileMenu;
