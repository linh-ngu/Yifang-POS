import React, { useState, useEffect } from 'react';
// import '../styles/IngredientStyles.css';

const OrderHistory = () => {
  const[order, setOrder] = useState([]);

  const getOrder = async() => {
      try {
          const response = await fetch("https://yifang-backend.onrender.com/manager/orderhistory");
          const jsonData = await response.json();

          setOrder(jsonData);

          console.log(jsonData);
      } catch (err) {
          console.error(err.message);
      }
  } 
  
  useEffect(() => {
    getOrder().catch(error => console.error(error));
  }, []);
  
  return (
    <div className=''>
      <table className='w-full text-center border border-black mb-4'>
          <thead>
            <tr>
              <th className='p-1'>Order ID</th>
              <th className='p-1'>Staff ID</th>
              <th className='p-1'>Transaction Date</th>
              <th className='p-1'>Payment Method</th>
              <th className='p-1'>Payment Amount</th>
              <th className='p-1'>Timestamp</th>
            </tr>
          </thead>
          <tbody>
          {order.map((my_order, index) => (
            <tr key={index}>
              <td className='p-1'>{my_order.order_id}</td>
              <td className='p-1'>{my_order.staff_id}</td>
              <td className='p-1'>{my_order.transaction_date}</td>
              <td className='p-1'>{my_order.payment_method}</td>
              <td className='p-1'>{my_order.payment_amount}</td>
              <td className='p-1'>{my_order.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center'>
        <button className='border border-black p-2 m-4'>Total # of Orders</button>
        <button className='border border-black p-2 m-4'>Best Seller</button>
        <button className='border border-black p-2 m-4'>Payment Method</button>
        <button className='border border-black p-2 m-4'>Peak Day</button>
        <button className='border border-black p-2 m-4'>Slow Day</button> 
      </div>
    </div>
  )
};

export default OrderHistory;
