import React, { useState } from 'react';
import { makeStyles, Hidden, Fab, Button } from '@material-ui/core/';
import NavBar from './NavBar';
import MyDrawer from './MyDrawer';
import TaskGrid from './TaskGrid';
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    content: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: 236
        },
        padding:theme.spacing(10,2)
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    offset: theme.mixins.toolbar
}));

export default function MainView() {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const history = useHistory();

    return (
        <div>
            <NavBar 
                handleDrawerToggle={handleDrawerToggle}/>
            <Hidden xsDown>
                <MyDrawer 
                    variant="permanent"
                    open={true}/>
            </Hidden>
            <Hidden smUp>
                <MyDrawer 
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}/>
            </Hidden>
            <div className={classes.content}>
                <Button color="secondary" startIcon={<FilterListIcon />}>Filters</Button>
                <div className={classes.offset}>
                    <TaskGrid />
                </div>
                <Fab color="secondary" 
                    aria-label="add"
                    className={classes.fab} 
                    onClick={()=> history.push("/newTask")}
                >
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );
}