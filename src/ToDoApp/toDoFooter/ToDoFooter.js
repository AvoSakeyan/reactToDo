import './index.css';

function ToDoFooter({toDos, onClearCompleted}) {
    const completed = toDos.filter((toDos) => toDos.isCompleted).length
    return(
        <div className="footer-container">
            <span>{completed}/{toDos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>

    )
}

export default ToDoFooter;

