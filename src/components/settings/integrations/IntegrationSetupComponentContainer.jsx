import React, {useEffect, useState} from 'react';
import IntegrationSetupComponentView from "./IntegrationSetupComponentView";

const IntegrationSetupComponentContainer = () => {

    const [steps, setSteps] = useState([]);


    useEffect(() => {

        setSteps([
            {
                title: 'Setup GitHub Integration',
                text: 'lorem ipsum elo melo'
            }
        ])
    }, []);

    return <IntegrationSetupComponentView steps={steps}/>
};

export default IntegrationSetupComponentContainer;
