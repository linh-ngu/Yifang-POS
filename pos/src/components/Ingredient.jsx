//import '../styles/IngredientStyles.css'; // Include your custom CSS file
// import { useState } from 'react';
import React, { useEffect, useState } from 'react'
import AddIngredients from './tableButtons/addIngredients';
import RemoveIngredients from './tableButtons/removeIngredients';
import ChangeRestockDate from './tableButtons/changeRestockDate';
import ChangeSupplier from './tableButtons/changeSupplier';
import ChangeName from './tableButtons/changeName';
import ChangeStockLevel from './tableButtons/changeStockLevel';
// import Customization from './Customization';
// import '../styles/Manager.css'

const Ingredient = () => {
    const[ingredient, setIngredient] = useState([]);

    const getIngredient = async() => {
        try {
            const response = await fetch("https://yifang-backend.onrender.com/manager");
            // const response = await fetch("http://localhost:5000/manager");
            const jsonData = await response.json();

            setIngredient(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    } 
    
    useEffect(() => {
        getIngredient();
    },[]);

    const [showModel, setShowModel] = useState("");

    const openModel = (val) => {
        setShowModel(val);
    };

    const closeModel = () => {
        setShowModel("");
    };

    return (
        <div className=''> 
            <table className='w-full text-center border border-black mb-4'>
                <thead>
                    <tr>
                        <th className='p-1'>Ingredient ID</th>
                        <th className='p-1'>Name</th>
                        <th className='p-1'>Stock Level</th>
                        <th className='p-1'>Restock Date</th>
                        <th className='p-1'>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredient.map((my_ingredient, index) => (
                        <tr key={index}>
                            <td className='p-1'>{my_ingredient.ingredient_id}</td>
                            <td className='p-1'>{my_ingredient.name}</td>
                            <td className='p-1'>{my_ingredient.stock_level}</td>
                            <td className='p-1'>{my_ingredient.restock_date}</td>
                            <td className='p-1'>{my_ingredient.supplier}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-center'>
                <button className='border border-black p-2 m-4' onClick={() => openModel("addIngredients")}>Add Ingredient</button>
                <button className='border border-black p-2 m-4' onClick={() => openModel("removeIngredients")}>Remove Ingredient</button>
                <button className='border border-black p-2 m-4' onClick={() => openModel("changeRestockDate")}>Change Restock Date</button>
                <button className='border border-black p-2 m-4' onClick={() => openModel("changeSupplier")}>Change Supplier</button>
                <button className='border border-black p-2 m-4' onClick={() => openModel("changeName")}>Change Name</button>
                <button className='border border-black p-2 m-4' onClick={() => openModel("changeStockLevel")}>Change Stock Level</button>
            </div>
            {showModel === 'addIngredients' && <AddIngredients onClose={closeModel} />}
            {showModel === 'removeIngredients' && <RemoveIngredients onClose={closeModel} />}
            {showModel === 'changeRestockDate' && <ChangeRestockDate onClose={closeModel} />}
            {showModel === 'changeSupplier' && <ChangeSupplier onClose={closeModel} />}
            {showModel === 'changeName' && <ChangeName onClose={closeModel} />}
            {showModel === 'changeStockLevel' && <ChangeStockLevel onClose={closeModel} />}
        </div>
    )
};

export default Ingredient;
