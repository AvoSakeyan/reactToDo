import {ToDo} from "./todo.interface";

export interface ToDoFooter {
    toDos: ToDo[];
    onClearCompleted: () => void;
}
