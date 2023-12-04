import React, { useEffect, useState } from 'react'
import AddIngredients from './ingredientsTableButtons/addIngredients';
import RemoveIngredients from './ingredientsTableButtons/removeIngredients';
import ChangeRestockDate from './ingredientsTableButtons/changeRestockDate';
import ChangeSupplier from './ingredientsTableButtons/changeSupplier';
import ChangeName from './ingredientsTableButtons/changeName';
import ChangeStockLevel from './ingredientsTableButtons/changeStockLevel';

const Ingredient = () => {
    const[ingredient, setIngredient] = useState([]);

    const getIngredient = async() => {
        try {
            // const response = await fetch("https://yifang-backend.onrender.com/manager");
            const response = await fetch("http://localhost:5000/manager");
            const jsonData = await response.json();

            console.log(jsonData);

            setIngredient(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    } 
    
    useEffect(() => {
        getIngredient();
    });

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
                <button aria-label="Add ingredient" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("addIngredients")}>Add Ingredient</button>
                <button aria-label="Remove ingredient" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("removeIngredients")}>Remove Ingredient</button>
                <button aria-label="Change restock date" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("changeRestockDate")}>Change Restock Date</button>
                <button aria-label="Change supplier" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("changeSupplier")}>Change Supplier</button>
                <button aria-label="Change name" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("changeName")}>Change Name</button>
                <button aria-label="Change stock level" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("changeStockLevel")}>Change Stock Level</button>
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
