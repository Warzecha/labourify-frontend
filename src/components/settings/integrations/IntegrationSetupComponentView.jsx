import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const IntegrationInstructionStep = (props) => {

    const {
        step:
            {
                title,
                text,
            },
    } = props;

    return (
        <ListItem button>
            <ListItemText primary={title} secondary={text}/>
        </ListItem>)
};

const IntegrationSetupComponentView = (props) => {
    return (
        <Paper>

            <List>
                {
                    props.steps.map((step, index) =>
                        <IntegrationInstructionStep step={step}
                                                    key={index}/>)
                }
            </List>

        </Paper>
    );
};

export default IntegrationSetupComponentView;
