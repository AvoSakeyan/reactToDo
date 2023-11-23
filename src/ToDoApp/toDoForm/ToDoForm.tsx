import React, { useState } from 'react';
import './ToDoForm.css';
import { TodoFormI } from "../../interfaces/todo-form.interface";

const ToDoForm: React.FC<TodoFormI> = ({ onAdd }) => {
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
            <button className="add-btn" type="submit" disabled={text === ''}>
                Add
            </button>
        </form>
    );
};

export default ToDoForm;
