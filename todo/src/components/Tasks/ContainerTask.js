import React, {Component} from 'react';
import {add, remove, search} from '../state/state.js';
import { connect } from 'react-redux';
import TaskList from './TaskList';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'


const mapStateToProps = state => ({
    tasksList: state.tasks.tasks,
    query: state.tasks.query
});

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(add(task)),
    searchTask: value => dispatch(search(value)),
    removeTask: task => dispatch(remove(task))
});

class ContainerTask extends Component {

    state = {
        task: ' '
    };


    textChanged = (event) => {
        this.setState({task: event.target.value});
    };

    searchChanged = (event) => {
        this.props.searchTask(event.target.value)
    };

    handleSubmit = (event) => {
        this.props.addTask(this.state.task);
        event.preventDefault();
    };

    deleteSubmit = (task) => {
        this.props.removeTask(task)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="task"
                        label="Task"
                        value={this.state.task}
                        onChange={this.textChanged}
                        margin="normal"
                    />
                    <Button type="submit" raised color="primary">Add</Button>
                </form>
                    <div>
                        <TextField placeholder="Search..." onChange={this.searchChanged}/>
                    </div>
                    <h2>My tasks</h2>
                    <TaskList
                        tasks={this.props.tasksList}
                        query={this.props.query}
                        onDelete={this.deleteSubmit}
                    />
            </div>
            )
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(ContainerTask);