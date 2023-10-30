import React from "react";
import "../styles/Cashier.css"

class Cashier extends React.Component {
    constructor(props) {
        super(props);
        this.drink = "N/A";
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
            history: [],
            count: 0
        };

        this.customization = (
            <div>
              <p>Customization for: {this.drink}</p>
              {/* Add additional customization content here */}
            </div>
        );

        this.teas = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "sun moon lake black tea")}><p class = "text">sun moon lake black tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "pouchong green tea")}><p class = "text">pouchong green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "songboling mountain tea")}><p class = "text">songboling mountain tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "lugu oolong tea")}><p class = "text">lugu oolong tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "tea w/ original salty cream")}><p class = "text">tea w/ original salty cream</p></button>
                </div>
            </div>
        );

        this.bwsg = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "brown sugar pearl latte")}><p class = "text">brown sugar pearl latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "brown sugar pearl milk tea")}><p class = "text">brown sugar pearl milk tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "brown sugar pearl matcha latte")}><p class = "text">brown sugar pearl matcha latte</p></button>
                </div>
            </div>
        );

        this.milkTea = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "traditional milk tea")}><p class = "text">traditional milk tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "super trio traditional milk tea")}><p class = "text">super trio traditional milk tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "tea latte")}><p class = "text">tea latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "matcha latte")}><p class = "text">matcha latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "peach green milk tea")}><p class = "text">peach green milk tea</p></button>
                </div>
            </div>
        );

        this.fruits = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "avocado mango agar cooler")}><p class = "text">avocado mango agar cooler</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "mango pomelo sago cooler")}><p class = "text">mango pomelo sago cooler</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "yiFang taiwan fruit tea")}><p class = "text">yiFang taiwan fruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "watermelon coconut agar cooler")}><p class = "text">watermelon coconut agar cooler</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "kumquat passion gruit tea")}><p class = "text">kumquat passion gruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "green plum green tea")}><p class = "text">green plum green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "peach fruit tea")}><p class = "text">peach fruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "peach soda pop")}><p class = "text">peach soda pop</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "strawberry fruit tea")}><p class = "text">strawberry fruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "strawberry milk (blended)")}><p class = "text">strawberry milk (blended)</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "yakult fruit tea")}><p class = "text">yakult fruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "passion fruit green tea")}><p class = "text">passion fruit green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "pineapple green tea")}><p class = "text">pineapple green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "wintermelon lemon tea")}><p class = "text">wintermelon lemon tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "lemon mountain tea")}><p class = "text">lemon mountain tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "lemon green tea")}><p class = "text">lemon green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "aiyu jelly lemon tea")}><p class = "text">aiyu jelly lemon tea</p></button>
                </div>
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
        this.taroBean = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "fresh taro latte")}><p class = "text">fresh taro latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "fresh taro green tea latte")}><p class = "text">fresh taro green tea latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "sweet taro sago latte")}><p class = "text">sweet taro sago latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "red bean black glutinous rice with coconut latte")}><p class = "text">red bean black glutinous rice with coconut latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "red bean sago latte")}><p class = "text">red bean sago latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "red bean match frappe with boba")}><p class = "text">red bean match frappe with boba</p></button>
                </div>
            </div>
        );
        this.traditional = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "super trio wintermelon tea")}><p class = "text">super trio wintermelon tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "wintermelon tea")}><p class = "text">wintermelon tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "wintermelon latte")}><p class = "text">wintermelon latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "grass jelly tea")}><p class = "text">grass jelly tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "black sesame milk")}><p class = "text">black sesame milk</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurr(this.customization, "thai tea")}><p class = "text">thai tea</p></button>
                </div>
            </div>
        );
    }

    handleGoBack = () => {
        this.setState({curr: this.state.history.pop()});
    };

    changeCurr = (newContent, newDrink = "None") => {
        this.state.history.push(this.state.curr);
        if(newDrink !== "None"){
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
            <>
                <div class = "grid-container-out">
                    <div></div>
                    <div>
                        <button onClick={() => this.handleGoBack()}>Back</button>
                        {this.state.curr}
                    </div>
                </div>
            </>

        );
    }
}

export default Cashier;