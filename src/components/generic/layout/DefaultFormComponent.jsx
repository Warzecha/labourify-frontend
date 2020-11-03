import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CenteredColumnComponent from './CenteredColumnComponent';

const DefaultFormComponent = ({title, children}) => {
    const styles = useStyles();

    return (
        <CenteredColumnComponent>
            <Card className={styles.card}>
                <div className={styles.column}>

                    <Typography variant='h4' className={styles.heading}>
                        {title}
                    </Typography>
                    {children}
                </div>
            </Card>
        </CenteredColumnComponent>
    );
};

DefaultFormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    title: PropTypes.string.isRequired
};


const useStyles = makeStyles(theme => ({
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    heading: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    card: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
}));

export default DefaultFormComponent;
