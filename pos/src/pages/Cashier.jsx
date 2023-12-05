import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "../styles/Cashier.css"
import BaseDrink from "../components/BaseDrink";   
import Tips from "../components/Tips";          

class Cashier extends React.Component {

    componentDidMount() {
        this.getOrder_id();
    }

    constructor(props) {
        super(props);

        // to store drink info from database
        this.base = new BaseDrink();
        this.tipMenu = <Tips onClose={this.handleShowTips} onConfirm={this.handleConfirm}/>;
        this.totPrice = 0;
        this.tips = 0;
        this.drinkId = 0;
        this.drink = "N/A";
        this.qty = 0;
        this.price = 0;
        this.ingredients = []
        this.drinks = []
        this.order_id = this.getOrder_id();
        this.staff_id = 9;
        // this.transaction_date = new Date().toLocaleDateString();
        this.transaction_date = new Date().toISOString().split('T')[0];
        this.payment_method = "Card";
        this.payment_amount = 5;
        this.timestamp = new Date().toLocaleTimeString('en-GB');

        // to display ordered items
        this.orderTable = [];

        this.homeTable = 
            <div>
            <table>
                <div className="flex justify-between w-[35vw]">
                    <p className="p-7 font-bold">Name</p>
                    <div className="flex">
                        <p className="p-7 font-bold">Qty</p>
                        <p className="p-7 font-bold">Each</p>
                        <p className="p-7 font-bold">Total</p>
                    </div>
                </div>
                </table>
            </div>;

        // to display order items prices
        this.home_price = 
        <div> 
            <div className= "grid-container-topping">
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
            <div className= "grid-container-in">
                <div>
                    <button aria-label="Teas" className = "button"  onClick={() => this.changeCurrRight(this.teas)}><p>Teas</p></button>
                </div>
                <div>
                    <button aria-label="Brown Sugar" className = "button"  onClick={() => this.changeCurrRight(this.bwsg)}><p>Brown Sugar</p></button>
                </div>
                <div>
                    <button aria-label="Milk Tea" className = "button"  onClick={() => this.changeCurrRight(this.milkTea)}><p>Milk Tea</p></button>
                </div>
                <div>
                    <button aria-label="Fruits" className = "button"  onClick={() => this.changeCurrRight(this.fruits)}><p>Fruits</p></button>
                </div>
                <div>
                    <button aria-label="Fresh Sugarcane" className = "button"  onClick={() => this.changeCurrRight(this.sugarcane)}><p>Fresh Sugarcane</p></button>
                </div>
                <div>
                    <button aria-label="Fresh Taro or Red Bean" className = "button"  onClick={() => this.changeCurrRight(this.taroBean)}><p>Fresh Taro/Red Bean</p></button>
                </div>
                <div>
                    <button aria-label="Traditional" className = "button"  onClick={() => this.changeCurrRight(this.traditional)}><p>Traditional</p></button>
                </div>
                <div>
                    <button aria-label="Seasonal" className = "button"  onClick={() => this.changeCurrRight(this.traditional)}><p>Seasonal</p></button>
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
            showTips: false,
        };

        this.customization = (
            <div>
              <p>Customization for: {this.drink}</p>
            </div>
        );

        this.teas = (
            <>
            <button aria-label="Back" className= "button-small" onClick={() => this.handleGoBack()}>Back</button>
            <div className= "grid-container-in">
                <div>
                    <button aria-label="sun moon lake black tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, 'sun moon lake black tea')}><p>sun moon lake black tea</p></button>
                </div>
                <div>
                    <button aria-label="pouchong green tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "pouchong green tea")}><p>pouchong green tea</p></button>
                </div>
                <div>
                    <button aria-label="songboling mountain tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "songboling mountain tea")}><p>songboling mountain tea</p></button>
                </div>
                <div>
                    <button aria-label="lugu oolong tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "lugu oolong tea")}><p>lugu oolong tea</p></button>
                </div>
                <div>
                    <button aria-label="tea w/ original salty cream" className= "button"  onClick={() => this.changeCurrRight(this.customization, "tea w/ original salty cream")}><p>tea w/ original salty cream</p></button>
                </div>
            </div>
            </>
        );

