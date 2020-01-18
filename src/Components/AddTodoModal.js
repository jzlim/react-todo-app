import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function AddTodoModal({visible, handleTriggerModal, handleAddNewTodo}) {
    const [content, setContent] = useState('');
    const handleSave = () => {
        handleAddNewTodo(content);
        setContent('');
    }

    return (
        <Modal show={visible} onHide={handleTriggerModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Control type="text" placeholder="What to do..." value={content} onChange={(e)=> setContent(e.target.value)} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleTriggerModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
