import React from 'react';
import useProducts from '../../useProduct';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ManageInventory = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proced = window.confirm("Are you sure");
        if (proced) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaning = products.filter(product => product._id !== id);
                    setProducts(remaning);
                });
        }
    }
    return (
        <div>
            <h1 className="text-center text-primary mt-5">Manage all inventory</h1>
            <div className="row container mt-3 display-area">
                {
                    products.map(product => <div className="col-lg-4 col-12 text-center mt-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.picture} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <p>Price:{product.price}</p>
                                <p>Quantity:{product.quantity}</p>
                                <p>{product.supplierName}</p>
                                <Card.Text>
                                    {product.shortDescription}
                                </Card.Text>
                                <Button onClick={() => handleDelete(product._id)} variant="primary">Delete item</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;