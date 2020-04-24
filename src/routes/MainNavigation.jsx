import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import useMainStyle from "../styles/MainStyles";
import SignInScreen from "../screens/SignInScreen";
import SettingsScreen from "../screens/SettingsScreen";
import IntegrationSetupScreen from "../screens/IntegrationSetupScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import CreateAccountFormContainer from '../components/auth/CreateAccountFormContainer';
import CreateAccountScreen from '../screens/CreateAccountScreenScreen';
import AccountsSettingsComponentContainer from '../components/settings/account/AccountsSettingsComponentContainer';


export default function () {
    const classes = useMainStyle();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Switch>
                {/*{routes}*/}
                <Route path="/login">
                    <SignInScreen/>
                </Route>

                <Route path="/register">
                    <CreateAccountScreen/>
                </Route>

                <Route path="/settings/setup/:name">
                    <IntegrationSetupScreen/>
                </Route>

                <Route path="/settings/account">
                    <AccountsSettingsComponentContainer/>
                </Route>

                <Route path="/settings">
                    <SettingsScreen/>
                </Route>

                <Route path="/user/:id">
                    <UserProfileScreen/>
                </Route>


            </Switch>
        </main>)

}
