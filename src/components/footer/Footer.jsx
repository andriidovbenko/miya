import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <div style={ { width: '100%' } }>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="nav-link" role="button">
                        <Navbar.Brand>MIYA Store</Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;