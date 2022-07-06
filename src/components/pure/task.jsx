import { Task } from "../../models/task.class";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Task created');
        return () => {
            console.log(`Task ${task.name} deleted`)
        };
    }, [task]);

    return (
        <div>
            <h2>Name: { task.name }</h2>
            <h3>Description: { task.desc }</h3>
            <h4>Urgency: { task.urgency }</h4>
            <h5>This task is: { task.completed ? 'Complete': 'Pending' }</h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
