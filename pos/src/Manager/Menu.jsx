import React, { Component } from 'react';
// import jdbcpostgreSQL from './jdbcpostgreSQL';
import { useEffect } from 'react';
import { useState } from 'react';
// import './MenuStyles.css';
import '../styles/IngredientStyles.css';

// class Menu extends Component {
//   constructor() {
//     super();
//     this.state = {
//       drink_id_list: [],
//       name_list: [],
//       price_list: [],
//       ingredients_list: [],
//     };
//   }

//   componentDidMount() {
//     this.loadTable();
//   }

//   loadTable() {
//     // Fetch data from your backend and update state
//     // Example:
//     // const data = fetchDataFromDatabase();
//     // this.setState({
//     //   drink_id_list: data.drink_id_list,
//     //   name_list: data.name_list,
//     //   price_list: data.price_list,
//     //   ingredients_list: data.ingredients_list,
//     // });
//   }

//   render() {
//     return (
      // <div>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>Drink ID</th>
      //         <th>Name</th>
      //         <th>Price</th>
      //         <th>Ingredients List</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {this.state.drink_id_list.map((drinkId, index) => (
      //         <tr key={index}>
      //           <td>{drinkId}</td>
      //           <td>{this.state.name_list[index]}</td>
      //           <td>{this.state.price_list[index]}</td>
      //           <td>{this.state.ingredients_list[index]}</td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      //   <div>
      //     <button onClick={this.addDrinks}>Add</button>
      //     <button onClick={this.removeDrinks}>Remove</button>
      //     <button onClick={this.changeName}>Name</button>
      //     <button onClick={this.changePrice}>Price</button>
      //     <button onClick={this.changeIngredients}>Ingredients</button>
      //   </div>
      // </div>
//     );
//   }

  // addDrinks = () => {
  //   // Implement the add drink logic here
  // };

  // removeDrinks = () => {
  //   // Implement the remove drink logic here
  // };

  // changeName = () => {
  //   // Implement the change name logic here
  // };

  // changePrice = () => {
  //   // Implement the change price logic here
  // };

  // changeIngredients = () => {
  //   // Implement the change ingredients logic here
  // };
// }
const Menu = () => {
  const[menu, setMenu] = useState([]);

  const getMenu = async() => {
      try {
          const response = await fetch("http://localhost:5000/manager/menu");
          const jsonData = await response.json();

          setMenu(jsonData);

          console.log(jsonData);
      } catch (err) {
          console.error(err.message);
      }
  } 
  
  useEffect(() => {
      getMenu();
  },[]);

  const addDrinks = () => {
    console.log("hi");
  };
  
  return (
    <div className="ingredient-container">
            <table className="ingredient-table">
                <thead>
                    <tr>
                      <th>Drink ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Ingredients List</th>
                    </tr>
                </thead>
                <tbody>
                {menu.map((base_drink, index) => (
                  <tr key={index}>
                      <td>{base_drink.base_id}</td>
                      <td>{base_drink.name}</td>
                      <td>{base_drink.price}</td>
                      <td>{base_drink.list_ingredients}</td>
                  </tr>
                ))}
                </tbody>
            </table>
              <button onClick={addDrinks}>Add</button>
              <button>Remove</button>
              <button>Name</button>
              <button>Price</button>
              <button>Ingredients</button>
        </div>
    // <div>
    //   {menu.map(base_drink => (
    //     <p>{base_drink.base_id} | {base_drink.name} | {base_drink.price} | {base_drink.list_ingredients}</p>
    //   ))}
    // </div>

  )
};

export default Menu;
