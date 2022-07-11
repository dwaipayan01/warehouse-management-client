import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./inventoryDetail.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const InventoryDetail = () => {
    const { inventoryID } = useParams();
    const [inventory, setInventory] = useState(true);
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    const handleItem = (event) => {
        event.preventDefault();
        const updatedQuantity = event.target.number.value;
        const newQuantity = parseInt(updatedQuantity) + parseInt(inventory.quantity);
        console.log(newQuantity);
        const renewQuantity = { newQuantity };
        const url = `http://localhost:5000/inventory/${inventoryID}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(renewQuantity)
        })
            .then(res => res.json())
            .then(data => {

                console.log("success", data);
                event.target.reset();
            })
    }
    return (
        <div>
            <div className='inventory-section mt-5 text-center w-100 '>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={inventory.picture} />
                    <Card.Body>
                        <Card.Title>{inventory.name}</Card.Title>
                        <p>Price : {inventory.price}</p>
                        <p>Quantity :{inventory.quantity}</p>
                        <p>Supplier Name:{inventory.supplierName}</p>
                        <Card.Text>
                            {inventory.shortDescription}
                        </Card.Text>
                        <Button variant="primary">Deliver</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Form onSubmit={handleItem} className="w-25 mx-auto mt-3">
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Restock item</Form.Label>
                        <Form.Control type="number" name="number" placeholder="name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </div>
    );
};

export default InventoryDetail;