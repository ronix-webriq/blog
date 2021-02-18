import { Button, Divider, Grid, Paper, Typography, Box, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField  } from '@material-ui/core'
import React from 'react'
import DrawerDesign from '../design/drawerDesign'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {fetch_Task_NotStarted, fetch_In_Progress, fetch_For_Review, fetch_Completed} from '../sanityConfig/config';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const dialog = (open, handleClose, handleAdd, handleOnchange) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">{"Add a Task"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
               <TextField fullWidth variant="outlined" size="small" label="Task Name" name="taskName" onChange={(e) => handleOnchange(e)}></TextField>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="contained">
                Disagree
            </Button>
            <Button onClick={handleAdd} color="primary" autoFocus variant="contained">
                Agree
            </Button>
            </DialogActions>
        </Dialog>
    )
}
export default function Todolist(props) {
    const [addTask, setAddTask] = React.useState({taskName: ''});
    const [taskNotStarted, setTaskNotStarted] = React.useState(null);
    const [taskInProgress, setTaskInProgress] = React.useState(null);
    const [forReview, setForReview] = React.useState(null);
    const [completed, setCompleted] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnchange = (e) => {
        const {name, value} = e.target;
        setAddTask(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleAdd = () => {
        let data = `*[_type == "task_manager"] {task_name: "Ronix"}`;           
        // addTodo(data);
    };

    React.useEffect(() => {
        fetch_Task_NotStarted(setTaskNotStarted)
        fetch_In_Progress(setTaskInProgress)
        fetch_For_Review(setForReview)
        fetch_Completed(setCompleted)
    }, [])

    
    return (
        <DrawerDesign>
            {dialog(open, handleClose, handleAdd, handleOnchange)}
            <Box display='flex' justifyContent='space-between'>
                <Typography variant="h4">To Do List</Typography>
                <IconButton color='primary' onClick={() => setOpen(true)}>
                    <AddCircleIcon />
                </IconButton>
            </Box>
            <Divider />
            <Grid container spacing={2} style={{padding: 15}}>
                <Grid item xs={3}>
                    <Paper elevation={3} style={{padding: 15}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variat="inherit">Task <span style={{color: 'red'}}>Not Started</span></Typography>                                    
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            {taskNotStarted && taskNotStarted.map(task =>
                                task.todo.map(todo => {
                                    return (
                                        <Grid item xs={12}>
                                            <ArrowRightIcon /><Typography variant="caption">{todo.todo_name}</Typography>
                                        </Grid> 
                                    )
                                })  
                            )}
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} style={{padding: 15}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variat="inherit">Task <span style={{color: 'blue'}}>In Progress</span></Typography>                                    
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>
                        {taskInProgress && taskInProgress.map(task =>
                                task.todo.map(todo => {
                                    return (
                                        <Grid item xs={12}>
                                            <ArrowRightIcon /><Typography variant="caption">{todo.todo_name}</Typography>
                                        </Grid> 
                                    )
                                })  
                            )}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} style={{padding: 15}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variat="inherit">Task <span style={{color: '#F3BA0C'}}>For Review</span></Typography>                                    
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>
                        {forReview && forReview.map(task =>
                                task.todo.map(todo => {
                                    return (
                                        <Grid item xs={12}>
                                            <ArrowRightIcon /><Typography variant="caption">{todo.todo_name}</Typography>
                                        </Grid> 
                                    )
                                })  
                            )}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} style={{padding: 15}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variat="inherit">Task <span style={{color: '#4DC274'}}>Completed</span></Typography>                                    
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>
                        {completed && completed.map(task =>
                                task.todo.map(todo => {
                                    return (
                                        <Grid item xs={12}>
                                            <ArrowRightIcon /><Typography variant="caption">{todo.todo_name}</Typography>
                                        </Grid> 
                                    )
                                })  
                            )}
                    </Paper>
                </Grid>
            </Grid>
        </DrawerDesign>
    )
}
