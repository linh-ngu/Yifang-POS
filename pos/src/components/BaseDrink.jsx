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
      const response = await fetch("http://localhost:5000/cashier");
      const jsonData = await response.json();

      this.setState({ menu: jsonData });

      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  findPrice = (name) => {
    const { menu } = this.state;
    var new_name = "tea latte";
    const foundRow = menu.find(row => row.name === new_name);
    // console.log("hello");
    // console.log("FOUNDROW: " + foundRow);
    // console.log("ROWNAME: " + menu.find(row => row.base_id == 1).name);
    // console.log("NAME: " + name);

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
