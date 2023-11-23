import ToDoItem from "../toDoItem/ToDoItem";
import React from "react";
import { ToDoListI } from "../../interfaces/todo-list.interface";

const ToDoList: React.FC<ToDoListI> = ({ toDos, onChange, onDelete }) => {
    return (
        <div>
            {toDos.map((toDo) => (
                <ToDoItem
                    key={toDo.id}
                    toDo={toDo}
                    onChange={onChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}


export default ToDoList;
