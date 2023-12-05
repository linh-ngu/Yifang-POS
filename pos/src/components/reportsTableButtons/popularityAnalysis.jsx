import React, { useState } from 'react';

const PopularityAnalysis = ({onClose}) => {

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [startDateVisible, setStartDateVisible] = useState(true);
  const [endDateVisible, setEndDateVisible] = useState(true);
  const [enterVisible, setEnterVisible] = useState(true);
  const [popularityData, setPopularityData] = useState(null);

  const handleCancel = () => {
    // Reset input values and close the modal
    setStartDate('');
    setEndDate('');
    onClose();
  };

  const handleEnter = () => {
    // Do something with the input values, e.g., send them to a parent component
    // console.log('Ingredient 1:', ingredient1);
    // console.log('Ingredient 2:', ingredient2);
    
    // Reset input values and close the modal
    setStartDate('');
    setEndDate('');
    setStartDateVisible(false);
    setEndDateVisible(false);
    setEnterVisible(false);
    doPopularityAnalysis();
    // onClose();
  };

  const doPopularityAnalysis = async e => {
    // e.preventDefault();
    try {
      const body = { start_date, end_date };
      // const response = await fetch("https://yifang-backend.onrender.com/inventory/addIngredient", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body)
      // });
      const response = await fetch("http://localhost:5000/manager/popularityanalysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log(data);
      setPopularityData(data);
      // onClose();

    //   window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect(() => {
  //   doPopularityAnalysis();
  // }, []);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] flex flex-col justify-center items-center overflow-auto'>
        {startDateVisible && (
          <input
            className='border border-black p-1 mx-auto my-4'
            type="text"
            placeholder="Start Date, YYYY-MM-DD"
            value={start_date}
            onChange={(e) => setStartDate(e.target.value)}
          />
        )}
        {endDateVisible && (
          <input
            className='border border-black p-1 mx-auto my-4'
            type="text"
            placeholder="End Date, YYYY-MM-DD"
            value={end_date}
            onChange={(e) => setEndDate(e.target.value)}
          />
        )}
        {popularityData ? (
          <div>
            <p>Popularity:</p>
            <br></br>
            <ul>
              {popularityData.map((drink, index) => (
                <li key={index}>
                  <p>Drink: {drink.drink_name}</p>
                  <p>Total Sales: {drink.total_sales}</p>
                  <br></br>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p></p>
        )}
        <div className='flex justify-center'>
          <button aria-label="Cancel" className='border border-black rounded-lg p-2 mx-2' onClick={handleCancel}>Cancel</button>
          {enterVisible && (
            <button aria-label="Enter" className='border border-black rounded-lg p-2 mx-2' onClick={handleEnter}>Enter</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PopularityAnalysis