import {useState} from "react";
import './index.css';

function ToDoForm({onAdd}) {
    const [text, setText] = useState("")

    return (
        <form className='form-container' onSubmit={(e) => {
            e.preventDefault()
            onAdd(text)
            setText("")
        }}>
            <input className='input-field' type="text" value={text} onChange={(event) => {
                setText(event.target.value)
            }}/>
            <button  className='add-btn'>Add</button>
        </form>
    )
}

export default ToDoForm;
