import React from 'react'

const TodoList = ({todos, removeTodo}) => {

    return (
        <>
            {todos.map(todo => <div key={todo.id}>{todo.text}<button onClick={() => removeTodo(todo.id)}>X</button></div>)}
        </>
    )
}

export default TodoList
