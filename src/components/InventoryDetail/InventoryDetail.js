import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./inventoryDetail.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const InventoryDetail = () => {
    const { inventoryID } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return (
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
    );
};

export default InventoryDetail;