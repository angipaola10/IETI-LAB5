import React from 'react';
import { 
    makeStyles,
    Drawer
} from '@material-ui/core/';
import NavigationItems from './NavigationItems';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    offset: theme.mixins.toolbar
  }));

export default function MyDrawer({variant, open, onClose}){

    const classes = useStyles();

    return (
        <Drawer 
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={variant}
            open={open}
            onClose={onClose ? onClose : null}>
            <div className={classes.offset}></div>
            <NavigationItems />
        </Drawer>
    );
}