import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoApp/toDoList/ToDoList';
import ToDoForm from './ToDoApp/toDoForm/ToDoForm';
import ToDoFooter from './ToDoApp/toDoFooter/ToDoFooter';
import { ToDoI } from "./interfaces/todo.interface";

function App() {
    const [toDos, setToDos] = useState<ToDoI[]>([
        {
            id: 0,
            text: 'Learn JS',
            isCompleted: false,
        },
        {
            id: 1,
            text: 'Learn React',
            isCompleted: false,
        },
        {
            id: 2,
            text: 'Learn Angular',
            isCompleted: false,
        },
    ]);

    const [text, setText] = useState('');

    function addToDo(newText: string) {
        setToDos([
            ...toDos,
            {
                id: toDos.length,
                text: newText,
                isCompleted: false,
            },
        ]);
        setText('');
    }

    function handleTodoChange(newTodo: ToDoI) {
        setToDos(toDos.map((todo) => {
            if (todo.id === newTodo.id) {
                return newTodo;
            }
            return todo;
        }));
    }

    function handleTodoDelete(toDo: ToDoI) {
        setToDos(toDos.filter((t) => t.id !== toDo.id));
    }

    function handleClearCompleted() {
        setToDos(toDos.filter((todo) => !todo.isCompleted));
    }

    return (
        <div className="App">
            <ToDoForm onAdd={addToDo} text={text} setText={setText}/>
            <ToDoList toDos={toDos} onChange={handleTodoChange} onDelete={handleTodoDelete}/>
            <ToDoFooter toDos={toDos} onClearCompleted={handleClearCompleted}/>
        </div>
    );
}

export default App;
