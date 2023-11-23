import { ToDoI } from "./todo.interface";

export interface ToDoItemI {
    toDo: ToDoI;
    onChange: (updatedToDo: ToDoI) => void;
    onDelete: (toDo: ToDoI) => void;
}
