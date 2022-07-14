import React from 'react';
import "./ShowList.css";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShowList = ({ handleDeleteItem, item }) => {
    const { name, picture, price, supplierName, quantity, shortDescription } = item;
    return (
        <div className="show-item-one mt-3 d-flex">
            <img src={picture} alt="" />

            <div className="ms-3 item-container">
                <div className="show-item mt-4">
                    <h5>{name}</h5>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Supplier Name:{supplierName}</p>
                    <p>{shortDescription}</p>
                </div>
                <div className="delete-container me-3">
                    <button onClick={() => handleDeleteItem(item._id)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowList;