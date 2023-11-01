import React from "react";
import "../styles/Cashier.css"

class Cashier extends React.Component {
    constructor(props) {
        super(props);
        this.drink = "N/A";

        this.order_table = [
            {drinkId: 2, drinkName: "sugarcane lemon mountain tea", Qty: 2, Each: 5.75, Total: 11.50 },
             {drinkId: 2, drinkName: "sugarcane lemon mountain tea", Qty: 2, Each: 5.75, Total: 11.50 },
        ];

        this.home_left = 
            <div class = "grid-container-in">
                <div>
                <table>
                    <thead>
                        <tr>
                        <th style={{ paddingLeft: "40%" }}s>Name</th>
                        <th style={{ paddingLeft: "60%" }}>Qty</th>
                        <th style={{ paddingLeft: "75%" }}>Each</th>
                        <th style={{ paddingLeft: "90%" }}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.order_table.map((item) => (
                        <tr key={item.drinkId}>
                            <td style={{ width:"auto", marginLeft: "5%", textAlign:"center" }}>{item.drinkName}</td>
                            <td style={{ paddingLeft: "60%", textAlign:"center" }}>{item.Qty}</td>
                            <td style={{ paddingLeft: "75%", textAlign:"center" }}>{item.Each}</td>
                            <td style={{ paddingLeft: "90%", textAlign:"center" }}>{item.Total}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                <div> {/*price breakdown*/}

                </div>
            </div>;

        this.home_right = 
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.teas)}><p>Teas</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.bwsg)}><p>Brown Sugar</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.milkTea)}><p>Milk Tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.fruits)}><p>Fruits</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.sugarcane)}><p>Fresh Sugarcane</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.taroBean)}><p>Fresh Taro/Red Bean</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.traditional)}><p>Traditional</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.traditional)}><p>Seasonal</p></button>
                </div>
            </div>;

        this.state = {
            staffId: props.staffId,
            curr_right: this.home_right,
            curr_left: this.home_left,
            history_right: [],
            history_left:[],
        };

        this.customization = (
            <div>
              <p>Customization for: {this.drink}</p>
              <div class = "grid-container-topping">
                <div>
                    
                    <input type = "checkbox">Boba
                    </input>
                </div>

              </div>
            </div>
        );

        this.teas = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "sun moon lake black tea")}><p>sun moon lake black tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "pouchong green tea")}><p>pouchong green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "songboling mountain tea")}><p>songboling mountain tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "lugu oolong tea")}><p>lugu oolong tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "tea w/ original salty cream")}><p>tea w/ original salty cream</p></button>
                </div>
            </div>
        );

        this.bwsg = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "brown sugar pearl latte")}><p>brown sugar pearl latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "brown sugar pearl milk tea")}><p>brown sugar pearl milk tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "brown sugar pearl matcha latte")}><p>brown sugar pearl matcha latte</p></button>
                </div>
            </div>
        );

        this.milkTea = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "traditional milk tea")}><p>traditional milk tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "super trio traditional milk tea")}><p>super trio traditional milk tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "tea latte")}><p>tea latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "matcha latte")}><p>matcha latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "peach green milk tea")}><p>peach green milk tea</p></button>
                </div>
            </div>
        );

        this.fruits = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "avocado mango agar cooler")}><p>avocado mango agar cooler</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "mango pomelo sago cooler")}><p>mango pomelo sago cooler</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "yiFang taiwan fruit tea")}><p>yiFang taiwan fruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "watermelon coconut agar cooler")}><p>watermelon coconut agar cooler</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "kumquat passion gruit tea")}><p>kumquat passion gruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "green plum green tea")}><p>green plum green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "peach fruit tea")}><p>peach fruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "peach soda pop")}><p>peach soda pop</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "strawberry fruit tea")}><p>strawberry fruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "strawberry milk (blended)")}><p>strawberry milk (blended)</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "yakult fruit tea")}><p>yakult fruit tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "passion fruit green tea")}><p>passion fruit green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "pineapple green tea")}><p>pineapple green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "wintermelon lemon tea")}><p>wintermelon lemon tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "lemon mountain tea")}><p>lemon mountain tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "lemon green tea")}><p>lemon green tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "aiyu jelly lemon tea")}><p>aiyu jelly lemon tea</p></button>
                </div>
            </div>
        );

        this.sugarcane =(
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "sugarcane mountain tea")}><p>sugarcane mountain tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "sugarcane lemon mountain tea")}><p>sugarcane lemon mountain tea</p></button>
                </div>
            </div>
        );
        this.taroBean = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "fresh taro latte")}><p>fresh taro latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "fresh taro green tea latte")}><p>fresh taro green tea latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "sweet taro sago latte")}><p>sweet taro sago latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "red bean black glutinous rice with coconut latte")}><p>red bean black glutinous rice with coconut latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "red bean sago latte")}><p>red bean sago latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "red bean match frappe with boba")}><p>red bean match frappe with boba</p></button>
                </div>
            </div>
        );
        this.traditional = (
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "super trio wintermelon tea")}><p>super trio wintermelon tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "wintermelon tea")}><p>wintermelon tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "wintermelon latte")}><p>wintermelon latte</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "grass jelly tea")}><p>grass jelly tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "black sesame milk")}><p>black sesame milk</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "thai tea")}><p>thai tea</p></button>
                </div>
            </div>
        );
    }

    handleGoBack = () => {
        if(this.state.history_right.length > 0){
            this.setState({curr_right: this.state.history_right.pop()});
        }
    };


    changeCurrRight = (newContent, newDrink = "None") => {
        this.state.history_right.push(this.state.curr_right);
        if(newDrink !== "None"){
            this.drink = newDrink;
            this.customization = (
                <div>
                <p style={{textAlign: "center"}}>{this.drink}</p>
                <div class = "grid-container-topping">
                    <div>
                        Boba 
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Lychee Coconut Jelly 
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Sago 
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Aiyu
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Agar Boba
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Aloe Vera
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Cheese Foam
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Red Bean
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Black Glutinous Rice
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Grass Jelly
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                    <div>
                        Taro Mochi
                    </div>
                    <div>
                        <input type = "checkbox"></input>
                    </div>
                </div>
                    <div style={{textAlign: "center"}}>
                        Qty <input type="number" style={{width:"25px", height:"5px"}}></input>
                    </div>

                    <div style={{textAlign:"right", paddingRight:"10%"}}>
                        <button class = "button-small"> Save </button>
                    </div>
                </div>
            );
            newContent = this.customization;
        }

        this.setState({ curr_right: newContent });
    }

    render() {
        return (
            <>
                <div class = "grid-container-out">
                    <div>
                        {this.state.curr_left}
                    </div>
                    <div>
                        <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
                        {this.state.curr_right}
                    </div>
                </div>
            </>

        );
    }
}

export default Cashier;