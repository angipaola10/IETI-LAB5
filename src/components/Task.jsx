import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default function Task({description, status, dueDate, responsible}) {

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container >
                    <Grid item xs={11}>
                        <Typography variant="h5" component="h1">
                            {description} 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <AssignmentIcon />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography color="secondary">
                            {status}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography color="secondary">
                            {dueDate.toLocaleDateString()}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary">
                            {responsible}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}