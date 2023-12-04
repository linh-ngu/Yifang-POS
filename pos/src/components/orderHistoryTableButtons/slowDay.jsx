import React, { useState, useEffect } from 'react';

const SlowDay = ({ onClose }) => {
  const [slowDaysData, setSlowDaysData] = useState(null);

  useEffect(() => {
    const fetchSlowDaysData = async () => {
      try {
        const response = await fetch('http://localhost:5000/order/slowdays');
        const data = await response.json();

        setSlowDaysData(data);
      } catch (error) {
        console.error('Error fetching slow days data:', error.message);
      }
    };

    fetchSlowDaysData();
  }, []);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] overflow-auto'>
        {slowDaysData ? (
          <div>
            <p>Slow Days:</p>
            <ul>
              {slowDaysData.map((day, index) => (
                <li key={index} className='px-8 py-2'>
                  <p>Order Day: {day.order_day}</p>
                  <p>Total Order Amount: {day.total_order_amount}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button aria-label="Cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SlowDay;
