import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ShopContext } from '../contexts/ShopContextProvider'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Bag = ({onClose}) => {

    const { bagItems, removeFromBag, clearBag } = useContext(ShopContext);
    const totalPrice = Object.values(bagItems).reduce((total, item) => total + item.price, 0);
    var staff_id = 9;
    var transaction_date = new Date().toLocaleDateString();
    var payment_method = "Card";
    var payment_amount = (totalPrice * 0.0825).toFixed(2);
    var timestamp = new Date().toLocaleTimeString('en-GB');
    var[order_id, setOrder_id] = useState([]);

    const getOrder_id = async() => {
        try {
            const response = await fetch("https://yifang-backend.onrender.com/order/getId");
            const jsonData = await response.json();

            setOrder_id(jsonData[0].order_id + 1);

            console.log(jsonData[0].order_id + 1);
        } catch (err) {
            console.error(err.message);
        }
    } 
    
    useEffect(() => {
        getOrder_id();
    },[]);

    const doCheckout = async e => {
        e.preventDefault();
        try {
          const body = { order_id, staff_id, transaction_date, payment_method, payment_amount, timestamp };
          const response = await fetch("https://yifang-backend.onrender.com/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          console.log(response);
          clearBag();
          onClose();
    
        //   window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
    };

    return (
        <div className="absolute inset-0 z-50 h-screen w-screen" onClick={onClose}>
            <div className='fixed bg-white border shadow-2xl rounded-lg top-[100px] right-[4vw] min-h-[250px] sm:w-[400px]' onClick={(e) => e.stopPropagation()}>
                <div className='pt-8 px-4'>
                    <div className='flex items-center justify-between pb-2'>
                        <h1 className='text-2xl font-bold'>Your Order</h1>
                        <button onClick={() => { onClose(); }}><CloseOutlinedIcon/></button>
                    </div>
                    <div className='py-2'>
                        {Object.keys(bagItems).length === 0 ? (
                            <div className='flex justify-center items-center h-[104px]'>
                                <p className='py-2 pl-1 text-gray-500'>Add items to bag to start order</p>
                            </div>
                        ) : (
                            Object.entries(bagItems).map(([key, item]) => (
                                <div key={key} className='flex pr-2 py-2'>
                                    <div className='w-full'>
                                        <div className='flex justify-between items-center'>
                                            <h3 className='font-semibold'>{item.name} ({item.count})</h3>
                                            <p>${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className='translate-x-4'>
                                            {item.toppings.map((topping, index) => (
                                                <p key={index} className='text-xs font-extralight py-0.5'>{topping}</p>
                                            ))}
                                        </div>
                                        <button className='text-xs my-2 text-blue-900' onClick={() => removeFromBag(key)}>Remove</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div> 
                <hr className='solid w-[92%] mx-auto'></hr>
                <div className='p-4'>
                    <div className='flex justify-between items-center pr-2'>
                        <p className='font-semibold'>Subtotal</p>
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between items-center pr-2 py-2 pb-4'>
                        <p className='font-semibold'>Sales Tax</p>
                        <p>${(totalPrice * 0.0825).toFixed(2)}</p>
                    </div>
                    <button className='bg-black text-white rounded-full py-2 px-4 w-full flex justify-between' onClick={doCheckout}>
                        <span>Checkout</span>
                        <span>${(totalPrice + (totalPrice * 0.0825)).toFixed(2)}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Bag