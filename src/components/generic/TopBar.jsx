import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import {useMediaQuery, useTheme} from "@material-ui/core";
import useMainStyle from "../../styles/MainStyles";
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ProfileMenu from './ProfileMenu';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

const TopBar = (props) => {
    const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);

    const history = useHistory();

    const handleProfileMenuOpen = (event) => {
        setProfileMenuAnchorEl(event.currentTarget);
    };

    const handleLoginButtonPressed = () => {
        history.push('/login');
    };

    const styles = useStyles();

    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
    const mainStyles = useMainStyle();

    const {isAuthenticated} = useSelector(state => state.auth);

    return (
        <div>

            <AppBar position="fixed">
                <Toolbar className={mainStyles.appBar}>
                    {isSmallDevice && <IconButton
                        color="inherit"
                        edge="start"
                        onClick={props.onDrawerToggle}
                        className={mainStyles.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>}
                    <Typography variant="h6" noWrap>
                        Labourify
                    </Typography>


                    <div className={styles.grow}/>

                    {
                        isAuthenticated ?
                            <div className={styles.sectionDesktop}>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                        <NotificationsIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircleIcon/>
                                </IconButton>
                            </div> :
                            <div className={styles.sectionDesktop}>
                                <Button style={{color: '#fff'}} onClick={handleLoginButtonPressed}>
                                    Login
                                </Button>
                            </div>
                    }


                </Toolbar>
            </AppBar>
            <ProfileMenu open={!!profileMenuAnchorEl}
                         anchorEl={profileMenuAnchorEl}
                         onClose={() => setProfileMenuAnchorEl(null)}
                         onSelected={(x) => {
                             console.log('Selected: ', x);
                         }}
            />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default TopBar;




