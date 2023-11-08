import React from "react";
import "../styles/Cashier.css"

class Cashier extends React.Component {
    constructor(props) {
        super(props);
        this.drink = "N/A";
        this.qty = 1;

        this.order_table = [];

        this.home_table = 
            <div>
            <table>
                <thead>
                    <tr>
                    <th style={{ paddingLeft: "40%", paddingTop: "15%"}}>Name</th>
                    <th style={{ paddingLeft: "60%", paddingTop: "15%" }}>Qty</th>
                    <th style={{ paddingLeft: "75%", paddingTop: "15%"}}>Each</th>
                    <th style={{ paddingLeft: "90%", paddingTop: "15%" }}>Total</th>
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
            </div>;
        
        this.home_price = 
        <div> 
            <div class = "grid-container-topping">
                <div>
                    Subtotal:
                </div>
                <div>
                    0.00
                </div>
                <div>
                    Tax:
                </div>
                <div>
                    0.00
                </div>
                <div>
                    Tips:
                </div>
                <div>
                    0.00
                </div>
                <div>
                    Balance Due:
                </div>
                <div>
                    0.00
                </div>
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
            curr_table: this.home_table,
            curr_price: this.home_price,
            history_right: [],
            history_left:[],
        };

        this.customization = (
            <div>
              <p>Customization for: {this.drink}</p>
            </div>
        );

        this.teas = (
            <>
            <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
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
            </>
        );

        this.bwsg = (
            <>
            <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
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
            </>
        );

        this.milkTea = (
            <>
            <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
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
            </>
        );

        this.fruits = (
            <>
            <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
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
            </>
        );

        this.sugarcane =(
            <>
            <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
            <div class = "grid-container-in">
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "sugarcane mountain tea")}><p>sugarcane mountain tea</p></button>
                </div>
                <div>
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, "sugarcane lemon mountain tea")}><p>sugarcane lemon mountain tea</p></button>
                </div>
            </div>
            </>
        );

        this.taroBean = (
            <>
            <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
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
            </>
        );

        this.traditional = (
            <>
            <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
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
            </>
        );
    }

    handleGoBack = () => {
        if(this.state.history_right.length > 0){
            this.setState({curr_right: this.state.history_right.pop()});
        }
    };
    
    saveDrink = () => {
        // EDIT THIS AFTER CONNECTION WITH DATABASE
        this.order_table.push({drinkId: 0, drinkName: this.drink, Qty: this.qty, Each: 5.75, Total: 5.75*this.qty});
        this.changeCurrTable();
        this.changeCurrPrice(5.75);
        this.setState({curr_right: this.state.history_right.pop()});
    }

    changeCurrTable = () => {
        this.home_table =  (
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
        </div>);

        this.setState({ curr_table: this.home_table });
    }

    changeCurrPrice = (price) => {
        this.home_price = (
        <div> 
            <div class = "grid-container-topping">
                <div>
                    Subtotal:
                </div>
                <div>
                    {price.toFixed(2)}
                </div>
                <div>
                    Tax:
                </div>
                <div>
                    {(price * 0.075).toFixed(2)}
                </div>
                <div>
                    Tips:
                </div>
                <div>
                    0.00
                </div>
                <div>
                    Balance Due:
                </div>
                <div>
                    {(price *(1+ 0.075)).toFixed(2)}
                </div>
            </div>
        </div>);

        this.setState({curr_price: this.home_price});
    }

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
                        Qty <input type="number" style={{width:"40px", height:"10px"}}></input>
                    </div>

                    <div style={{textAlign:"right", paddingRight:"10%"}}>
                        <button class = "button-small" onClick={() => this.saveDrink()}> Save </button>
                    </div>
                </div>
            );
            newContent = this.customization;
        }

        this.setState({ curr_right: newContent });
    }

    payOrder = () => {
        this.order_table = [] //clear table
        this.changeCurrTable();
        this.changeCurrPrice(0);
    }

    render() {
        return (
            <>
                <div class = "grid-container-out">
                    <div>
                    <div class = "grid-container-left">
                        <div>
                            {this.state.curr_table}
                        </div>
                        <div> 
                            {this.state.curr_price}
                            <div style = {{textAlign:"right", paddingRight:"10%"}}>
                                <button class = "button-small" onClick={() => this.payOrder()}>Pay Now</button>
                            </div>
                        </div>
                    </div>;
                    </div>
                    <div>
                        {this.state.curr_right}
                    </div>
                </div>
            </>

        );
    }
}

export default Cashier;