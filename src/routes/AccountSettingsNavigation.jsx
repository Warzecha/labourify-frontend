import React from 'react';
import {
    Switch,
    Route,
    useHistory,
    useLocation,
    useRouteMatch
} from 'react-router-dom';
import AccountsSettingsComponentContainer from '../components/settings/account/AccountsSettingsComponentContainer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UserOrganizationSettingsContainer from '../components/settings/ogranization/UserOrganizationSettingsContainer';
import ConnectGitHubAccountComponent
    from '../components/settings/integrations/ConnectGitHubAccountComponent/ConnectGitHubAccountComponent';

const urlRegexp = /^\/?([\w]+)/;

const AccountSettingsNavigation = () => {

    const history = useHistory();
    const handleChange = (_, value) => {
        console.log(value);
        history.push(`/settings/${value}`);
    };

    const {pathname} = useLocation();
    const {path} = useRouteMatch();

    const settingTabWithQuery = pathname.replace(path, '');

    const match = urlRegexp.exec(settingTabWithQuery);
    const settingTab = match[1];

    return (
        <div>
            <Tabs value={settingTab} onChange={handleChange}>
                <Tab label='Profile' value={'profile'}/>
                <Tab label='Organizations' value={'organizations'}/>
            </Tabs>
            <Switch>
                <Route path={`${path}/profile`}>
                    <AccountsSettingsComponentContainer/>
                </Route>

                <Route path={`${path}/organizations`}>
                    <UserOrganizationSettingsContainer/>
                </Route>

                <Route path={`${path}/integrations/github`}>
                    <ConnectGitHubAccountComponent/>
                </Route>

                <Route path={`${path}/integrations`}>
                    <AccountsSettingsComponentContainer/>
                </Route>

            </Switch>
        </div>
    );
};

export default AccountSettingsNavigation;

