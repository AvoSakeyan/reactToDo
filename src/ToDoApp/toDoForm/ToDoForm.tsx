import React from 'react';
import './ToDoForm.css';
import { TodoFormI } from "../../interfaces/todo-form.interface";

const ToDoForm: React.FC<TodoFormI> = ({ onAdd, text, setText  }) => {
    function handleOnChange(event: any) {
        setText(event.target.value);
    }

    function submit(event: any) {
        event.preventDefault();
        onAdd(text);
        setText('');
    }
    return (
        <form className="form-container" onSubmit={submit}>
            <input
                className="input-field"
                type="text"
                value={text}
                onChange={handleOnChange}
            />
            <button className="add-btn" type="submit" disabled={text === ''}>
                Add
            </button>
        </form>
    );
};

export default ToDoForm;
