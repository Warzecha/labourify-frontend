import React from 'react';
import Paper from "@material-ui/core/Paper";
import classNames from 'classnames';
import {makeStyles} from "@material-ui/core";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from 'prop-types';


const Alert = (props) => {

    const styles = useStyles();

    const {
        severity,
        message,
        onClose,
        outline
    } = props;

    const getIcon = (level) => {
        switch (level) {
            case 'error':
                return <ErrorOutlineIcon/>;
            case 'warning':
                return <PriorityHighIcon/>;
            case 'info':
                return <InfoOutlinedIcon/>;
            case 'success':
                return <CheckCircleOutlineOutlinedIcon/>;
            default:
                return null;
        }
    };

    return (
        <div className={classNames(styles.root, styles[severity])}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                {getIcon(severity)}
                <Typography test-id="alert-text" className={styles.text}>
                    {message}
                </Typography>
            </div>

            {onClose && (
                <IconButton onClick={onClose}>
                    <CancelOutlinedIcon/>
                </IconButton>
            )}


        </div>
    );
};

Alert.propTypes = {
    severity: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    outline: PropTypes.bool
};

const useStyles = makeStyles(() => ({

    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 20,
        minWidth: 300,
        borderRadius: 5

    },
    text: {
        marginLeft: 20,
    },
    error: {
        backgroundColor: '#fdecea',
        color: '#611a15'
    },
    warning: {
        backgroundColor: '#fff4e5',
        color: '#663c00'
    },
    info: {
        backgroundColor: '#e8f4fd',
        color: '#0d3c61'
    },
    success: {
        backgroundColor: '#edf7ed',
        color: '#1e4620'
    },
}));

export default Alert;
