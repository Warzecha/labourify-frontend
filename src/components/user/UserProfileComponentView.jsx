import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import UserInfoItem from './UserInfoItem';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Divider from '@material-ui/core/Divider';
import AchievementListComponentContainer from '../achievements/AchievementListComponentContainer';
import Grid from '@material-ui/core/Grid';
import UserAvatar from './UserAvatar';
import SimpleOrgListItem from '../organizations/SimpleOrgListItem';
import {lighten, withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const NextLevelProgress = withStyles(theme => ({
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

const UserProfileComponentView = (props) => {

    const {
        userProfile,
        error,
        isLoading,
        experienceLevels
    } = props;

    const {
        username,
        email,
        orgPermissions = [],
        currentExperiencePoints,
        experienceLevel,
    } = userProfile || {};

    const progressString = experienceLevels ?
        `${currentExperiencePoints}/${experienceLevels[experienceLevel + 1]} EXP` :
        `${currentExperiencePoints}/ - EXP`;

    const nextLevelProgress = experienceLevels ? currentExperiencePoints / experienceLevels[experienceLevel + 1] * 100 : 0;

    const styles = useStyles();

    return (
        <Grid container spacing={3} style={{marginTop: 10}}>

            <Grid item xs={12} sm={3}>

                <UserAvatar user={userProfile}/>
                <Typography className={styles.username}>
                    {username}
                </Typography>


                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Typography color={'textSecondary'}>Level: </Typography>
                    <Typography style={{marginLeft: 10}}>{experienceLevel}</Typography>
                </div>

                <NextLevelProgress
                    variant='determinate'
                    value={nextLevelProgress}
                    style={{flex: 1}}
                />

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Typography color={'textSecondary'}>Next level: </Typography>
                    <Typography style={{marginLeft: 10}}>{progressString}</Typography>
                </div>


                <Divider className={styles.divider}/>

                {email && <UserInfoItem icon={<MailOutlineIcon fontSize={'small'}/>} value={email}/>}

                <Divider className={styles.divider}/>

                {
                    orgPermissions.map(permission => <SimpleOrgListItem organization={permission.organization}/>)
                }


            </Grid>
            <Grid item xs={12} sm={9}>
                <AchievementListComponentContainer/>
            </Grid>
        </Grid>


    );
};


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    profileInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    achievements: {
        flex: 7
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
    },
    formElement: {
        marginTop: 20,
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    button: {
        width: '100%',
        height: '100%',
    },
    heading: {
        textAlign: 'center',
        fontSize: 22
    },
    avatarContainer: {
        width: 200,
        height: 200,
        padding: 20,
        borderRadius: 10,
        border: '1px solid #d1d5da'
    },
    avatar: {
        width: '100%',
        height: '100%'
    },
    username: {
        fontSize: 22,
        marginTop: 20
    },
    divider: {
        marginTop: 20,
        marginBottom: 20

    }
}));

export default UserProfileComponentView;
