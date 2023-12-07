import React, { useState, useEffect } from 'react';

const PaymentMethod = ({ onClose }) => {
  /**
   * @returns sales generated from most used payment method

   */

  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const fetchPaymentMethodData = async () => {
      try {
        const response = await fetch('http://localhost:5000/order/paymentmethod');
        const data = await response.json();

        setPaymentData(data[0]); // Assuming the response structure is always an array with one item
      } catch (error) {
        console.error('Error fetching payment method data:', error.message);
      }
    };

    fetchPaymentMethodData();
  }, []);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] flex flex-col justify-center items-center overflow-auto'>
        {paymentData ? (
          <div>
            <p>Payment Method: {paymentData.payment_method}</p>
            <p>Payment Count: {paymentData.payment_count}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button className='border border-black p-2 m-2' aria-label="Cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
