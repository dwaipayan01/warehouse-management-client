import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const navigate = useNavigate();
    if (user) {
        navigate("/home");
    }
    if (loading) {
        return <p><Loading></Loading></p>
    }
    const ResetPassword = async (event) => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Password reset mail sent the email");
        }
        else {
            toast("Please give a valid email");
        }

    }
    return (
        <div>
            <h1 className="text-center text-primary mt-5">Please Login</h1>
            <div className="w-50 mx-auto mt-3  display">
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} className="rounded-pill border border-info" type="email" name="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="rounded-pill border border-info" type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <p className="text-danger">{error?.message}</p>
                    <Button className="rounded-pill" variant="primary" type="submit">
                        Login
                    </Button>
                    <p className="mt-3">New to this website ? <Link className="text-decoration-none" to="/signup">sign up</Link></p>
                    <p>Forget Password ? <Link onClick={ResetPassword} className="text-decoration-none" to="/login">Reset Password</Link></p>
                </Form>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div >
    );
};

export default Login;