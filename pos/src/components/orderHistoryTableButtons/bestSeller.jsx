import React, { useState, useEffect } from 'react';

const BestSeller = ({ onClose }) => {
  /**
   * @returns best selling drink with corresponding sales amount

   */

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

  useEffect(() => {
    fetchBestSellerData();
  }, []);

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px]'>
        {/* <button aria-label = "Best Seller" onClick={fetchBestSellerData}>Best Seller</button> */}
        {/* Render the best seller data */}
        {bestSellerData && (
          <div>
            <ul>
              {bestSellerData.map((item, index) => (
                // <li key={item.best_selling_drink}>
                //   {item.drink_name}: ${item.total_orders}
                // </li>
                <li key={index}>
                  <p>Best Selling Drink: {item.best_selling_drink}</p>
                  <p>Total Order Amount: {item.total_orders}</p>
                  {/* <br></br> */}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button className='border border-black p-2 m-2' aria-label="Cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default BestSeller;
