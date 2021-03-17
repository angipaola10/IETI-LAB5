import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Container, TextField, Fab, makeStyles, Avatar, Typography } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import CheckIcon from '@material-ui/icons/Check';
import { users } from '../data/Users';
import { postTask } from '../clients/TaskPlannerClient';
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
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function NewTask() {

    const classes = useStyles();
    const [description, setDescription] = useState(""); 
    const [responsible, setResponsible] = useState("");
    const [status, setStatus] = useState("Ready");
    const [dueDate, setDueDate] = useState(new Date());
    const statusOptions = ['Ready', 'In progress', 'Done'];
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description.length || !responsible.length || !status.length || !dueDate)
            alert("Oops, check the inputs and try again!");
        
        if (users.has(responsible)){
            let newTask = {
                description: description,
                responsible: {
                    name: responsible,
                    email: users.get(responsible).email
                },
                status: status,
                dueDate: dueDate.valueOf()
            };
            postTask ( newTask )
                .then ( () => { 
                    alert("Task registered");
                    history.push("/mainView");
                })
                .catch( () => alert("Oops, an error has ocurred"));
        }else{
            alert("Oops, the responsible is not registered as user!");
        }
    }


    return (
        <Container component="main" maxWidth="xs" className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AssignmentIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                New Task
            </Typography>
            <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    id="responsible"
                    label="Responsible"
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                    value={responsible}
                    onChange={(e) => setResponsible(e.target.value)}
                />
                <TextField
                    id="status"
                    select fullWidth
                    label="Status"
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    className={classes.formControl}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {statusOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="due-date"
                        label="Due Date"
                        format="MM/dd/yyyy"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        fullWidth
                        className={classes.formControl}
                        onChange={(date) => setDueDate(date)}
                    />
                </MuiPickersUtilsProvider>
                <Fab color="secondary"
                    aria-label="add"
                    className={classes.fab}
                    type="submit"
                >
                    <CheckIcon />
                </Fab>
            </form>
        </Container>
    );
}