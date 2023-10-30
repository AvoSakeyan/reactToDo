import ToDoItem from "./toDoItem";

function ToDoList({toDos, onChange, onDelete}) {
    return (
        <div>
            {
                toDos.map((toDo) => {
                    return(
                        <ToDoItem
                            key={toDo.id}
                            toDo={toDo}
                            onChange={onChange}
                            onDelete={onDelete}/>
                    )
                })
            }
        </div>
    )
}

export default ToDoList;
