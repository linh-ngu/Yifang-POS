import React, { useState, useEffect } from 'react';

const AddItem = ({ onClose }) => {
  // State to store input values
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [listIngredients, setIngredients] = useState('');
  const [baseID, setID] = useState([]);

  const getID = async () => {
    try {
      const response = await fetch("http://localhost:5000/menu/getbaseID");
      const jsonData = await response.json();

      setID(jsonData[0].base_id + 1);

      console.log(jsonData[0].base_id + 1);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getID();
  }, []);

  const doAddItem = async () => {
    try {
      const body = { name, price, listIngredients, baseID };
      const response = await fetch("http://localhost:5000/menu/addmenuitem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleCancel = () => {
    // Reset input values and close the modal
    setName('');
    setPrice('');
    setIngredients('');
    setID([]);
    onClose();
  };

  const handleEnter = () => {
    // Do something with the input values, e.g., send them to a parent component
    // Reset input values and close the modal
    setName('');
    setPrice('');
    setIngredients('');
    setID([]);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] flex flex-col justify-center items-center'>
        <input
          className='border border-black p-1 mx-auto my-4'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='border border-black p-1 mx-auto my-4'
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className='border border-black p-1 mx-auto my-4'
          type="text"
          placeholder="Ingredients List"
          value={listIngredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <div className='flex justify-center'>
          <button className='border border-black rounded-lg p-2 mx-2' onClick={handleCancel}>Cancel</button>
          <button className='border border-black rounded-lg p-2 mx-2' onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
