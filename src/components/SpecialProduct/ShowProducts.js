import React from 'react';
import "./ShowProducts.css";

const ShowProducts = (props) => {
    const { name, price, picture, Rating } = props.product;
    return (
        <div className='d-flex border-area'>
            <img style={{ width: "90px" }} src={picture} alt="" />
            <div className='border-area-one ms-3'>
                <h5>{name}</h5>
                <p>Ratings:<span className='color'>{Rating}</span></p>
                <p><span className='color'>{price}</span></p>
            </div>
        </div>
    );
};

export default ShowProducts;