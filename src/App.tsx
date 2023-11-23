import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoApp/toDoList/ToDoList';
import ToDoForm from './ToDoApp/toDoForm/ToDoForm';
import ToDoFooter from './ToDoApp/toDoFooter/ToDoFooter';
import { ToDoI } from "./interfaces/todo.interface";

function App() {
    const [toDos, setToDos] = useState<ToDoI[]>([
        {
            id: Math.random(),
            text: 'Learn JS',
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: 'Learn React',
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: 'Learn Angular',
            isCompleted: false,
        },
    ]);

    function addToDo(text: string) {
        setToDos([
            ...toDos,
            {
                id: Math.random(),
                text: text,
                isCompleted: false,
            },
        ]);
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
            <ToDoForm onAdd={addToDo}/>
            <ToDoList toDos={toDos} onChange={handleTodoChange} onDelete={handleTodoDelete}/>
            <ToDoFooter toDos={toDos} onClearCompleted={handleClearCompleted}/>
        </div>
    );
}

export default App;
