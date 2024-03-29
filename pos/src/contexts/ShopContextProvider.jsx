import React, { useState } from 'react'
/**
 * @returns and maintains current state of checkout bag
 */
export const ShopContext = React.createContext(null);

export const ShopContextProvider = (props) => {
  
  let [bagItems, setBagItems] = useState({});
  const [counter, setCounter] = useState(1);

  const addToBag = (name, count, toppings, price) => {
    setCounter(counter + 1);
    setBagItems(prev => ({
      ...prev,
      [counter]: { name, count, toppings, price }
    }));
  };

  const removeFromBag = (key) => {
    setBagItems(prev => {
      const newBagItems = { ...prev };
      delete newBagItems[key];
      return newBagItems;
    });
  };

  const contextValue = {bagItems, addToBag, removeFromBag, clearBag: () => setBagItems({})};
  
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
};
