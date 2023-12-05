import React, { useState, useEffect } from 'react';

const PeakDay = ({ onClose }) => {
  /**
   * @returns 10 dates with max sales

   */

  const [peakDaysData, setPeakDaysData] = useState(null);

  const fetchPeakDaysData = async () => {
    try {
      const response = await fetch('http://localhost:5000/order/peakdays');
      const data = await response.json();

      console.log(data);

      setPeakDaysData(data);
    } catch (error) {
      console.error('Error fetching peak days data:', error.message);
    }
  };

  useEffect(() => {
    fetchPeakDaysData();
  }, []);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] overflow-auto'>
        {peakDaysData ? (
          <div>
            <p>Peak Days:</p>
            <ul className=''>
              {peakDaysData.map((day, index) => (
                <li key={index} className='py-2 px-8'>
                  <p>Order Day: {day.order_day}</p>
                  <p>Total Order Amount: ${day.total_order_amount.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button className='border border-black p-2 m-2' aria-label="Cancel"onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PeakDay;
