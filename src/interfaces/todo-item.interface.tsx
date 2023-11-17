import {ToDo} from "./todo.interface";

export interface ToDoItem {
    toDo: ToDo;
    onChange: (updatedToDo: ToDo) => void;
    onDelete: (toDo: ToDo) => void;
}
