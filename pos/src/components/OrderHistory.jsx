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
    <div className="ingredient-container">
            <table className="ingredient-table">
                <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Staff ID</th>
                      <th>Transaction Date</th>
                      <th>Payment Method</th>
                      <th>Payment Amount</th>
                      <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                {order.map((my_order, index) => (
                  <tr key={index}>
                      <td>{my_order.order_id}</td>
                      <td>{my_order.staff_id}</td>
                      <td>{my_order.transaction_date}</td>
                      <td>{my_order.payment_method}</td>
                      <td>{my_order.payment_amount}</td>
                      <td>{my_order.timestamp}</td>
                  </tr>
                ))}
                </tbody>
            </table>
              <button>Total # of Orders</button>
              <button>Best Seller</button>
              <button>Payment Method</button>
              <button>Peak Day</button>
              <button>Slow Day</button>
        </div>

  )
};

export default OrderHistory;
