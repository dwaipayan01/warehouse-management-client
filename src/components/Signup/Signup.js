import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Singup.css";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { async } from '@firebase/util';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
    );
    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth);
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    if (user) {
        navigate("/home");
    }
    if (loading) {
        return <p><Loading></Loading></p>
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setError("Your password did not match");
            return;
        }
        if (password.length < 6) {
            setError("Password must be six chareacter");
        }
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        event.target.reset();

    }
    return (
        <div className="display-one mt-5 mx-auto">
            <h1 className="text-primary text-center mt-3 ">Please create account</h1>
            <Form onSubmit={handleSubmit} className="w-100 mx-auto mt-3 ">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Email Name</Form.Label>
                    <Form.Control className="rounded-pill border border-info" type="name" name="name" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="rounded-pill border border-info" type="email" name="email" placeholder="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="rounded-pill border border-info" type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control className="rounded-pill border border-info" type="password" name="confirmPassword" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? "text-primary" : "text-danger"} label="Accept terms and condition" />
                </Form.Group>
                <p className="text-danger">{error}</p>
                <Button disabled={!agree} className="rounded-pill border border-info" variant="primary" type="submit">
                    Create
                </Button>
                <p className="mt-3">Already have an account ? <Link className="text-decoration-none" to="/login">Login</Link></p>
                <SocialLogin></SocialLogin>
            </Form>

        </div>
    );
};

export default Signup;