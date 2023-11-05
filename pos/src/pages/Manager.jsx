import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Manager.css'

const Manager = () => {
    const[ingredient, setIngredient] = useState([]);

    const getIngredient = async() => {
        try {
            const response = await fetch("http://localhost:5000/manager");
            const jsonData = await response.json();

            setIngredient(jsonData);

            // console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    } 
    
    useEffect(() => {
        getIngredient();
    },[]);

    return (
        <div className='manager-wrap'>
            {/* {staff.map(my_staff => (
                <p>{my_staff.name} | {my_staff.email}</p>
            ))} */}
            {ingredient.map(my_ingredient => (
                <p>{my_ingredient.ingredient_id} | {my_ingredient.name} | {my_ingredient.stock_level} | {my_ingredient.restock_date} | {my_ingredient.supplier}</p>
            ))}
        </div>
    )
};

export default Manager;