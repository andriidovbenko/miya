import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/users';

const LoginPage = () => {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(state => {
        return !!state.user.userData;
    })
    console.log('isAuthenticated', isAuthenticated)

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        dispatch(login({ email, password }))
    }

    return (
        <div className="miya-admin">
            <h1>Please login</h1>
            <Form onSubmit={ onSubmitHandler }>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
    
}

export default LoginPage;