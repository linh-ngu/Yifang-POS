import React, { useEffect, useState } from 'react';
import AddItem from './menuTableButtons/addItem';
import RemoveItem from './menuTableButtons/removeItem';
import ChangeName from './menuTableButtons/changeName';
import ChangePrice from './menuTableButtons/changePrice';
import ChangeIngredients from './menuTableButtons/changeIngredients';

const Menu = () => {
  const[menu, setMenu] = useState([]);

  const getMenu = async() => {
      try {
          const response = await fetch("http://localhost:5000/manager/menu");
          const jsonData = await response.json();

          setMenu(jsonData);

          console.log(jsonData);
      } catch (err) {
          console.error(err.message);
      }
  } 
  
  useEffect(() => {
      getMenu();
  },[]);

  const [showModel, setShowModel] = useState("");

  const openModel = (val) => {
      setShowModel(val);
  };

  const closeModel = () => {
      setShowModel("");
  };
  
  return (
    <div className=''>
      <table className='w-full text-center border border-black mb-4'>
          <thead>
            <tr>
              <th className='p-1'>Drink ID</th>
              <th className='p-1'>Name</th>
              <th className='p-1'>Price</th>
              <th className='p-1'>Ingredients List</th>
            </tr>
          </thead>
          <tbody>
          {menu.map((base_drink, index) => (
            <tr key={index}>
              <td className='p-1'>{base_drink.base_id}</td>
              <td className='p-1'>{base_drink.name}</td>
              <td className='p-1'>{base_drink.price.toFixed(2)}</td>
              <td className='p-1'>{base_drink.list_ingredients}</td>
            </tr>
          ))}
          </tbody>
      </table>
      <div className='flex justify-center'>
        <button className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("addItem")}>Add Menu Item</button>
        <button className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("removeItem")}>Remove Menu Item</button>
        <button className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("changeName")}>Change Name</button>
        <button className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("changePrice")}>Change Price</button>
        <button className='border border-black shadow-md rounded-lg p-2 m-4' onClick={() => openModel("changeIngredients")}>Change Ingredients List</button>
      </div>
      {showModel === 'addItem' && <AddItem onClose={closeModel} />}
      {showModel === 'removeItem' && <RemoveItem onClose={closeModel} />}
      {showModel === 'changeName' && <ChangeName onClose={closeModel} />}
      {showModel === 'changePrice' && <ChangePrice onClose={closeModel} />}
      {showModel === 'changeIngredients' && <ChangeIngredients onClose={closeModel} />}
    </div>
  )
};

export default Menu;
