import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContextProvider'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Bag = ({onClose}) => {

    const { bagItems, removeFromBag } = useContext(ShopContext);
    const totalPrice = Object.values(bagItems).reduce((total, item) => total + item.price, 0);
    var order_id = parseInt(localStorage.getItem('order_id')) || 87005;
    var staff_id = 9;
    var transaction_date = "2022-05-31";
    var payment_method = "Card";
    var payment_amount = totalPrice;
    var timestamp = "18:50:19";

    const doCheckout = async e => {
        e.preventDefault();
        try {
          const body = { order_id, staff_id, transaction_date, payment_method, payment_amount, timestamp };
          order_id++;
          localStorage.setItem('order_id', order_id);
          const response = await fetch("http://localhost:5000/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          console.log(response);
    
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
                                <div key={key} className='flex pr-2 py-2 bg-red-500'>
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
                <div className='mx-4 mb-4'>
                    <button className='bg-black text-white rounded-full py-2 px-4 w-full flex justify-between' onClick={doCheckout}>
                        <span>Checkout</span>
                        <span>${totalPrice.toFixed(2)}</span>
                        <span>{order_id}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Bag