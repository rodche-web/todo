import React, {useState} from 'react'

const TodoForm = ({submitTodo}) => {
    const [todo, setTodo] = useState({id: null, text: ''})
    
    const handleChange = e => {
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        submitTodo({id: Math.floor(Math.random() * 100000), text: todo})
        setTodo({id: null, text: ''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={todo.text} placeholder='Add todo' onChange={handleChange} />
            <input type='submit' value='Add' />
        </form>
    )
}

export default TodoForm
