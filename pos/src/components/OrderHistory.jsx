import React, { useState, useEffect } from 'react';
import TotalOrders from './orderHistoryTableButtons/totalOrders';
import BestSeller from './orderHistoryTableButtons/bestSeller';
import PaymentMethod from './orderHistoryTableButtons/paymentMethod';
import PeakDay from './orderHistoryTableButtons/peakDay';
import SlowDay from './orderHistoryTableButtons/slowDay';
/**
 * @returns data from order history as a table
 */

const OrderHistory = () => {
  const[order, setOrder] = useState([]);

  const getOrder = async() => {
      try {
          const response = await fetch("http://localhost:5000/manager/orderhistory");
          const jsonData = await response.json();

          setOrder(jsonData);

      } catch (err) {
          console.error(err.message);
      }
  } 
  
  useEffect(() => {
    getOrder().catch(error => console.error(error));
  });

  const [showModel, setShowModel] = useState("");

  const openModel = (val) => {
      setShowModel(val);
  };

  const closeModel = () => {
      setShowModel("");
  };
  
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
              <td className='p-1'>${my_order.payment_amount.toFixed(2)}</td>
              <td className='p-1'>{my_order.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center'>
        <button aria-label="Total number of orders" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("totalOrders")}>Total # of Orders</button>
        <button aria-label="Best seller" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("bestSeller")}>Best Seller</button>
        <button aria-label="Payment method" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("paymentMethod")}>Payment Method</button>
        <button aria-label="Peak day" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("peakDay")}>Peak Day</button>
        <button aria-label="Slow day" className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("slowDay")}>Slow Day</button> 
      </div>
      {showModel === "totalOrders" && <TotalOrders onClose={closeModel} />}
      {showModel === "bestSeller" && <BestSeller onClose={closeModel} />}
      {showModel === "paymentMethod" && <PaymentMethod onClose={closeModel} />}
      {showModel === "peakDay" && <PeakDay onClose={closeModel} />}
      {showModel === "slowDay" && <SlowDay onClose={closeModel} />}
    </div>
  )
};

export default OrderHistory;
