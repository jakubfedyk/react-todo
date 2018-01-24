import React from 'react'
import Task from './Task'
import List from "./List";

const TasksList = (props) => (
    <List>
        {props.tasks
            .filter(task => task.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
            .map((task, index) => (
                <Task
                    key={`task-${index}`}
                    name={task}
                    onDelete={() => props.onDelete(task)}
                />
            ))}
    </List>
);
export default TasksList;


