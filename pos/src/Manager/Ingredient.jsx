// import React, { Component } from 'react';
// import jdbcpostgreSQL from './jdbcpostgreSQL'; // You should import your JDBC code
// import './IngredientStyles.css'; // Include your custom CSS file

// class Ingredient extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             ingredients: [],
//         };
//     }

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
//         return (
//             <div className="ingredient-container">
//                 <table className="ingredient-table">
//                     <thead>
//                         <tr>
//                             <th>Ingredient ID</th>
//                             <th>Name</th>
//                             <th>Stock Level</th>
//                             <th>Restock Date</th>
//                             <th>Supplier</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.ingredients.map((ingredient, index) => (
//                             <tr key={index}>
//                                 <td>{ingredient.id}</td>
//                                 <td>{ingredient.name}</td>
//                                 <td>{ingredient.stock_level}</td>
//                                 <td>{ingredient.restock_date}</td>
//                                 <td>{ingredient.supplier}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <button className="add-button">Add Ingredient</button>
//                 <button className="remove-button">Remove Ingredient</button>
//                 <button className="restock-button">Change Restock Date</button>
//                 <button className="supplier-button">Change Supplier</button>
//                 <button className="name-button">Change Name</button>
//                 <button className="stock-button">Change Stock Level</button>
//             </div>
//         );
//     }
// }

// export default Ingredient;
