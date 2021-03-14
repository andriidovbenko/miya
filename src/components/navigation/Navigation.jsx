import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaShoppingBasket as ShoppingBasket } from 'react-icons/fa';
import Badge from '@material-ui/core/Badge';

const Navigation = () => {
    const itemsInBasket = useSelector(state => {
        return state.basketItems.length;
    });

    return (
        <div className="miya-navigation">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="nav-link" role="button">
                        <Navbar.Brand>MIYA Store</Navbar.Brand>
                    </Link>
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link" role="button">Альтенатива</Link>
                        <Link to="/for-home" className="nav-link" role="button">Для дому</Link>
                        <Link to="/original" className="nav-link" role="button">Original</Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Пошук..." className="mr-sm-2" />
                        <Button variant="outline-info">Пошук</Button>
                    </Form>
                    <Link to="/basket" className="nav-link" role="button">
                        <Badge badgeContent={ itemsInBasket } color="secondary">
                            <ShoppingBasket />
                        </Badge>
                    </Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation