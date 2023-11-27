import React, { useState, useEffect, useContext } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {toppingsData} from '../assets/toppings'
import { ShopContext } from '../contexts/ShopContextProvider';

const Customization = ({ item, onClose }) => {

  const [toppings] = useState(toppingsData)
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const { addToBag } = useContext(ShopContext);

  const handleToppingClick = (topping) => {
    setSelectedToppings(prev => {
      if (prev.includes(topping)) {
        setPrice(price - 0.75);
        return prev.filter(t => t !== topping);
      } else {
        setPrice(price + 0.75);
        return [...prev, topping];
      }
    });
  };

  const handleAddToBag = (item) => {
    addToBag(item.name, count, selectedToppings, price);
    setSelectedToppings([]);
    setCount(1);
    setPrice(0);
    onClose();
  };

  const getIngredients = async (drinkName) => {
    try {
      const response = await fetch(`https://yifang-backend.onrender.com/order/getIngredients?name=${encodeURIComponent(drinkName)}`);
      const jsonData = await response.json();
      return jsonData[0].list_ingredients;
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleClick = (operation) => {
    if (count === 1 && operation === 'decrement') return;
    if (operation === 'increment') {
      setCount(count + 1);
      setPrice(price + (price/count))
    } else if (operation === 'decrement') {
      setCount(count - 1);
      setPrice(price - (price/count))
    }
  };

  useEffect(() => {
    if (item) {
      getIngredients(item.name).then(setIngredients);
      setPrice(parseFloat(item.price));
    }
  }, [item]);

  if (!item) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8" onClick={() => {onClose(); setCount(1); setSelectedToppings([]);}}>
      <div className="relative bg-white rounded-lg overflow-y-scroll max-h-[calc(100vh-200px)] w-[600px]" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.name} className='h-[300px] w-full object-cover rounded-t-lg'/>
        <div className='px-8'>
          <h2 className="text-xl font-bold pt-4 pb-2">{item.name}</h2>
          <p className='pb-4'>{ingredients.join(', ')}</p>
          <hr className='solid'></hr>
          <h3 className='py-4 font-bold'>Add Toppings (additional charge)</h3>
          <div className='grid grid-cols-2 gap-3 pt-2 pb-5'>
            {toppings.map((item, index) => (
              <div key={index} className={`border shadow-lg rounded-lg hover:scale-105 duration-300 ${selectedToppings.includes(item.name) ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleToppingClick(item.name)}>
                <div className='flex justify-between px-2 py-4'>
                  <p className='font-medium px-2'>{item.name}</p>
                  <p className='font-medium px-2'>+$0.75</p>
                </div>
              </div>
            ) )}
          </div>
          <hr className='solid'></hr>
          <h3 className='py-4 font-bold'>Special Instructions</h3>
          <textarea className='border rounded-lg w-full h-24 p-2'></textarea>
        </div>
        <button onClick={() => { onClose(); setCount(1); }} className='bg-white absolute top-2 right-3 m-2 rounded-full p-2'><CloseOutlinedIcon/></button>
        <div className='border bg-white h-[72px] sticky bottom-0 mt-2 flex justify-between items-center'>
          <div className='flex justify-center items-center m-4'>
            <button className='m-2 cursor-pointer' onClick={() => handleClick('decrement')}>-</button>
            <p>
              <span className='bg-blue-200 text-black p-2 rounded-full'>{count}</span>
            </p>
            <button className='m-2 cursor-pointer' onClick={() => handleClick('increment')}>+</button>
          </div>
          <button className='bg-blue-500 text-white rounded-full h-10 w-full m-6' onClick={() => {handleAddToBag(item)}}>Add to Bag - ${price.toFixed(2)}</button>
        </div>
      </div>
    </div>
  );
};

export default Customization