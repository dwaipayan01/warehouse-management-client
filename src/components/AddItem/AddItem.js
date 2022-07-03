import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        fetch("http://localhost:5000/product", {
            method: 'POST',
            body: JSON.stringify(

                data





            ),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        event.target.reset();
        toast("Item added successfully");

    };
    return (
        <div>
            <h1 className="text-primary text-center mt-5">Add new item</h1>

            <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3" placeholder='Photo url' type="text" {...register("picture")} />
                <input className="mb-3" placeholder='Name' {...register("name")} />
                <input className="mb-3" placeholder='price' type="number" {...register("price")} />
                <input className="mb-3" placeholder='quantity' type="number" {...register("quantity")} />
                <input className="mb-3" placeholder='Supplier name' {...register("supplierName")} />
                <textArea className="mb-3" placeholder="description" {...register("shortDescription")} />
                <input className="mb-3" type="submit" value="Add item" />
            </form>
            <ToastContainer />
        </div >

    );
};

export default AddItem;