import { URGENCY } from "./levels.enum";

export class Task {
    name = '';
    desc = '';
    completed = false;
    urgency = URGENCY.NORMAL;


    /* lista para utilizar como props de cada tarea */
    constructor(name, desc, completed, urgency) {
        this.name = name;
        this.desc = desc;
        this.completed = completed;
        this.urgency = urgency
    }

}