import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import "./Subscription.css";

const Subscription = () => {
    return (
        <div className='middle-area mt-5'>
            <h5 className="centered">Subscribe to our Newsletter</h5>
            <div className='middle-area-one'>
                <InputGroup className="mb-3 w-25 mx-auto ">
                    <Form.Control
                        placeholder="Enter your email"
                        aria-label="Enter your email"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Submit
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Subscription;