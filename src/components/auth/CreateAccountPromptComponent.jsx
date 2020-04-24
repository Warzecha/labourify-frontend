import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

const CreateAccountPromptComponent = () => {

    const styles = useStyles();

    const history = useHistory();

    const handleCreateNewAccountClicked = () => {
        history.push('/register');
    };

    return (
        <div className={styles.root}>

            <Typography>
                New to Labourification?
            </Typography>

            <Button onClick={handleCreateNewAccountClicked}
                    color={'primary'}
            >
                Create new account
            </Button>

        </div>
    );
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default CreateAccountPromptComponent;
