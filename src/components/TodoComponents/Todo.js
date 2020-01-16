import React from "react"

const Todo = props => {
    return (
        <div className={`todo${props.todo.completed ? ' Completed' : ''}`}
        onClick = {() => props.toggleTask(props.todo.id)}
        >
            <h3> {props.todo.task} </h3>
        </div>
    )
}

export default Todo