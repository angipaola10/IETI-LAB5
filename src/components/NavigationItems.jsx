import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, ListItemText, Grid, Typography, Avatar, makeStyles, Divider, IconButton } from '@material-ui/core/';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from "react-router-dom";
import { getUserByUserName } from '../clients/TaskPlannerClient';

const useStyles = makeStyles((theme) => ({
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    m1: {
        margin: theme.spacing(1)
    },
    justifyEnd: {
        justifyContent: 'end'
    }
  }));

export default function NavigationItems(){

    const classes = useStyles();
    const history = useHistory();
    const [userEmail, setUserEmail] = useState("")

    useEffect ( () => {
        getUserByUserName(localStorage.getItem("username"))
            .then(res => {
                setUserEmail(res.email);
            })
            .catch(() => {});
    }, [userEmail]);

    const Logout = () => {
        localStorage.setItem("loggingStaus","notLogged");
        localStorage.removeItem("username");
        localStorage.removeItem("userpassword");
        history.push("/");
    }

    return (
        <>
            <header className={classes.header}>
            <Grid container>
                    <Grid item className={classes.m1}>
                        <Avatar alt="Profile picture" src="https://i.pinimg.com/originals/8f/95/6d/8f956d530825c9351b2a472f915182d4.jpg" />
                    </Grid>
                    <Grid item className={classes.m1}>
                        <Typography >
                            {localStorage.getItem("username")}
                        </Typography>
                        <Typography>
                            {userEmail}
                        </Typography>
                    </Grid>
                    <Grid container justify={"flex-end"}>
                        <IconButton onClick={()=>{ history.push("/myProfile") }}>
                            <EditIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </header>
            <Divider />
            <List component='nav'>
                <ListItem div>
                </ListItem>
                <ListItem button onClick={Logout}>
                    <ListItemIcon>
                       <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>
            </List>
        </>
    );

}