        this.bwsg = (
            <>
            <button aria-label="Back" className= "button-small" onClick={() => this.handleGoBack()}>Back</button>
            <div className= "grid-container-in">
                <div>
                    <button aria-label="brown sugar pearl latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "brown sugar pearl latte")}><p>brown sugar pearl latte</p></button>
                </div>
                <div>
                    <button aria-label="brown sugar pearl milk tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "brown sugar pearl milk tea")}><p>brown sugar pearl milk tea</p></button>
                </div>
                <div>
                    <button aria-label="brown sugar pearl matcha latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "brown sugar pearl matcha latte")}><p>brown sugar pearl matcha latte</p></button>
                </div>
            </div>
            </>
        );

        this.milkTea = (
            <>
            <button aria-label="Back" className= "button-small" onClick={() => this.handleGoBack()}>Back</button>
            <div className= "grid-container-in">
                <div>
                    <button aria-label="traditional milk tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "traditional milk tea")}><p>traditional milk tea</p></button>
                </div>
                <div>
                    <button aria-label="super trio traditional milk tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "super trio traditional milk tea")}><p>super trio traditional milk tea</p></button>
                </div>
                <div>
                    <button aria-label="tea latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "tea latte")}><p>tea latte</p></button>
                </div>
                <div>
                    <button aria-label="matcha latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "matcha latte")}><p>matcha latte</p></button>
                </div>
                <div>
                    <button aria-label="peach green milk tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "peach green milk tea")}><p>peach green milk tea</p></button>
                </div>
            </div>
            </>
        );

        this.fruits = (
            <>
            <button aria-label="Back" className= "button-small" onClick={() => this.handleGoBack()}>Back</button>
            <div className= "grid-container-in">
                <div>
                    <button aria-label="avocado mango agar cooler" className= "button"  onClick={() => this.changeCurrRight(this.customization, "avocado mango agar cooler")}><p>avocado mango agar cooler</p></button>
                </div>
                <div>
                    <button aria-label="mango pomelo sago cooler" className= "button"  onClick={() => this.changeCurrRight(this.customization, "mango pomelo sago cooler")}><p>mango pomelo sago cooler</p></button>
                </div>
                <div>
                    <button aria-label="yiFang taiwan fruit tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "yiFang taiwan fruit tea")}><p>yiFang taiwan fruit tea</p></button>
                </div>
                <div>
                    <button aria-label="watermelon coconut agar cooler" className= "button"  onClick={() => this.changeCurrRight(this.customization, "watermelon coconut agar cooler")}><p>watermelon coconut agar cooler</p></button>
                </div>
                <div>
                    <button aria-label="kumquat passionfruit tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "kumquat passionfruit tea")}><p>kumquat passionfruit tea</p></button>
                </div>
                <div>
                    <button aria-label="green plum green tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "green plum green tea")}><p>green plum green tea</p></button>
                </div>
                <div>
                    <button aria-label="peach fruit tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "peach fruit tea")}><p>peach fruit tea</p></button>
                </div>
                <div>
                    <button aria-label="peach soda pop" className= "button"  onClick={() => this.changeCurrRight(this.customization, "peach soda pop")}><p>peach soda pop</p></button>
                </div>
                <div>
                    <button aria-label="strawberry fruit tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "strawberry fruit tea")}><p>strawberry fruit tea</p></button>
                </div>
                <div>
                    <button aria-label="strawberry milk (blended)" className= "button"  onClick={() => this.changeCurrRight(this.customization, "strawberry milk (blended)")}><p>strawberry milk (blended)</p></button>
                </div>
                <div>
                    <button aria-label="yakult fruit tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "yakult fruit tea")}><p>yakult fruit tea</p></button>
                </div>
                <div>
                    <button aria-label="passionfruit green tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "passionfruit green tea")}><p>passionfruit green tea</p></button>
                </div>
                <div>
                    <button aria-label="pineapple green tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "pineapple green tea")}><p>pineapple green tea</p></button>
                </div>
                <div>
                    <button aria-label="wintermelon lemon tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "wintermelon lemon tea")}><p>wintermelon lemon tea</p></button>
                </div>
                <div>
                    <button aria-label="lemon mountain tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "lemon mountain tea")}><p>lemon mountain tea</p></button>
                </div>
                <div>
                    <button aria-label="lemon green tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "lemon green tea")}><p>lemon green tea</p></button>
                </div>
                <div>
                    <button aria-label="aiyu jelly lemon tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "aiyu jelly lemon tea")}><p>aiyu jelly lemon tea</p></button>
                </div>
            </div>
            </>
        );

