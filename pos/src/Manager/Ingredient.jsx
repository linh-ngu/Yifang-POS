// import React, { Component } from 'react';
// // import jdbcpostgreSQL from './jdbcpostgreSQL'; // You should import your JDBC code
import '../styles/IngredientStyles.css'; // Include your custom CSS file
// import { useState } from 'react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Manager.css'

// class Ingredient extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         ingredients: [],
//     //     };
//     // }
//     const[ingredient, setIngredient] = useState([]);

//     componentDidMount() {
//         this.loadTable();
//     }

//     loadTable = () => {
//         // Fetch data from your database using jdbcpostgreSQL
//         // Update the state with the retrieved data
//         // Example:
//         const ingredientsData = [
//             // Replace this array with the data you fetch from the database
//             {
//                 id: '1',
//                 name: 'Ingredient 1',
//                 stock_level: '10',
//                 restock_date: '2023-11-01',
//                 supplier: 'Supplier A',
//             },
//             // Add more objects as needed
//         ];
//         this.setState({ ingredients: ingredientsData });
//     }

//     render() {
        // return (
        //     <div className="ingredient-container">
        //         <table className="ingredient-table">
        //             <thead>
        //                 <tr>
        //                     <th>Ingredient ID</th>
        //                     <th>Name</th>
        //                     <th>Stock Level</th>
        //                     <th>Restock Date</th>
        //                     <th>Supplier</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {this.state.ingredients.map((ingredient, index) => (
        //                     <tr key={index}>
        //                         <td>{ingredient.id}</td>
        //                         <td>{ingredient.name}</td>
        //                         <td>{ingredient.stock_level}</td>
        //                         <td>{ingredient.restock_date}</td>
        //                         <td>{ingredient.supplier}</td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //         <button className="add-button">Add Ingredient</button>
        //         <button className="remove-button">Remove Ingredient</button>
        //         <button className="restock-button">Change Restock Date</button>
        //         <button className="supplier-button">Change Supplier</button>
        //         <button className="name-button">Change Name</button>
        //         <button className="stock-button">Change Stock Level</button>
        //     </div>
        // );
//     }
// }

const Ingredient = () => {
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
        <div className="ingredient-container">
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
            <button className="add-button">Add Ingredient</button>
            <button className="remove-button">Remove Ingredient</button>
            <button className="restock-button">Change Restock Date</button>
            <button className="supplier-button">Change Supplier</button>
            <button className="name-button">Change Name</button>
            <button className="stock-button">Change Stock Level</button>
        </div>
    )
};

export default Ingredient;
