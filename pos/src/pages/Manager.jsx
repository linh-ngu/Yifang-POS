import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Manager.css'

const Manager = () => {
    const[staff, setStaff] = useState([]);

    const getStaff = async() => {
        try {
            const response = await fetch("http://localhost:5000/manager");
            const jsonData = await response.json();

            setStaff(jsonData);

            // console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    } 
    
    useEffect(() => {
        getStaff();
    },[]);

    return (
        <div className='manager-wrap'>
            {staff.map(my_staff => (
                <p>{my_staff.name} | {my_staff.email}</p>
            ))}
        </div>
    )
};

export default Manager;