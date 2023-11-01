import React, { useState, useEffect } from 'react';
import jdbcPostgreSQL from './jdbcPostgreSQL';
import { Table, Button, message } from 'antd';

const OrderHistory = () => {
  const [orderData, setOrderData] = useState([]);
  const [pm, setPM] = useState(null);
  const [pmTimes, setPMTimes] = useState(null);

  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = async () => {
    try {
      const connection = new jdbcPostgreSQL();
      const conn = await connection.connect();
      const sqlStatement = 'SELECT * FROM orders';
      const result = await conn.query(sqlStatement);

      // Process the result and update the state with the data
      const data = result.rows.map(row => ({
        order_id: row.order_id,
        staff_id: row.staff_id,
        transaction_date: row.transaction_date,
        payment_method: row.payment_method,
        payment_amount: row.payment_amount,
        timestamp: row.timestamp,
      }));
      setOrderData(data);
    } catch (error) {
      console.error(error);
      message.error('Error loading data.');
    }
  };

  // Define functions for your button actions
  const handleTotalOrders = () => {
    message.info(`Total # of Orders: ${orderData.length}`);
  };

  const handleBestSeller = async () => {
    try {
      const connection = new jdbcPostgreSQL();
      const conn = await connection.connect();
      const sqlStatement = 'SELECT d.name AS highest_selling_drink, COUNT(*) AS total_orders FROM drinks d JOIN orders o ON d.order_id = o.order_id GROUP BY d.name ORDER BY total_orders DESC LIMIT 1';
      const result = await conn.query(sqlStatement);

      // Process the result and update the state
      if (result.rows.length > 0) {
        setPM(result.rows[0].highest_selling_drink);
        setPMTimes(result.rows[0].total_orders);
        message.info(`${pm}: ${pmTimes}`);
      } else {
        message.info('No data found.');
      }
    } catch (error) {
      console.error(error);
      message.error('Error fetching data.');
    }
  };

  // Define similar functions for the other buttons (paymentMethod, peakDay, slowDay)

  // Define columns for the table
  const columns = [
    { title: 'Order ID', dataIndex: 'order_id', key: 'order_id' },
    { title: 'Staff ID', dataIndex: 'staff_id', key: 'staff_id' },
    { title: 'Transaction Date', dataIndex: 'transaction_date', key: 'transaction_date' },
    { title: 'Payment Method', dataIndex: 'payment_method', key: 'payment_method' },
    { title: 'Payment Amount', dataIndex: 'payment_amount', key: 'payment_amount' },
    { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
  ];

  return (
    <div>
      <Table dataSource={orderData} columns={columns} />
      <Button onClick={handleTotalOrders}>Total # of Orders</Button>
      <Button onClick={handleBestSeller}>Best Seller</Button>
      <Button onClick={handlepaymentMethod}>Payment Method</Button>
      <Button onClick={handlepeakDay}>Peak Day</Button>
      <Button onClick={handleslowDay}>Slow Day</Button>
    </div>
  );
};

export default OrderHistory;
