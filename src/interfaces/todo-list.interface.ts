import { ToDoI } from "./todo.interface";

export interface ToDoListI {
    toDos: ToDoI[];
    onChange: (toDo: ToDoI) => void;
    onDelete: (toDo: ToDoI) => void;
}
