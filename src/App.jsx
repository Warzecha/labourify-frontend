import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import MainNavigation from "./routes/MainNavigation";
import useMainStyle from "./styles/MainStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SideBar from "./components/generic/SideBar";
import TopBar from "./components/generic/TopBar";

import {useDispatch, useSelector} from 'react-redux';
import {loadUserAction} from './redux/actions/authActions';
import {withReduxProvider} from './utils/withReduxProvider';
import {loadAvailableAchievements} from './redux/actions/achievementsActions';
import GlobalStatusSnackbar from './components/generic/feedback/GlobalStatusSnackbar';


const App = () => {

    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const dispatch = useDispatch();
    const classes = useMainStyle();

    const {accessToken} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(loadAvailableAchievements());
    }, []);

    useEffect(() => {
        if (accessToken) {
            dispatch(loadUserAction());
        }
    }, [accessToken]);


    const handleDrawerButton = () => {
        setIsMobileDrawerOpen(prev => !prev);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Router basename={process.env.PUBLIC_URL}>

                <TopBar onDrawerToggle={handleDrawerButton}
                />

                <SideBar isMobileDrawerOpen={isMobileDrawerOpen}
                         onMobileDrawerClose={() => {
                             setIsMobileDrawerOpen(false);
                         }}
                />

                <MainNavigation/>
            </Router>
            <GlobalStatusSnackbar/>
        </div>
    );
};


export default withReduxProvider(App);
