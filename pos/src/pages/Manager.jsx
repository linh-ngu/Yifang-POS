import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Manager.css'
import Ingredient from '../Manager/Ingredient';
import Menu from '../Manager/Menu';
import OrderHistory from '../Manager/OrderHistory';
import Reports from '../Manager/Report';

const Manager = () => {
     //const[ingredient, setIngredient] = useState([]);
     const[activeTab,setActiveTab] = useState([]);
     const changeTab = (tab) => {
        setActiveTab(tab);
    };

    // const getIngredient = async() => {
    //     try {
    //         const response = await fetch("http://localhost:5000/manager");
    //         const jsonData = await response.json();

    //         setIngredient(jsonData);

    //         // console.log(jsonData);
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // } 
    
    // useEffect(() => {
    //     getIngredient();
    // },[]);

    // return (
    //     <div className='manager-wrap'>
    //         {/* {staff.map(my_staff => (
    //             <p>{my_staff.name} | {my_staff.email}</p>
    //         ))} */}
    //         {ingredient.map(my_ingredient => (
    //             <p>{my_ingredient.ingredient_id} | {my_ingredient.name} | {my_ingredient.stock_level} | {my_ingredient.restock_date} | {my_ingredient.supplier}</p>
    //         ))}
    //     </div>
    // )
    return (
        <div className='manager-wrap'>
            <div className="navbar-container">
            <ul className="navbar">
                <li className={activeTab === 'ingredient' ? 'active' : ''} onClick={() => changeTab('ingredient')}>Inventory</li>
                <li className={activeTab === 'menu' ? 'active' : ''} onClick={() => changeTab('menu')}>Menu</li>
                <li className={activeTab === 'order-history' ? 'active' : ''} onClick={() => changeTab('order-history')}>Order History</li>
                <li className={activeTab === 'reports' ? 'active' : ''} onClick={() => changeTab('order-history')}>Reports</li>
            </ul>
            </div>
            <div className="tab-content">
                {activeTab === 'ingredient' && <Ingredient />}
                {activeTab === 'menu' && <Menu />}
                {activeTab === 'order-history' && <OrderHistory />}
                {activeTab === 'reports' && <Reports />}
            </div>
        </div>
    )
};

export default Manager;