import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import {
    FaShoppingBasket as ShoppingBasket,
    FaUserAlt as UserIcon,
    FaUserSlash as ExitIcon, 
    FaStar as StarIcon
} from 'react-icons/fa';
import Badge from '@material-ui/core/Badge';
import { logout } from '../../actions/users';
const Navigation = () => {
    const dispatch = useDispatch();
    const itemsInBasket = useSelector(state => {
        return state.basketItems.length;
    });

    const isAuthenticated = useSelector(state => {
        return !!state.user.userData;
    })

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
                    </Nav>
                    <Link to="/basket" className="nav-link" role="button">
                        <Badge badgeContent={ itemsInBasket } color="secondary">
                            <ShoppingBasket />
                        </Badge>
                    </Link>
                    {
                        !isAuthenticated && (<Link to="/login" className="nav-link" role="button">
                            <UserIcon />
                        </Link>)
                    }
                    {
                        isAuthenticated && (<>
                            <Link to="/admin" className="nav-link" role="button">
                                <StarIcon />
                            </Link>
                            <Link className="nav-link" role="button">
                                <ExitIcon onClick={ () => dispatch(logout()) } />
                            </Link>
                        </>)
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation