import {useState} from "react";

function ToDoForm({onAdd}) {
    const [text, setText] = useState("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onAdd(text)
            setText("")
        }}>
            <input type="text" value={text} onChange={(event) => {
                setText(event.target.value)
            }}/>
            <button>add</button>
        </form>
    )
}

export default ToDoForm;
