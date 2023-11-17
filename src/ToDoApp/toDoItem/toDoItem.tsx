import React from 'react';
import './index.css';
import {ToDoItem} from "../../interfaces/todo-item.interface";

const ToDoItem: React.FC<ToDoItem> = ({ toDo, onChange, onDelete }) => {
    return (
        <div className="item-container">
            <label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={toDo.isCompleted}
                    onChange={(ev) => {
                        onChange({
                            ...toDo,
                            isCompleted: ev.target.checked,
                        });
                    }}
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
