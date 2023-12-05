import React, { useState, useEffect } from 'react'
import {drinksData} from '../assets/drinks'
import Footer from '../components/Footer'

/**
 * 
 * @returns returns and renders the menu for viewing
 */

function Menu() {
  const [drinks, setDrinks] = useState(drinksData)

  // useEffect(() => {
  //   const getDrinks = async () => {
  //     try {
  //       const response = await fetch("https://yifang-backend.onrender.com/order/getDrinks");
  //       const jsonData = await response.json();

  //       setDrinks(jsonData);

  //       console.log(jsonData);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   getDrinks();
  // }, []);

  return (
    <div className='absolute w-full top-[120px]'>
      <div className='max-w-[1640px] m-auto px-16 py-4'>
        <h1 className='font-bold text-4xl text-center p-4'>Menu</h1>
        <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
            {drinks.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] lg:h-[400px] object-cover rounded-t-lg' />
                    <div className='flex justify-between px-2 py-4 bg-white rounded-b-lg'>
                        <p className='font-normal'>{item.name}</p>
                        <p>
                            <span className='border border-black font-thin text-black p-2 rounded-full'>${item.price}</span>
                        </p>
                    </div>
                </div>
            ) )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Menu