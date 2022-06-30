import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/product";
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h1 className='text-primary text-center mt-5'>Inventory Section</h1>
            <div className="row container mt-3 text-center display-area" >
                {
                    products.slice(0, 6).map(product => <div className="col-lg-4 col-sm-12 mt-5" key={product._id}>
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="img-fluid" variant="top" src={product.picture} />

                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <p>Price:{product.price}</p>
                                    <p>Quantity:{product.quantity}</p>
                                    <p>{product.supplierName}</p>
                                    <Card.Text>
                                        {product.shortDescription}
                                    </Card.Text>
                                    <Button variant="primary">Update</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>)
                }

            </div>
            <div className="text-center mt-5 mb-5 ">
                <Button className="rounded-pill" variant="success"><Link className="text-decoration-none text-white" to="/manageinventory">Manage Inventory</Link></Button>{' '}
            </div>

        </div>
    );
};

export default Inventory;