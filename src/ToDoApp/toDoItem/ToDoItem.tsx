import React from 'react';
import './ToDoItem.css';
import {ToDoItemI} from "../../interfaces/todo-item.interface";

const ToDoItem: React.FC<ToDoItemI> = ({ toDo, onChange, onDelete }) => {

    function handleOnChange(ev: any) {
        return onChange({
            ...toDo,
            isCompleted: ev.target.checked,
        });
    }

    return (
        <div className="item-container">
            <label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={toDo.isCompleted}
                    onChange={handleOnChange}
                />
                {toDo.text}
            </label>
            <button className="delete-btn" onClick={() => onDelete(toDo)}>
                x
            </button>
        </div>
    );
};

export default ToDoItem;
