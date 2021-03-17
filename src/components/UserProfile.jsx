import React, { useState } from 'react';
import { Container, TextField, makeStyles, Avatar, Typography, Button } from '@material-ui/core';
import { getUserByUserName, putUser } from '../clients/TaskPlannerClient';
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
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}));


export default function UserProfile() {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== password2){
            alert("Oops!, an error has occurred. Check your inputs and try again!"); return;
        } 
        if (!email.length && !password.length && !password2.length){
            alert("Enter the new information"); return;
        }
        getUserByUserName(localStorage.getItem("username"))
            .then(res => {
                if (email !== "") res.email = email;
                if (password != "") res.password = password;
                putUser(res, localStorage.getItem("username"))
                    .then ( () => {
                        alert("Profile updated!")
                        history.push("/mainView");
                    })
                    .catch( () => alert("Oops, an error has occurred. Try again!"))
            })
            .catch(() => {});
    };

    return (
        <Container component="main" maxWidth="xs" className={classes.paper}>
            <Avatar className={classes.avatar} alt="Profile picture" src="https://i.pinimg.com/originals/8f/95/6d/8f956d530825c9351b2a472f915182d4.jpg" />
            <Typography component="h1" variant="h5">
                User profile
            </Typography>
            <form className={classes.form} autoComplete="off" onSubmit={handleSubmit} >
                <TextField
                    id="name"
                    label={localStorage.getItem("username")}
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                    disabled
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    className={classes.formControl}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    id="password2"
                    label="Confirm password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    className={classes.formControl}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <Button variant="contained" color="secondary" type="submit"  className={classes.formControl} fullWidth>
                    Update
                </Button>
            </form>
        </Container>
    );
}