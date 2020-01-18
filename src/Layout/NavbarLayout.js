import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function NavbarLayout() {
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container className="justify-content-center">
                <Navbar.Brand href="#">Todo App by React</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
