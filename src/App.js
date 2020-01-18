import React, { useState } from 'react';
import './App.css';
import NavbarLayout from './Layout/NavbarLayout';
import TodoList from './Components/TodoList';
import { ListGroup, Button } from 'react-bootstrap';
import AddTodoModal from './Components/AddTodoModal';
import uuid from 'uuid/v4';

function App() {
  const [todos, setTodos] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const handleTriggerModal = () => setShowModal(!showModal)

  const handleAddNewTodo = (newTodoContent) => {
    const newTodo = {
      _id: uuid(),
      content: newTodoContent,
      isCompleted: false
    };

    setTodos([...todos, newTodo])
    handleTriggerModal();
  }

  const handleToggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = todos.find(x => x._id === id);
    if (todo)
      todo.isCompleted = !todo.isCompleted
    
    setTodos(newTodos)
  }

  return (
    <>
      <NavbarLayout />
      <ListGroup>
        <TodoList todos={todos} handleToggleTodo={handleToggleTodo}/>
      </ListGroup>
      <Button variant="dark" className="floating-add-btn" onClick={handleTriggerModal}>
        Add New Todo
      </Button>

      <AddTodoModal
        visible={showModal}
        handleTriggerModal={handleTriggerModal}
        handleAddNewTodo={handleAddNewTodo}/>
    </>
  );
}

export default App;
