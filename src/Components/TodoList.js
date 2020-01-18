import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, handleToggleTodo}) {
    return (
        todos.map(todo => {
            return <Todo key={todo._id} todo={todo} handleToggleTodo={handleToggleTodo}/>
        })
    )
}
