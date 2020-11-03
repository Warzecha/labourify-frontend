import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classNames from 'classnames';

const UserAvatar = (props) => {

    const {
        user
    } = props || {};


    const {
        username,
        email,
        image
    } = user || {};

    const styles = useStyles();

    const avatarUrl = image || (email && `https://avatars.dicebear.com/v2/identicon/${email}.svg`);

    return (
        <div className={`${styles.avatarContainer} ${!image && styles.padding}`}>
            {avatarUrl &&
            <img src={avatarUrl} alt={username} className={`${styles.avatar} ${styles.roundedCorners}`}/>}
        </div>
    );
};

const useStyles = makeStyles(() => ({
    avatarContainer: {
        maxWidth: 200,
        maxHeight: 200,
        borderRadius: 10,
    },
    padding: {
        padding: 20,
        border: '1px solid #d1d5da'
    },
    roundedCorners: {
        borderRadius: 10,
        border: '1px solid #d1d5da'
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
}));

export default UserAvatar;
