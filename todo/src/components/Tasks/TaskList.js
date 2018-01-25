import React from 'react';
import Task from './Task';

const TaskList = (props) =>
        props.tasks
            .filter(task => task.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
            .map((task, index) => (
                <Task
                    key={`task-${index}`}
                    name={task}
                    onDelete={() => props.onDelete(task)}
                />
            ));
export default TaskList;