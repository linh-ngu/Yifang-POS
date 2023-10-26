import React from 'react';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

  render() {
    return <button type = "button">{this.state.name}</button>;
  }
}

export default Category;