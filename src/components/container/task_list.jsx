import React, { useState, useEffect } from 'react';
import { URGENCY } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, URGENCY.NORMAL)

    // Estado del componente
    const [tasks, setTask] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false)
        return () => {
            console.log('Task list component will unmount');
        };
    }, [tasks]);

    const changeCompleted = (id) => {
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
