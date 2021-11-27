import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://nameless-springs-26061.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-review">
            <h2>Please Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input className="style" type="submit" />
            </form>
        </div>
    );
};

export default AddService;