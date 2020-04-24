import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const UserInfoItem = (props) => {

    const {
        icon,
        value
    } = props;

    const styles = useStyles();

    return (
        <div className={styles.container}>
            {icon}
            <Typography className={styles.text}>
                {value}
            </Typography>
        </div>
    );
};


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 20
    }
}));


UserInfoItem.propTypes = {
    icon: PropTypes.any.isRequired,
    value: PropTypes.string.isRequired
};

export default UserInfoItem;
