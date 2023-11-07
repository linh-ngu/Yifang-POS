import React, { useState, useEffect } from 'react';
// import jdbcPostgreSQL from './jdbcPostgreSQL';
// import { Table, Button, message } from 'antd';
import '../styles/IngredientStyles.css';

const OrderHistory = () => {
  // const [orderData, setOrderData] = useState([]);
  // const [pm, setPM] = useState(null);
  // const [pmTimes, setPMTimes] = useState(null);

  // useEffect(() => {
  //   loadTable();
  // }, []);

  // const loadTable = async () => {
  //   try {
  //     const connection = new jdbcPostgreSQL();
  //     const conn = await connection.connect();
  //     const sqlStatement = 'SELECT * FROM orders';
  //     const result = await conn.query(sqlStatement);

  //     // Process the result and update the state with the data
  //     const data = result.rows.map(row => ({
  //       order_id: row.order_id,
  //       staff_id: row.staff_id,
  //       transaction_date: row.transaction_date,
  //       payment_method: row.payment_method,
  //       payment_amount: row.payment_amount,
  //       timestamp: row.timestamp,
  //     }));
  //     setOrderData(data);
  //   } catch (error) {
  //     console.error(error);
  //     message.error('Error loading data.');
  //   }
  // };

  // // Define functions for your button actions
  // const handleTotalOrders = () => {
  //   message.info(`Total # of Orders: ${orderData.length}`);
  // };

  // const handleBestSeller = async () => {
  //   try {
  //     const connection = new jdbcPostgreSQL();
  //     const conn = await connection.connect();
  //     const sqlStatement = 'SELECT d.name AS highest_selling_drink, COUNT(*) AS total_orders FROM drinks d JOIN orders o ON d.order_id = o.order_id GROUP BY d.name ORDER BY total_orders DESC LIMIT 1';
  //     const result = await conn.query(sqlStatement);

  //     // Process the result and update the state
  //     if (result.rows.length > 0) {
  //       setPM(result.rows[0].highest_selling_drink);
  //       setPMTimes(result.rows[0].total_orders);
  //       message.info(`${pm}: ${pmTimes}`);
  //     } else {
  //       message.info('No data found.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     message.error('Error fetching data.');
  //   }
  // };

  // // Define similar functions for the other buttons (paymentMethod, peakDay, slowDay)

  // // Define columns for the table
  // const columns = [
  //   { title: 'Order ID', dataIndex: 'order_id', key: 'order_id' },
  //   { title: 'Staff ID', dataIndex: 'staff_id', key: 'staff_id' },
  //   { title: 'Transaction Date', dataIndex: 'transaction_date', key: 'transaction_date' },
  //   { title: 'Payment Method', dataIndex: 'payment_method', key: 'payment_method' },
  //   { title: 'Payment Amount', dataIndex: 'payment_amount', key: 'payment_amount' },
  //   { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
  // ];

  // return (
  //   <div>
  //     <Table dataSource={orderData} columns={columns} />
  //     <Button onClick={handleTotalOrders}>Total # of Orders</Button>
  //     <Button onClick={handleBestSeller}>Best Seller</Button>
  //     <Button onClick={handlepaymentMethod}>Payment Method</Button>
  //     <Button onClick={handlepeakDay}>Peak Day</Button>
  //     <Button onClick={handleslowDay}>Slow Day</Button>
  //   </div>
  // );
  const[order, setOrder] = useState([]);

  const getOrder = async() => {
      try {
          const response = await fetch("http://localhost:5000/manager/orderhistory");
          const jsonData = await response.json();

          setOrder(jsonData);

          console.log(jsonData);
      } catch (err) {
          console.error(err.message);
      }
  } 
  
  useEffect(() => {
      getOrder();
  },[]);
  
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
