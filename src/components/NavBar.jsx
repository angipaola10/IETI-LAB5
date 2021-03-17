import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    makeStyles,
    Hidden
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
    offset: theme.mixins.toolbar
}));

export default function NavBar({ handleDrawerToggle }) {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Hidden smUp>
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu"
                        className={classes.m}
                        onClick={ () => handleDrawerToggle() }>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}