import React from 'react';
import IntegrationsListComponentView from "./IntegrationsListComponentView";
import {useHistory} from "react-router-dom";

const IntegrationsListComponentContainer = () => {

    const history = useHistory();

    const handleIntegrationSetupStarted = (name) => {
        history.push(`/settings/setup/${name}`)
    };


    return <IntegrationsListComponentView integrationsList={integrationsList}
                                          onSetupIntegrationClicked={handleIntegrationSetupStarted}

    />
};

export default IntegrationsListComponentContainer;


const integrationsList = [
    {
        name: 'GitHub',
        logo: require('../../../assets/images/github_logo.png'),
        enabled: false,
        description: 'Lets you track activity on your GitHub repository'
    },
    {
        name: 'Slack',
        logo: require('../../../assets/images/slack_logo.png'),
        enabled: true,
        description: 'Lets you track activity on your Slack workspace'
    }
];
