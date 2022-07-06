import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import SpecialProduct from '../SpecialProduct/SpecialProduct';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <SpecialProduct></SpecialProduct>
        </div>
    );
};

export default Home;