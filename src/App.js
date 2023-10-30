import './App.css';
import {useReducer} from "react";
import ToDoList from "./ToDoApp/ToDoList";
import ToDoForm from "./ToDoApp/ToDoForm";
import ToDoFooter from "./ToDoApp/ToDoFooter";

function reducer(state, action) {
    if (action.type === 'add') {
        return [
            ...state,
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false,
            }
        ]
    } else if(action.type === 'delete') {
        return state.filter((t) => t.id !== action.payload.id)
    } else if (action.type === 'update') {
        // Handle the update action
        return state.map((todo) => {
            if (todo.id === action.payload.id) {
                return {
                    ...todo,
                    text: action.payload.text, // Update the text
                    isCompleted: action.payload.isCompleted, // Update the completion status
                };
            }
            return todo;
        });
    } else if (action.type === 'clearCompleted') {
        return state.filter((todo) => !todo.isCompleted);
    }
}

function App() {
   const [toDos, dispatch] = useReducer(reducer, [
        {
            id: Math.random(),
            text: "Learn JS",
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: "Learn React",
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: "Learn Angular",
            isCompleted: false,
        }
    ])

    return (
    <div className="App">
         <ToDoForm onAdd={(text) => {
             dispatch({
                 type: 'add',
                 payload: {
                     text: text
                 }
             })
         }}/>git push -u origin main
         <ToDoList
             toDos={toDos}
             onChange={(newTodo) => {
                 dispatch({
                     type: 'update',
                     payload: {
                         id: newTodo.id,
                         text: newTodo.text,
                         isCompleted: newTodo.isCompleted,
                     }
                 });
             }}
             onDelete={(toDo) => {
                 dispatch({
                     type: 'delete',
                     payload: {
                         id: toDo.id,
                     }
                 })
             }}
         />
        <ToDoFooter toDos={toDos} onClearCompleted={() => {
            dispatch({
                type: 'clearCompleted'
            });
        }}/>
    </div>
);
}

export default App;
