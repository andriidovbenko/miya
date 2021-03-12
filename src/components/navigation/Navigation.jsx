import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap'

const Navigation = () => (
    <div className="miya-navigation">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MIYA Store</Navbar.Brand>
                <Nav className="mr-auto">
                <Link to="/" className="nav-link" role="button">Альтенатива</Link>
                <Link to="/for-home" className="nav-link" role="button">Для дому</Link>
                <Link to="/original" className="nav-link" role="button">Original</Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Пошук..." className="mr-sm-2" />
                <Button variant="outline-info">Пошук</Button>
                </Form>
            </Container>
        </Navbar>
    </div>    
)

export default Navigation