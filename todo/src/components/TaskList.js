import React from 'react'
import Task from './Task'

const TaskList = (props) => (
    props.tasks.filter((task) => task.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
        .map((task, index) => (
            <Task key={index} label={task}/>
        ))
);


export default TaskList