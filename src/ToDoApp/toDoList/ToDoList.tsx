import ToDoItem from "../toDoItem/toDoItem";
import './index.css';
import React from "react";
import { ToDoList } from "../../interfaces/todo-list.interface";

const ToDoList: React.FC<ToDoList> = ({ toDos, onChange, onDelete }) => {
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
