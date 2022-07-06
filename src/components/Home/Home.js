import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import SpecialProduct from '../SpecialProduct/SpecialProduct';
import Subscription from '../Subscription/Subscription';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <SpecialProduct></SpecialProduct>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;