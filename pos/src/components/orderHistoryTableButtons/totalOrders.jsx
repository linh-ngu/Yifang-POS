import React, { useState, useEffect } from 'react';

const TotalOrders = ({ onClose }) => {
  const [totalOrders, setTotalOrders] = useState(null);

  useEffect(() => {
    const fetchTotalOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/order/totalorders');
        const data = await response.json();

        // Directly set the value without checking array and length
        setTotalOrders(data[0]?.row_count);
      } catch (error) {
        console.error('Error fetching total orders:', error.message);
      }
    };

    fetchTotalOrders();
  }, []);

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[200px] w-[200px]'>
        <p>Total Orders: {totalOrders}</p>
        <button aria-label="Cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default TotalOrders;
