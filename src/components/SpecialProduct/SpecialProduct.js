import React, { useEffect, useState } from 'react';
import ShowProducts from './ShowProducts';
import "./SpecialProduc.css";

const SpecialProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/special")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h1 className="text-center text-success">Special Product</h1>
            <div className="mt-5 show-area">
                {
                    products.map(product => <ShowProducts product={product} key={product._id}></ShowProducts>)
                }
            </div>

        </div>
    );
};

export default SpecialProduct;