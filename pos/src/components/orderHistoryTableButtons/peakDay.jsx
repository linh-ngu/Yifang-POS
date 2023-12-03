import React, { useState, useEffect } from 'react';

const PeakDay = ({ onClose }) => {
  const [peakDaysData, setPeakDaysData] = useState(null);

  useEffect(() => {
    const fetchPeakDaysData = async () => {
      try {
        const response = await fetch('/order/peakdays');
        const data = await response.json();

        setPeakDaysData(data);
      } catch (error) {
        console.error('Error fetching peak days data:', error.message);
      }
    };

    fetchPeakDaysData();
  }, []);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px]'>
        {peakDaysData ? (
          <div>
            <p>Peak Days:</p>
            <ul>
              {peakDaysData.map((day, index) => (
                <li key={index}>
                  <p>Order Day: {day.order_day}</p>
                  <p>Total Order Amount: {day.total_order_amount}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PeakDay;