        this.sugarcane =(
            <>
            <button aria-label="Back" className= "button-small" onClick={() => this.handleGoBack()}>Back</button>
            <div className= "grid-container-in">
                <div>
                    <button aria-label="sugarcane mountain tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "sugarcane mountain tea")}><p>sugarcane mountain tea</p></button>
                </div>
                <div>
                    <button aria-label="sugarcane lemon mountain tea"  className= "button"  onClick={() => this.changeCurrRight(this.customization, "sugarcane lemon mountain tea")}><p>sugarcane lemon mountain tea</p></button>
                </div>
            </div>
            </>
        );

        this.taroBean = (
            <>
            <button aria-label="Back" className= "button-small" onClick={() => this.handleGoBack()}>Back</button>
            <div className= "grid-container-in">
                <div>
                    <button aria-label="fresh taro latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "fresh taro latte")}><p>fresh taro latte</p></button>
                </div>
                <div>
                    <button aria-label="fresh taro green tea latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "fresh taro green tea latte")}><p>fresh taro green tea latte</p></button>
                </div>
                <div>
                    <button aria-label="sweet taro sago latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "sweet taro sago latte")}><p>sweet taro sago latte</p></button>
                </div>
                <div>
                    <button aria-label="red bean black glutinous rice with coconut latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "red bean black glutinous rice with coconut latte")}><p>red bean black glutinous rice with coconut latte</p></button>
                </div>
                <div>
                    <button aria-label="red bean sago latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "red bean sago latte")}><p>red bean sago latte</p></button>
                </div>
                <div>
                    <button aria-label="red bean matcha frappe with boba" className= "button"  onClick={() => this.changeCurrRight(this.customization, "red bean matcha frappe with boba")}><p>red bean matcha frappe with boba</p></button>
                </div>
            </div>
            </>
        );

