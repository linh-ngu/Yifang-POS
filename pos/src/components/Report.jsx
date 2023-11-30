import React, { useState, useEffect } from 'react';

const Report = () => {
    const[report, setReport] = useState([]);


    const handlePopularityAnalysis = async() => {
        try {
            const response = await fetch("https://yifang-backend.onrender.com/manager/popularityanalysis");
            const jsonData = await response.json();
  
            setReport(jsonData);
  
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
      };
    
      const handleSalesReport = async() => {
        try {
            const response = await fetch("https://yifang-backend.onrender.com/manager/salesreport");
            const jsonData = await response.json();
  
            setReport(jsonData);
  
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
      };
    
      const handleRestockReport = async() => {
        try {
            const response = await fetch("https://yifang-backend.onrender.com/report/restockreport");
            const jsonData = await response.json();
  
            setReport(jsonData);
  
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
      };
    
      const handleExcessReport = async() => {
        try {
            const response = await fetch("https://yifang-backend.onrender.com/manager/excessreport");
            const jsonData = await response.json();
  
            setReport(jsonData);
  
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
      };


  return (
    <div>
      <div>
        <button onClick={handlePopularityAnalysis}>Popularity Analysis</button>
      </div>
      <div>
        <button onClick={handleSalesReport}>Sales Report</button>
      </div>
      <div>
        <button onClick={handleRestockReport}>Restock Report</button>
      </div>
      <div>
        <button onClick={handleExcessReport}>Excess Report</button>
      </div>
    </div>
  );
};

export default Report;


