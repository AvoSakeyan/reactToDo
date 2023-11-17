import React, { useState } from 'react';
import './index.css';
import { TodoForm } from "../../interfaces/todo-form.interface";

const ToDoForm: React.FC<TodoForm> = ({ onAdd }) => {
    const [text, setText] = useState('');

    return (
        <form
            className="form-container"
            onSubmit={(e) => {
                e.preventDefault();
                onAdd(text);
                setText('');
            }}
        >
            <input
                className="input-field"
                type="text"
                value={text}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
            <button className="add-btn" type="submit">
                Add
            </button>
        </form>
    );
};

export default ToDoForm;
