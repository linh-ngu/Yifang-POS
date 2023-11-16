import React from "react";
import "../styles/Cashier.css"
import BaseDrink from "../components/BaseDrink";

class Cashier extends React.Component {
    
    constructor(props) {
        super(props);

        // to store drink info from database
        this.base = new BaseDrink();
        this.totPrice = 0;
        this.drinkId = 0;
        this.drink = "N/A";
        this.qty = 0;
        this.price = 0;
        this.ingredients = []
        this.drinks = []

        // to display ordered items
        this.orderTable = [];

        this.homeTable = 
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
                    {this.orderTable.map((item) => (
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

        // to display order items prices
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

        //to display drink buttons on the right side of the screen
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
        
        // states stored to tab between displays (and back)
        this.state = {
            staffId: props.staffId,
            curr_right: this.home_right,
            curr_table: this.homeTable,
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
                    <button class = "button"  onClick={() => this.changeCurrRight(this.customization, 'sun moon lake black tea')}><p>sun moon lake black tea</p></button>
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

    handleQtyChange = (event) => {
        // Update the state with the new input value
        this.qty = event.target.value;
    };

    handleToppingChange = (name, event) => {
        if(!event.target.checked){
            var index = this.ingredients.indexOf(name);
            
            if(index !== -1){
                this.ingredients.splice(index, 1);
                this.price -= .75;
            }
        }
        else{
            this.ingredients.push(name);
            this.price += .75;
        }
    }
    
    saveDrink = async () => {
        // EDIT THIS AFTER CONNECTION WITH DATABASE
        if(this.qty > 0){
            // console.log("...about to get menu");
            await this.base.getMenu();

            console.log("...finished getting menu");
            this.price += this.base.findPrice(this.drink);

            console.log(this.drink);
            console.log("This is price: " + this.price);

            this.totPrice += this.price*this.qty;
            this.orderTable.push({drinkId: this.drinkId, drinkName: this.drink, Qty: this.qty, Each: this.price, Total: this.price*this.qty});
            this.changeCurrTable();
            this.changeCurrPrice();
            this.setState({curr_right: this.state.history_right.pop()});
        }

        // reset values
        this.drinkId = 0;
        this.drink = "N/A";
        this.price = 0;
        this.qty = 0;
        this.ingredients = [];
    }

    changeCurrTable = () => {
        this.homeTable =  (
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
                {this.orderTable.map((item) => (
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

        this.setState({ curr_table: this.homeTable });
    }

    changeCurrPrice = () => {
        this.home_price = (
        <div> 
            <div class = "grid-container-topping">
                <div>
                    Subtotal:
                </div>
                <div>
                    {this.totPrice.toFixed(2)}
                </div>
                <div>
                    Tax:
                </div>
                <div>
                    {(this.totPrice * 0.075).toFixed(2)}
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
                    {(this.totPrice*(1+ 0.075)).toFixed(2)}
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
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("boba", event)}></input>
                    </div>
                    <div>
                        Lychee Coconut Jelly 
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("lychee coconut jelly", event)}></input>
                    </div>
                    <div>
                        Sago 
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("sago", event)}></input>
                    </div>
                    <div>
                        Aiyu
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("aiyu", event)}></input>
                    </div>
                    <div>
                        Agar Boba
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("agar boba", event)}></input>
                    </div>
                    <div>
                        Aloe Vera
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("aloe vera", event)}></input>
                    </div>
                    <div>
                        Cheese Foam
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("cheese foam", event)}></input>
                    </div>
                    <div>
                        Red Bean
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("red bean", event)}></input>
                    </div>
                    <div>
                        Black Glutinous Rice
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("black glutinous rice", event)}></input>
                    </div>
                    <div>
                        Grass Jelly
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("grass jelly", event)}></input>
                    </div>
                    <div>
                        Taro Mochi
                    </div>
                    <div>
                        <input type = "checkbox" onChange={(event) => this.handleToppingChange("Taro Mochi", event)}></input>
                    </div>
                </div>
                    <div style={{textAlign: "center"}}>
                        Qty <input type="number" style={{width:"50px", height:"30px",  border:"2px solid #ccc", borderRadius:"3px"}} onChange={this.handleQtyChange}></input>
                    </div>

                    <div style = {{float: "left", paddingLeft:"10%", display:"inline-block"}}>
                        <button class = "button-small" onClick={() => this.handleGoBack()}>Back</button>
                    </div>

                    <div style={{float:"right", paddingRight:"10%", display:"inline-block"}}>
                        <button class = "button-small" onClick={() => this.saveDrink()}> Save </button>
                    </div>
                </div>
            );
            newContent = this.customization;
        }

        this.setState({ curr_right: newContent });
    }

    payOrder = () => {
        this.totPrice = 0;
        this.orderTable = [] //clear table
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