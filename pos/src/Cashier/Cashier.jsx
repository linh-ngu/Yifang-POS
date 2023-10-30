import React from "react";
import "../styles/Cashier.css"

class Cashier extends React.Component {
    constructor(props) {
        super(props);
        this.drink = "huh";
        this.home = 
                <div class = "grid-container-in">
                    <div>
                        <button class = "button"  onClick={() => this.changeCurr(this.teas)}><p class = "text">Teas</p></button>
                    </div>
                    <div>
                        <button class = "button"  onClick={() => this.changeCurr(this.bwsg)}><p class = "text">Brown Sugar</p></button>
                    </div>
                    <div>
                        <button class = "button"  onClick={() => this.changeCurr(this.milkTea)}><p class = "text">Milk Tea</p></button>
                    </div>
                    <div>
                        <button class = "button"  onClick={() => this.changeCurr(this.fruits)}><p class = "text">Fruits</p></button>
                    </div>
                    <div>
                        <button class = "button"  onClick={() => this.changeCurr(this.sugarcane)}><p class = "text">Fresh Sugarcane</p></button>
                        {/* <Category name = "Fresh Sugarcane" onClick={() => this.changeCurr(this.sugarcane)}/> */}
                    </div>
                    <div>
                        <button class = "button"  onClick={() => this.changeCurr(this.taroBean)}><p class = "text">Fresh Taro/Red Bean</p></button>
                    </div>
                    <div>
                        <button class = "button"  onClick={() => this.changeCurr(this.traditional)}><p class = "text">Traditional</p></button>
                    </div>
                </div>;

        this.state = {
            staffId: props.staffId,
            curr: this.home,
        };

        this.customization = (
            <div>
              <p>Customization for: {this.drink}</p>
              {/* Add additional customization content here */}
            </div>
        );

        this.sugarcane =(
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "sugarcane mountain tea")}><p class = "text">sugarcane mountain tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "sugarcane lemon mountain tea")}><p class = "text">sugarcane lemon mountain tea</p></button>
                </div>
            </div>
        );
    }

    changeCurr = (newContent, newDrink = "None") => {
        if(newDrink != "None"){
            this.drink = newDrink;
            this.customization = (
                <div>
                <p>Customization for: {this.drink}</p>
                {/* Add additional customization content here */}
                </div>
            );
            newContent = this.customization;
        }

        this.setState({ curr: newContent });
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