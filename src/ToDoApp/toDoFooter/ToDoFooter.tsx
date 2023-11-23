import React from 'react';
import './ToDoFooter.css';
import { ToDoFooterI } from "../../interfaces/todo-footer.interface";

const ToDoFooter: React.FC<ToDoFooterI> = ({ toDos, onClearCompleted }) => {
    const completed = toDos.filter((toDo) => toDo.isCompleted).length;

    return (
        <div className="footer-container">
            <span>{completed}/{toDos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    );
};

export default ToDoFooter;
