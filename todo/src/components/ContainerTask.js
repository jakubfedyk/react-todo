import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, remove, search} from './state/state.js';
import TaskList from './TaskList';
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
        this.removeTask(task)
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." onChange={this.searchChanged}/>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="task"
                        label="Task"
                        value={this.state.task}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </form>

                <h2>My tasks</h2>
                <TaskList
                    query={this.state.query}
                    tasks={this.state.tasks}
                />
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerTask);