import React from 'react';
import "./order_home.css";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

  render() {
    return <button class = "button"><p class = "text">{this.state.name}</p></button>;
  }
}

export default Category;