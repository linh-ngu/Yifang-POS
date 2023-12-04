import React, { useState } from 'react';

const ChangeName = ({onClose}) => {

  const [new_name, setNewName] = useState('');
  const [name, setName] = useState('');

  const handleCancel = () => {
    // Reset input values and close the modal
    setNewName('');
    setName('');
    onClose();
  };

  const handleEnter = () => {
    // Do something with the input values, e.g., send them to a parent component
    // console.log('Ingredient 1:', ingredient1);
    // console.log('Ingredient 2:', ingredient2);
    
    // Reset input values and close the modal
    setNewName('');
    setName('');
    doNewName();
    onClose();
  };

  const doNewName = async e => {
    // e.preventDefault();
    try {
      const body = { new_name, name };
      // const response = await fetch("https://yifang-backend.onrender.com/inventory/addIngredient", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body)
      // });
      const response = await fetch("http://localhost:5000/inventory/changeName", {
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
              placeholder="Old Ingredient Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
        />
        <input
              className='border border-black p-1 mx-auto my-4'
              type="text"
              placeholder="New Ingredient Name"
              value={new_name}
              onChange={(e) => setNewName(e.target.value)}
        />
        <div className='flex justify-center'>
          <button aria-label="Cancel" className='border border-black rounded-lg p-2 mx-2' onClick={handleCancel}>Cancel</button>
          <button aria-label="Enter" className='border border-black rounded-lg p-2 mx-2' onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeName