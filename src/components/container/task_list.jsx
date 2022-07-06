import React from 'react';
import { URGENCY } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, URGENCY.NORMAL)

    const changeState = (id) => {
        console.log('To-Do: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your tasks: 
            </div>
            { /* TO-DO: Aplicar map para renderizar lista de tareas */ }
            <TaskComponent task={ defaultTask } ></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
