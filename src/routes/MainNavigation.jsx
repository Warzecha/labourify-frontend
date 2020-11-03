import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import useMainStyle from '../styles/MainStyles';
import SignInScreen from '../screens/SignInScreen';
import IntegrationSetupScreen from '../screens/IntegrationSetupScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import CreateAccountScreen from '../screens/CreateAccountScreenScreen';
import AccountSettingsNavigation from './AccountSettingsNavigation';
import NewOrganizationContainer from '../components/organizations/NewOrganization/NewOrganizationContainer';

const MainNavigation = () => {
    const classes = useMainStyle();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Switch>
                {/*{routes}*/}
                <Route path='/login'>
                    <SignInScreen/>
                </Route>

                <Route path='/register'>
                    <CreateAccountScreen/>
                </Route>

                {/*<Route path='/settings/setup/:name'>*/}
                {/*    <IntegrationSetupScreen/>*/}
                {/*</Route>*/}

                <Route path='/settings'>
                    <AccountSettingsNavigation/>
                </Route>

                <Route path='/organizations/new'>
                    <NewOrganizationContainer/>
                </Route>

                <Route path='/user/:id'>
                    <UserProfileScreen/>
                </Route>


            </Switch>
        </main>);
};

export default MainNavigation;

