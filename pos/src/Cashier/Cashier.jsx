import Category from "./order_home";
import React from "react";
import "./Cashier.css"

class Cashier extends React.Component {
    constructor(props) {
        super(props);
        this.home = 
                <div class = "grid-container-in">
                    <div>
                        <Category name = "Teas"/>
                    </div>
                    <div>
                        <Category name = "Brown Sugar"/>
                    </div>
                    <div>
                        <Category name = "Milk Tea"/>
                    </div>
                    <div>
                        <Category name = "Fruits"/>
                    </div>
                    <div>
                        <Category name = "Fresh Sugarcane" onClick={this.changeCurr(this.sugarcane)}/>
                    </div>
                    <div>
                        <Category name = "Fresh Taro/Red Bean"/>
                    </div>
                    <div>
                        <Category name = "Traditional"/>
                    </div>
                </div>;

        this.sugarcane =
            <div class = "grid-container-in">
                    <div>
                        <Category name = "sugarcane mountain tea"/>
                    </div>
                    <div>
                        <Category name = "sugarcane lemon monutain tea"/>
                    </div>
                </div>;
        this.state = {
            staffId: props.staffId,
            curr: this.home

        };
    }

    changeCurr = (props) => {
        this.setState({props});
    }

    render() {
        return (
            <div class = "grid-container-out">
                <div></div>
                <div>{this.state.curr}</div>
            </div>

        );
    }
}

export default Cashier;