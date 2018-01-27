import React, {Component} from 'react';
import {add, init, remove, search} from '../state/state.js';
import {connect} from 'react-redux';
import TaskList from './TaskList';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar'


const mapStateToProps = state => ({
    tasksList: state.tasks.tasks,
    query: state.tasks.query
});

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(add(task)),
    searchTask: value => dispatch(search(value)),
    removeTask: taskId => dispatch(remove(taskId)),
    initTasks: () => dispatch(init())
});

const gridStyle = {
    margin: 10,
    padding: 5,
    textAlign: 'center'
}


class ContainerTask extends Component {

    state = {
        direction: 'column',
        justify: 'space-around',
        alignItems: 'center',

    };


    state = {
        task: ' ',
        open: false
    };

    componentWillMount() {
        this.props.initTasks();
    }

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    textChanged = event => {
        this.setState({task: event.target.value});
    };

    searchChanged = event => {
        this.props.searchTask(event.target.value)
    };

    handleSubmit = event => {
        this.props.addTask(this.state.task);
        event.preventDefault()
    };

    deleteSubmit = task => {
        this.props.removeTask(task)
    };

    render() {
        const {alignItems, direction, justify} = this.state;
        return (
            <div>
                <Paper>
                    <Grid container spacing={12}>
                        <Grid container
                              alignItems={alignItems}
                              direction={direction}
                              justify={justify}
                        >
                            <Grid item xs={12} style={gridStyle}>
                                <form onSubmit={this.handleSubmit}>
                                    <TextField
                                        id="task"
                                        label="Task"
                                        value={this.state.task}
                                        onChange={this.textChanged}
                                        margin="normal"
                                    />
                                    <Button style={{marginLeft: 5}} type="submit" raised color="primary"
                                            onClick={this.handleClick}>Add</Button>
                                    <Snackbar
                                        open={this.state.open}
                                        message="Event added to your calendar"
                                        autoHideDuration={4000}
                                        onRequestClose={this.handleRequestClose}
                                    />
                                </form>
                            </Grid>
                        </Grid>
                        <Grid tem xs={12} style={{textAlign: 'center'}}>
                            <div>
                                <TextField placeholder="Search..." onChange={this.searchChanged}/>
                            </div>
                        </Grid>
                        <Grid tem xs={12} style={{textAlign: 'center'}}>
                            <h2>My tasks</h2>
                            <TaskList
                                tasks={this.props.tasksList}
                                query={this.props.query}
                                onRemove={this.deleteSubmit}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTask);