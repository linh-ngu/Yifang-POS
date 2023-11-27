//import '../styles/IngredientStyles.css'; // Include your custom CSS file
// import { useState } from 'react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Manager.css'
import Customization from './Customization';

const Ingredient = () => {
    const[ingredient, setIngredient] = useState([]);
    const[task, setTask] = useState(null);

    const getIngredient = async() => {
        try {
            const response = await fetch("http://localhost:5000/manager");
            const jsonData = await response.json();

            setIngredient(jsonData);

            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    } 
    
    useEffect(() => {
        getIngredient();
    },[]);

    const openModal = () => {
        setTask(8);
    };

    const closeModal = () => {
        setTask(null);
    };

    return (
        <div className="ingredient-container">
            
            <div className="data-container">
            <table className="ingredient-table">
                <thead>
                    <tr>
                        <th>Ingredient ID</th>
                        <th>Name</th>
                        <th>Stock Level</th>
                        <th>Restock Date</th>
                        <th>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredient.map((my_ingredient, index) => (
                        <tr key={index}>
                            <td>{my_ingredient.id}</td>
                            <td>{my_ingredient.name}</td>
                            <td>{my_ingredient.stock_level}</td>
                            <td>{my_ingredient.restock_date}</td>
                            <td>{my_ingredient.supplier}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-button" onClick={() => openModal()}>Add Ingredient</button>
            <button className="remove-button">Remove Ingredient</button>
            <button className="restock-button">Change Restock Date</button>
            <button className="supplier-button">Change Supplier</button>
            <button className="name-button">Change Name</button>
            <button className="stock-button">Change Stock Level</button>
            <Customization item={task} onClose={closeModal} />
        </div>
        </div>
    )
};

export default Ingredient;
