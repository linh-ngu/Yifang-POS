// import React from 'react'

// const addIngredients = ({onClose}) => {
//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
//       <div className='relative bg-white rounded-lg h-[500px] w-[500px] flex flex-col justify-center items-center'>
//         <input className='border border-black p-1 mx-auto my-4' type="text" />
//         <input className='border border-black p-1 mx-auto my-4' type="text" />
//         <div className='flex justify-center'>
//           <button className='border border-black rounded-lg p-2 mx-2' onClick={onClose}>Cancel</button>
//           <button className='border border-black rounded-lg p-2 mx-2' >Enter</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default addIngredients

import React, { useState, useEffect } from 'react';

const AddIngredients = ({ onClose }) => {
  // State to store input values
  const [name, setName] = useState('');
  const [stock_level, setStockLevel] = useState('');
  const [restock_date, setRestockDate] = useState('');
  const [supplier, setSupplier] = useState('');
  var[ingredient_id, setIngredient_id] = useState([]);

  const getIngredient_id = async() => {
      try {
          // const response = await fetch("https://yifang-backend.onrender.com/inventory/getIngredientId");
          const response = await fetch("http://localhost:5000/inventory/getIngredientId");
          const jsonData = await response.json();

          setIngredient_id(jsonData[0].ingredient_id + 1);

          console.log(jsonData[0].ingredient_id + 1);
      } catch (err) {
          console.error(err.message);
      }
  } 

  useEffect(() => {
      getIngredient_id();
  },[]);

  const doAddIngredient = async e => {
      // e.preventDefault();
      try {
        const body = { ingredient_id, name, stock_level, restock_date, supplier };
        // const response = await fetch("https://yifang-backend.onrender.com/inventory/addIngredient", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(body)
        // });
        const response = await fetch("http://localhost:5000/inventory/addIngredient", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        console.log(response);
        // onClose();

      //   window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
  };

  const handleCancel = () => {
    // Reset input values and close the modal
    setName('');
    setStockLevel('');
    setRestockDate('');
    setSupplier('');
    onClose();
  };

  const handleEnter = () => {
    // Do something with the input values, e.g., send them to a parent component
    // console.log('Ingredient 1:', ingredient1);
    // console.log('Ingredient 2:', ingredient2);
    
    // Reset input values and close the modal
    setName('');
    setStockLevel('');
    setRestockDate('');
    setSupplier('');
    doAddIngredient();
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] flex flex-col justify-center items-center'>
        <input
          className='border border-black p-1 mx-auto my-4'
          type="text"
          placeholder="Ingredient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='border border-black p-1 mx-auto my-4'
          type="text"
          placeholder="Stock Level"
          value={stock_level}
          onChange={(e) => setStockLevel(e.target.value)}
        />
        <input
          className='border border-black p-1 mx-auto my-4'
          type="text"
          placeholder="Restock Date"
          value={restock_date}
          onChange={(e) => setRestockDate(e.target.value)}
        />
        <input
          className='border border-black p-1 mx-auto my-4'
          type="text"
          placeholder="Supplier Name"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        />
        <div className='flex justify-center'>
          <button aria-label="Cancel" className='border border-black rounded-lg p-2 mx-2' onClick={handleCancel}>Cancel</button>
          <button aria-label="Enter" className='border border-black rounded-lg p-2 mx-2' onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default AddIngredients;
