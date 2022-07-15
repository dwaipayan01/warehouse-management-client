import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./inventoryDetail.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';

const InventoryDetail = () => {
    const { inventoryID } = useParams();
    const [inventory, setInventory] = useState(true);
    useEffect(() => {
        const url = `https://belle-fromage-55105.herokuapp.com/inventory/${inventoryID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventory])
    const handleItem = (event) => {
        event.preventDefault();
        const updatedQuantity = event.target.number.value;
        const newQuantity = parseInt(updatedQuantity) + parseInt(inventory.quantity);
        console.log(newQuantity);
        const renewQuantity = { newQuantity };
        const url = `https://belle-fromage-55105.herokuapp.com/inventory/${inventoryID}`;
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
                toast("Quantity successfully added");
                event.target.reset();
            })
    }
    const handleDeliver = () => {
        console.log("Click hoise re")
        const newValue = parseInt(inventory.quantity) - 1;
        console.log(newValue);
        const renewQuantity = { newValue };
        const url = `https://belle-fromage-55105.herokuapp.com/user/${inventoryID}`;
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
                        <Button onClick={handleDeliver} variant="primary">Deliver</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Form onSubmit={handleItem} className="w-25 mx-auto mt-3">
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Restock the items</Form.Label>
                        <Form.Control type="number" name="number" placeholder="Type any number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <ToastContainer />
            </div>

        </div>
    );
};

export default InventoryDetail;