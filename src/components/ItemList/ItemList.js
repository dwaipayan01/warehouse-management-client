import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ShowList from './ShowList';

const ItemList = () => {
    const [user, loading, error] = useAuthState(auth);
    const email = user.email
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const url = `https://belle-fromage-55105.herokuapp.com/itemList?email=${email}`;
        try {

            fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                }
            })
                .then(res => res.json())
                .then(data => setItems(data));
        }
        catch (error) {
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate("/login");
            }

        }
    }, [user])
    const handleDeleteItem = id => {
        const proced = window.confirm("Are you sure");
        if (proced) {
            const url = `https://belle-fromage-55105.herokuapp.com/item/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaning = items.filter(it => it._id !== id);
                    setItems(remaning);
                });
        }
    }
    return (
        <div>
            <h1 className="text-primary text-center mt-5">Check your all item</h1>
            <div>
                {
                    items.map(item => <ShowList item={item} key={item._id} handleDeleteItem={handleDeleteItem}></ShowList>)
                }
            </div>

        </div>
    );
};

export default ItemList;