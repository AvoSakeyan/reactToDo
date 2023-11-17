import { ToDo } from "./todo.interface";

export interface ToDoList {
    toDos: ToDo[];
    onChange: (toDo: ToDo) => void;
    onDelete: (toDo: ToDo) => void;
}
