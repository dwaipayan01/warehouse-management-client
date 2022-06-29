import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1 className="text-center text-primary mt-5">Please Login</h1>
            <div className="w-25 mx-auto mt-3  display">
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="rounded-pill border border-info" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="rounded-pill border border-info" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="rounded-pill" variant="primary" type="submit">
                        Login
                    </Button>
                    <p className="mt-3">New to this website ? <Link className="text-decoration-none" to="/signup">sign up</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;