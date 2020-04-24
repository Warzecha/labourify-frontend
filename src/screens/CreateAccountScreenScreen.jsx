import React from 'react';
import Card from "@material-ui/core/Card";
import useTileStyle from "../styles/TileStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CreateAccountFormContainer from '../components/auth/CreateAccountFormContainer';
import CreateAccountPromptComponent from '../components/auth/CreateAccountPromptComponent';

const CreateAccountScreen = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const tileStyles = useTileStyle();

    const styles = useStyles();

    return (
        <div className={tileStyles.centeredRow}>
            <Card className={smallScreen ? styles.fullWidthCard : styles.card}>
                <CreateAccountFormContainer/>
            </Card>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(2),
        width: 500,
    },

    fullWidthCard: {
        padding: theme.spacing(2),
        width: '100%',
    }
}));

export default CreateAccountScreen;
