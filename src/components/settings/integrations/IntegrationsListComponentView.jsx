import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

const IntegrationListItem = (props) => {

    const {
        integration:
            {
                name,
                logo,
                description,
                enabled
            },
        onSetupIntegrationClicked
    } = props;

    return (
        <ListItem button>
            <ListItemIcon>
                <Avatar alt={name} src={logo}/>
            </ListItemIcon>
            <ListItemText primary={name} secondary={description}/>

            <ListItemSecondaryAction>
                {enabled ?
                    (<IconButton edge="end">
                        <CheckCircleOutlineOutlinedIcon/>
                    </IconButton>)
                    :
                    (<IconButton edge="end" onClick={() => onSetupIntegrationClicked(name)}>
                        <BuildOutlinedIcon/>
                    </IconButton>)
                }
            </ListItemSecondaryAction>
        </ListItem>)
};

const IntegrationsListComponentView = (props) => {
    return (
        <div>

            <List>
                {
                    props.integrationsList.map((item, index) =>
                        <IntegrationListItem integration={item}
                                             onSetupIntegrationClicked={props.onSetupIntegrationClicked}
                                             key={index}/>)
                }
            </List>

        </div>
    );
};

export default IntegrationsListComponentView;
