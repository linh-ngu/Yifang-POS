import React, { useState } from 'react';

const BestSeller = ({ onClose }) => {
  const [bestSellerData, setBestSellerData] = useState(null);

  const fetchBestSellerData = async () => {
    try {
      const response = await fetch('http://localhost:5000/order/bestseller');
      const data = await response.json();
      console.log(data);
      setBestSellerData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px]'>
        <button aria-label = "Best Seller" onClick={fetchBestSellerData}>Best Seller</button>
        <button aria-label="Cancel" onClick={handleCancel}>Cancel</button>

        {/* Render the best seller data */}
        {bestSellerData && (
          <div>
            <h2>Best Seller</h2>
            <ul>
              {bestSellerData.map((item) => (
                <li key={item.drink_name}>
                  {item.drink_name}: ${item.total_sales}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
