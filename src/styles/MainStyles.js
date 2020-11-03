import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useMainStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1000
    },

    drawerPaper: {
        width: drawerWidth,
    },

    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },

    toolbar: theme.mixins.toolbar,
}));

export default useMainStyle;
