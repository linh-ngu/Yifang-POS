import React, { useState } from 'react';
const ChangePrice = ({onClose}) => {
/**
 * @returns updated database with price of menu item changed

 */

  const [price, setPrice] = useState('');
  const [name, setName] = useState('');

  const handleCancel = () => {
    // Reset input values and close the modal
    setPrice('');
    setName('');
    onClose();
  };

  const handleEnter = () => {
    // Do something with the input values, e.g., send them to a parent component
    // console.log('Ingredient 1:', ingredient1);
    // console.log('Ingredient 2:', ingredient2);
    
    // Reset input values and close the modal
    setPrice('');
    setName('');
    doPrice();
    onClose();
  };

  const doPrice = async e => {
    // e.preventDefault();
    try {
      const body = { price, name };
      // const response = await fetch("https://yifang-backend.onrender.com/inventory/addIngredient", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body)
      // });
      const response = await fetch("https://yifang-backend.onrender.com/menu/changePrice", {
        method: "PUT",
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

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] flex flex-col justify-center items-center'>
        <input
            className='border border-black p-1 mx-auto my-4'
            type="text"
            placeholder="Menu Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='border border-black p-1 mx-auto my-4'
            type="text"
            placeholder="New Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        <div className='flex justify-center'>
          <button aria-label="Cancel" className='border border-black rounded-lg p-2 mx-2' onClick={handleCancel}>Cancel</button>
          <button aria-label="Enter" className='border border-black rounded-lg p-2 mx-2' onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </div>
  )
}

export default ChangePrice