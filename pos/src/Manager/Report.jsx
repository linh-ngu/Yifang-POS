// import React, { useState } from 'react';
// import jdbcPostgreSQL from './jdbcPostgreSQL'; // Import your PostgreSQL connection logic here
// import { Button, message } from 'antd'; // Adjust the import for your UI library

// const Report = () => {
//   const [pm, setPm] = useState('');
//   const [pmTimes, setPmTimes] = useState('');
//   const [ingredientList, setIngredientList] = useState([]);

//   const handlePopAnalysis = () => {
//     const input = prompt('Enter date range (YYYY-MM-DD, YYYY-MM-DD):');
//     const splitInput = input ? input.split(', ') : null;

//     if (!splitInput || splitInput.length !== 2) {
//       message.error('Invalid input format.');
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         const connection = new jdbcPostgreSQL();
//         const conn = await connection.connect();
//         const sqlStatement = 'SELECT d.name AS drink_name, SUM(d.price) AS total_sales FROM drinks d JOIN orders o ON d.order_id = o.order_id WHERE TO_DATE(o.transaction_date, 'YYYY-MM-DD') BETWEEN '${splitInput[0]}' AND '${splitInput[1}' GROUP BY d.name ORDER BY total_sales DESC LIMIT 10';

//         const result = await conn.query(sqlStatement);

//         if (result.rows.length > 0) {
//           const pmData = result.rows.map(row => `${row.drink_name}: $${row.total_sales}`);
//           setPm(pmData.join('\n'));
//           message.info(pm);
//         } else {
//           message.info('No data found.');
//         }
//       } catch (error) {
//         console.error(error);
//         message.error('Error fetching data.');
//       }
//     };

//     fetchData();
//   };

//   // Define similar functions for the other buttons (salesReport, restockReport, excessReport)

//   return (
//     <div>
//       <Button onClick={handlePopAnalysis}>Popularity Analysis</Button>
//       <Button onClick={handlePopAnalysis}>Sales Report</Button>
//       <Button onClick={handlePopAnalysis}>Restock Report</Button>
//       <Button onClick={handlePopAnalysis}>Excess Report</Button>
//     </div>
//   );
// };

// export default Report;