        this.traditional = (
            <>
            <button aria-label="Back" className= "button-small" onClick={() => this.handleGoBack()}>Back</button>
            <div className= "grid-container-in">
                <div>
                    <button aria-label="super trio wintermelon tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "super trio wintermelon tea")}><p>super trio wintermelon tea</p></button>
                </div>
                <div>
                    <button aria-label="wintermelon tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "wintermelon tea")}><p>wintermelon tea</p></button>
                </div>
                <div>
                    <button aria-label="wintermelon latte" className= "button"  onClick={() => this.changeCurrRight(this.customization, "wintermelon latte")}><p>wintermelon latte</p></button>
                </div>
                <div>
                    <button aria-label="grass jelly tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "grass jelly tea")}><p>grass jelly tea</p></button>
                </div>
                <div>
                    <button aria-label="black sesame milk" className= "button"  onClick={() => this.changeCurrRight(this.customization, "black sesame milk")}><p>black sesame milk</p></button>
                </div>
                <div>
                    <button aria-label="thai tea" className= "button"  onClick={() => this.changeCurrRight(this.customization, "thai tea")}><p>thai tea</p></button>
                </div>
            </div>
            </>
        );
    }

    handleConfirm = (vals) => {
        this.tips = vals.tips;
        this.payment_method = vals.method;
        this.changeCurrPrice();
    }

    handleShowTips = () => {
        this.setState(prevState => ({ showTips: !prevState.showTips }));
    };

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

    getOrder_id = async() => {
        try {
            const response = await fetch("https://yifang-backend.onrender.com/order/getId");
            const jsonData = await response.json();

            // this.state.order_id = jsonData[0].order_id + 1;

            // setOrder_id(jsonData[0].order_id + 1);
            this.setState({order_id: jsonData[0].order_id + 1});
            console.log(jsonData[0].order_id + 1);
        } catch (err) {
            console.error(err.message);
        }
    } 

    doCheckout = async e => {
        // e.preventDefault();
        try {
          const { order_id, staff_id, transaction_date, payment_method, payment_amount, timestamp } = this;
          const body = { order_id: this.state.order_id, staff_id, transaction_date, payment_method, payment_amount: (this.totPrice*(1+ 0.075) + this.tips).toFixed(2), timestamp };
          const response = await fetch("https://yifang-backend.onrender.com/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          console.log(response);
          this.payOrder();
        //   onClose();
    
        //   window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
    };
    
    saveDrink = async (key) => {
        // EDIT THIS AFTER CONNECTION WITH DATABASE
        if (key != -1){
            this.removeFromOrder(key);
        }
        if(this.qty > 0){
            // console.log("...about to get menu");
            await this.base.getMenu();

            console.log("...finished getting menu");
            // console.log("...finished getting menu");
            this.price += this.base.findPrice(this.drink);

            console.log(this.drink);
            console.log("This is price: " + this.price);

            this.totPrice += this.price*this.qty;
            this.orderTable.push({drinkId: this.drinkId, drinkName: this.drink, Qty: this.qty, Each: this.price, Total: this.price*this.qty});
            this.changeCurrTable();
            this.changeCurrPrice();
            this.setState({curr_right: this.state.history_right.pop()});

            // reset values
            this.drinkId = 0;
            this.drink = "N/A";
            this.price = 0;
            this.qty = 0;
            this.ingredients = [];
        }
    }

    removeFromOrder = (key) => {
        this.totPrice = this.totPrice - this.orderTable[key].Total;
        delete this.orderTable[key];
        this.changeCurrTable();
        this.changeCurrPrice();
    }

    editDrink = (key) => {
        var prevLength = this.orderTable.length;
        this.changeCurrRight(this.customization, this.orderTable[key].drinkName, key);
    }

    changeCurrTable = () => {
        this.homeTable =  (
        <div>
            <table>
            <div className="flex justify-between w-[45vw]">
                <p className="px-7 font-bold">Name</p>
                <div className="flex">
                    <p className="px-7 font-bold">Qty</p>
                    <p className="px-7 font-bold">Each</p>
                    <p className="px-7 font-bold">Total</p>
                </div>
            </div>
            <tbody>
                {this.orderTable.map((item, index) => (
                <div>
                    <div key={index} className="flex justify-between w-[45vw]">
                        <p className="px-7">{item.drinkName}</p>
                        <div className="flex">
                            <p className="px-7">{item.Qty}</p>
                            <p className="px-7">{item.Each}</p>
                            <p  className="px-7">{item.Total}</p>
                        </div>
                    </div>
                    <button aria-label="Remove drink" className="button-small ml-7" onClick={() => this.removeFromOrder(index)}>remove</button>
                    <button aria-label="Edit drink" className="button-small ml-7" onClick={() => this.editDrink(index)}>edit</button>
                </div>
                ))}
            </tbody>
            </table>
        </div>);

        this.setState({ curr_table: this.homeTable });
    }

    changeCurrPrice = () => {
        this.home_price = (
        <div> 
            <div className= "grid-container-topping">
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
                    {this.tips.toFixed(2)}
                </div>
                <div>
                    Balance Due:
                </div>
                <div>
                    {(this.totPrice*(1+ 0.075) + this.tips).toFixed(2)}
                </div>
            </div>
        </div>);

        this.setState({curr_price: this.home_price});
    }

    changeCurrRight = (newContent, newDrink = "None", key = -1) => {
        this.state.history_right.push(this.state.curr_right);
        if(newDrink !== "None"){
            this.drink = newDrink;
            this.customization = (
                <div>
                <p style={{textAlign: "center"}}>{this.drink}</p>
                <div className= "grid-container-topping">
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
                        <button aria-label="Back" className= "button-small" onClick={() => this.handleGoBack()}>Back</button>
                    </div>

                    <div style={{float:"right", paddingRight:"10%", display:"inline-block"}}>
                        <button aria-label="Save" className= "button-small" onClick={() => this.saveDrink(key)}> Save </button>
                    </div>
                </div>
            );
            newContent = this.customization;
        }

        this.setState({ curr_right: newContent });
    }

    payOrder = () => {
        this.totPrice = 0;
        this.tips = 0;
        this.orderTable = [] //clear table
        this.changeCurrTable();
        this.changeCurrPrice(0);
    }

    render() {
        return (
            <>
                <div className= "grid-container-out">
                    <div>
                    <div className= "grid-container-left">
                        <div className="bg-[#faebd7] rounded-xl">
                            {this.state.curr_table}
                        </div>
                        <div>  
                            {this.state.curr_price}
                            <div className='ml-7 pb-7 flex justify-between' style = {{textAlign:"right", paddingRight:"10%"}}>
                                {/* <button className= "button-small" onClick={() => this.payOrder()}>Pay Now {this.state.order_id}</button> */}
                                <button aria-label="Add Tips" className='button-small' onClick={this.handleShowTips}>Add Tips</button>
                                <button aria-label="Pay Now" className= "button-small" onClick={() => this.doCheckout()}>Pay Now</button>
                                {this.state.showTips && this.tipMenu}
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