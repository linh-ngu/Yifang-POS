import React, { useState, useEffect } from 'react';
import PopularityAnalysis from './reportsTableButtons/popularityAnalysis';
import SalesReport from './reportsTableButtons/salesReport';

const Report = () => {
    const[report, setReport] = useState([]);
    const [showModel, setShowModel] = useState("");

    const openModel = (val) => {
        setShowModel(val);
    };

    const closeModel = () => {
        setShowModel("");
    };

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
    
      const handleRestockReport = async () => {
        try {
          const response = await fetch("https://yifang-backend.onrender.com/manager/restockreport");
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
    <div className='border border-black'>
      <div className='flex justify-center'>
        <button aria-label="Popularity analysis" className='border border-black rounded-lg shadow-md p-2 m-4' onClick={() => {handlePopularityAnalysis(); openModel("popularityAnalysis");}}>Popularity Analysis</button>
        <button aria-label="Sales report" className='border border-black rounded-lg shadow-md p-2 m-4' onClick={() => {handleSalesReport(); openModel("salesReport");}}>Sales Report</button>
        <button aria-label="Restock report" className='border border-black rounded-lg shadow-md p-2 m-4' onClick={handleRestockReport}>Restock Report</button>
        <button aria-label="Excess report" className='border border-black rounded-lg shadow-md p-2 m-4' onClick={handleExcessReport}>Excess Report</button>
      </div>
      {showModel === "popularityAnalysis" && <PopularityAnalysis onClose={closeModel} />}
      {showModel === "salesReport" && <SalesReport onClose={closeModel} />}
      {report.length > 0 && (
        <div>
          <table className='w-full text-center'>
            <thead>
              <tr>
                <th className='p-1'>Ingredient Name</th>
              </tr>
            </thead>
            <tbody>
              {report.map((item, index) => (
                <tr key={index}>
                  <td className='p-1'>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Report;


