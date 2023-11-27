import React from 'react'
import { useState } from 'react';
import '../styles/Manager.css'
import Ingredient from '../components/Ingredient';
import Menu from '../components/Menu';
import OrderHistory from '../components/OrderHistory';
import Reports from '../components/Report';

const Manager = () => {
     //const[ingredient, setIngredient] = useState([]);
     const[activeTab,setActiveTab] = useState([]);
     const changeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='manager-wrap'>
            <div className="navbar-container">
            <ul className="manager-navbar">
                <li className={activeTab === 'ingredient' ? 'active' : ''} onClick={() => changeTab('ingredient')}>Inventory</li>
                <li className={activeTab === 'menu' ? 'active' : ''} onClick={() => changeTab('menu')}>Menu</li>
                <li className={activeTab === 'order-history' ? 'active' : ''} onClick={() => changeTab('order-history')}>Order History</li>
                <li className={activeTab === 'reports' ? 'active' : ''} onClick={() => changeTab('reports')}>Reports</li>
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