import React, {useState} from 'react';
import { Container, TextField, Button, makeStyles, Avatar, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { users } from '../data/Users';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    form: {
      padding: theme.spacing(1),
      margin: theme.spacing(1)
    },
    formControl: {
        marginTop: theme.spacing(3),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    }
  }));

export default function Login() {

    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const logIn = () => {
        if (users.has(userName)){
            if(users.get(userName).password === password){
                localStorage.setItem("loggingStaus", "logged");
                localStorage.setItem("username", userName);
                localStorage.setItem("userpassword", password);
                history.push("/mainView");
            }else{
                alert("Oops, incorrect password");
            }
        }else{
            alert("Oops, user not found");
        }
    }

    return (
        <Container component="main" maxWidth="xs" className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Log In
            </Typography>
            <form className={classes.form} autoComplete="off" onSubmit={logIn}>
            <TextField 
                id="username" 
                label="User Name" 
                variant="outlined" 
                fullWidth 
                className={classes.formControl}
                onChange={(e)=> setUserName(e.target.value)} />
            <TextField 
                id="password" 
                label="Password" 
                variant="outlined" 
                fullWidth 
                type="password" 
                className={classes.formControl}
                onChange={(e)=> setPassword(e.target.value)} />
            <Button 
                variant="contained" 
                color="secondary" 
                fullWidth 
                className={classes.formControl} 
                type="submit">Log In</Button>
            <Button 
                color="primary"
                fullWidth
                className={classes.formControl}>Create Account</Button>
            </form>
        </Container>
    );
}