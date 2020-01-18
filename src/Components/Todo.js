import React from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import './Todo.css'

export default function Todo({todo, handleToggleTodo}) {
    const handleCheck = () => handleToggleTodo(todo._id)

    return (
        <ListGroup.Item>
            <Form.Check
                custom
                type="checkbox"
                id={`custom-checkbox-${todo._id}`}
                label={todo.content}
                checked={todo.isCompleted}
                onChange={handleCheck}
                className={(todo.isCompleted ? 'text-line-through' : '')}
            />
        </ListGroup.Item>
    )
}
