import React from 'react';
import {lighten, makeStyles, withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';


const BorderLinearProgress = withStyles(theme => ({
    root: {
        height: 10,
        borderRadius: 20,
        backgroundColor: lighten(theme.palette.primary.main, 0.5),
        marginRight: 10
    },
    bar: {
        borderRadius: 20,
        backgroundColor: theme.palette.primary.main,
    },
}))(LinearProgress);

const AchievementComponent = (props) => {

    const styles = useStyles();

    const {
        achievement: {
            name,
            description,
            targetScore = 1,
            image
        } = {},
        progress: {
            score = 0
        } = {}
    } = props;

    const progressString = `${score}/${targetScore}`;

    return (
        <div className={styles.container}>

            <div className={styles.badgeContainer}>
                <img src={process.env.REACT_APP_API_URL + image} alt={name} className={styles.badge}/>
            </div>

            <div className={styles.infoContainer}>

                <Typography className={styles.nameText}>{name}</Typography>
                <Typography className={styles.descriptionText}>{description}</Typography>

                <div className={styles.progressContainer}>
                    <BorderLinearProgress
                        variant="determinate"
                        // color="secondary"
                        value={score / targetScore * 100}
                        style={{flex: 1}}
                    />

                    <Typography className={styles.descriptionText}>{progressString}</Typography>

                </div>

            </div>

        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 20,
        borderRadius: 10,
        border: '1px solid #d1d5da'
    },
    badgeContainer: {
        maxWidth: 80,
        flex: 1
    },
    badge: {
        width: '100%',
        height: 'auto',
    },
    infoContainer: {
        flex: 4,
        marginLeft: 10,
        padding: 5,
        display: 'flex',
        flexDirection: 'column'
    },
    nameText: {
        fontWeight: 'bold'
    },
    descriptionText: {
        color: theme.palette.text.secondary
    },
    progressContainer: {
        display: 'flex',
        alignItems: 'center'
    }
}));

export default AchievementComponent;
