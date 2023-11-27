import React, { Component } from 'react';

class BaseDrink extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    this.getMenu();
  }

  getMenu = async () => {
    try {
      const response = await fetch("https://yifang-backend.onrender.com/cashier");
      const jsonData = await response.json();

      console.log("...getting menu");
      this.setState({ menu: jsonData });
      this.state.menu = jsonData;

      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  findPrice = (name) => {
    const { menu } = this.state;
    // var new_name = "tea latte";
    console.log(menu);
    const foundRow = menu.find(row => row.name === name);
    console.log("FOUNDROW: " + foundRow);

    if (foundRow) {
        console.log("hello");
        console.log(foundRow.name);
        return foundRow.price;
    } else if (menu === null) {
        return -2;
    }
    return -3;
  };

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Drink ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Ingredients List</th>
            </tr>
          </thead>
          <tbody>
            {this.state.menu.map((base_drink, index) => (
              <tr key={index}>
                <td>{base_drink.base_id}</td>
                <td>{base_drink.name}</td>
                <td>{base_drink.price}</td>
                <td>{base_drink.list_ingredients}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BaseDrink;
