import React from 'react';
import Card from "@material-ui/core/Card";
import useTileStyle from "../styles/TileStyles";
import SignInFormContainer from "../components/auth/SignInFormContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CreateAccountPromptComponent from '../components/auth/CreateAccountPromptComponent';
import {useQuery} from '../utils/NavigationUtils';
import Alert from '../components/generic/feedback/Alert';

const SignInScreen = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const tileStyles = useTileStyle();

    const styles = useStyles();

    const query = useQuery();

    const reason = query.get('reason');

    const didJustRegister = reason === 'registration';

    return (
        <div className={tileStyles.centeredRow}>


            <div className={smallScreen ? styles.formFullWidth : styles.form}>
                {didJustRegister &&
                <Alert severity={'success'} message={'Registration successful! You can log in.'}/>}

                <Card className={styles.card}>
                    <SignInFormContainer/>
                </Card>
                {!didJustRegister && <CreateAccountPromptComponent/>}
            </div>
        </div>
    );
};

const useStyles = makeStyles(theme => ({

    form: {
        width: 500,
    },
    formFullWidth: {
        width: '100%',
    },
    card: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
}));

export default SignInScreen;
