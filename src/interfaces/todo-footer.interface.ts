import {ToDoI} from "./todo.interface";

export interface ToDoFooterI {
    toDos: ToDoI[];
    onClearCompleted: () => void;
}
