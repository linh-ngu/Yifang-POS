import React, { useEffect, useState } from 'react';

const SalesReport = ({onClose}) => {

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [drink_name, setName] = useState('');
  const [startDateVisible, setStartDateVisible] = useState(true);
  const [endDateVisible, setEndDateVisible] = useState(true);
  const [nameVisible, setNameVisible] = useState(true);
  const [enterVisible, setEnterVisible] = useState(true);
  const [salesReport, setSalesReport] = useState(null);

  const handleCancel = () => {
    // Reset input values and close the modal
    setStartDate('');
    setEndDate('');
    setName('');
    onClose();
  };

  const handleEnter = () => {
    // Do something with the input values, e.g., send them to a parent component
    // console.log('Ingredient 1:', ingredient1);
    // console.log('Ingredient 2:', ingredient2);
    
    // Reset input values and close the modal
    console.log(start_date);
    console.log(end_date);
    console.log(drink_name);
    setStartDate('');
    setEndDate('');
    setName('');
    setStartDateVisible(false);
    setEndDateVisible(false);
    setNameVisible(false);
    setEnterVisible(false);
    doSalesReport();
    // onClose();
  };

  const doSalesReport = async e => {
    // e.preventDefault();
    try {
      const body = { start_date, end_date, drink_name };
      // const response = await fetch("https://yifang-backend.onrender.com/inventory/addIngredient", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body)
      // });
      const response = await fetch("http://localhost:5000/manager/salesreport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log(data);
      setSalesReport(data);
      // onClose();

    //   window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect(() => {
  //   doSalesReport();
  // }, []);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] flex flex-col justify-center items-center'>
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
        {nameVisible && (
          <input
            className='border border-black p-1 mx-auto my-4'
            type="text"
            placeholder="Drink Name"
            value={drink_name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {salesReport ? (
          <div>
            <p>Sales Report:</p>
            <br></br>
            <ul>
              {salesReport.map((report, index) => (
                <li key={index}>
                  <p>Drink: {report.drink_name}</p>
                  <p>Total Sales: ${report.total_sales.toFixed(2)}</p>
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
          {/* <button aria-label="Enter" className='border border-black rounded-lg p-2 mx-2' onClick={handleEnter}>Enter</button> */}
          {enterVisible && (
            <button aria-label="Enter" className='border border-black rounded-lg p-2 mx-2' onClick={handleEnter}>Enter</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SalesReport