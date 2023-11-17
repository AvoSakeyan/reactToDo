import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoApp/toDoList/ToDoList';
import ToDoForm from './ToDoApp/toDoForm/ToDoForm';
import ToDoFooter from './ToDoApp/toDoFooter/ToDoFooter';
import { ToDo } from "./interfaces/todo.interface";

function App() {
    const [toDos, setToDos] = useState<ToDo[]>([
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

    return (
        <div className="App">
            <ToDoForm
                onAdd={(text) => {
                    setToDos([
                        ...toDos,
                        {
                            id: Math.random(),
                            text: text,
                            isCompleted: false,
                        },
                    ]);
                }}
            />
            <ToDoList
                toDos={toDos}
                onChange={(newTodo) => {
                    setToDos(toDos.map((todo) => {
                        if (todo.id === newTodo.id) {
                            return newTodo;
                        }
                        return todo;
                    }));
                }}
                onDelete={(toDo) => {
                    setToDos(toDos.filter((t) => t.id !== toDo.id));
                }}
            />
            <ToDoFooter
                toDos={toDos}
                onClearCompleted={() => {
                    setToDos(toDos.filter((todo) => !todo.isCompleted));
                }}
            />
        </div>
    );
}

export default App;
