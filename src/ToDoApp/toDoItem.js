function ToDoItem({toDo, onChange, onDelete}) {
    return(
        <div>
            <label>
                <input type="checkbox" checked={toDo.isCompleted} onChange={(ev) => {
                    onChange({
                        ...toDo,
                        isCompleted: ev.target.checked
                    })
                }}/>
                {toDo.text}
            </label>
            <button onClick={() => {onDelete(toDo)}}>x</button>
        </div>
    )
}

export default ToDoItem
