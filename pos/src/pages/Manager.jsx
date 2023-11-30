import React from 'react'
import { useState } from 'react';
import Ingredient from '../components/Ingredient';
import Menu from '../components/Menu';
import OrderHistory from '../components/OrderHistory';
import Reports from '../components/Report';

const Manager = () => {
     //const[ingredient, setIngredient] = useState([]);
     const[activeTab, setActiveTab] = useState([]);
     const changeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='absolute w-full top-[150px]'>
            <div className='flex justify-center items-center'>
                <ul className='flex justify-center p-4 border border-black rounded-lg'>
                    <li className='border p-2 mx-2 rounded-lg border-black cursor-pointer' onClick={() => changeTab('ingredient')}>Inventory</li>
                    <li className='border p-2 mx-2 rounded-lg border-black cursor-pointer' onClick={() => changeTab('menu')}>Menu</li>
                    <li className='border p-2 mx-2 rounded-lg border-black cursor-pointer' onClick={() => changeTab('order-history')}>Order History</li>
                    <li className='border p-2 mx-2 rounded-lg border-black cursor-pointer' onClick={() => changeTab('reports')}>Reports</li>
                </ul>
            </div>
            <div className='m-8'>
                {activeTab === 'ingredient' && <Ingredient />}
                {activeTab === 'menu' && <Menu />}
                {activeTab === 'order-history' && <OrderHistory />}
                {activeTab === 'reports' && <Reports />}
            </div>
        </div>
    )
};

export default Manager;