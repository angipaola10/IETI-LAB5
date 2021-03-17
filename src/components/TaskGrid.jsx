import React, { useState, useEffect } from 'react';
import Task from './Task';
import { makeStyles, Grid } from '@material-ui/core/';
import { getTasks } from '../clients/TaskPlannerClient';

const useStyles = makeStyles((theme) => ({
    taskItem: {
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2)
        },
        marginBottom: theme.spacing(2)
    },
}));

export default function TaskGrid() {

    const classes = useStyles();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks()
            .then(res => {
                setTasks(Object.values(res));
            })
            .catch(() => { });
    }, [tasks]);

    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            {
                tasks.map(task => (
                    <Grid item xs={12} md={5} className={classes.taskItem} key={task.description}>
                        <Task
                            description={task.description}
                            status={task.status}
                            dueDate={new Date(task.dueDate)}
                            responsible={task.responsible.name} />
                    </Grid>
                ))
            }
        </Grid>
    );
}