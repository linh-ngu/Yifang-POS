import React, { useState, useEffect} from 'react'
import {drinksData} from '../assets/drinks'
import Footer from '../components/Footer'
import Customization from '../components/Customization'

function Order() {
  const [drinks, setDrinks] = useState(drinksData)
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleFilter = (category) => {
    if (category === 'All') {
      setDrinks(drinksData);
    } else {
      setDrinks(
        drinksData.filter((item) => {
          return item.category === category;
        })
      );
    }
    setActiveFilter(category);
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    const getDrinks = async () => {
      try {
        //const response = await fetch("http://localhost:5000/order/getDrinks");
        const response = await fetch("https://yifang-backend.onrender.com/order/getDrinks");
        const jsonData = await response.json();
        setDrinks(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    // getDrinks();
  }, []);

  return (
    <div className='absolute top-[150px] w-full'>
      <div className='max-w-[1640px] m-auto px-16 py-4'>
        <h1 className='font-bold text-4xl text-center'>Ordering Menu</h1>
        <div className='flex flex-col justify-between py-4'> {/*filter row*/}
          <div> {/*filter type*/}
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex flex-wrap'>
              <button onClick={() => handleFilter('All')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'All' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>All</button>
              <button onClick={() => handleFilter('Tea')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'Tea' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>Tea</button>
              <button onClick={() => handleFilter('Brown Sugar')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'Brown Sugar' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>Brown Sugar</button>
              <button onClick={() => handleFilter('Milk Tea')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'Milk Tea' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>Milk Tea</button>
              <button onClick={() => handleFilter('Fruits')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'Fruits' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>Fruits</button>
              <button onClick={() => handleFilter('Fresh Sugarcane')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'Fresh Sugarcane' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>Fresh Sugarcane</button>
              <button onClick={() => handleFilter('Fresh Taro/Red Bean')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'Fresh Taro/Red Bean' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>Fresh Taro/Red Bean</button>
              <button onClick={() => handleFilter('Traditional')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'Traditional' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>Traditional</button>
              <button onClick={() => handleFilter('Seasonal')} className={`rounded-lg m-2 p-2 border border-yellow-600 ${activeFilter === 'Seasonal' ? 'bg-yellow-600 text-white' : 'text-yellow-600 hover:bg-yellow-600 hover:text-white'}`}>Seasonal</button>
            </div>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'> {/*display food cards*/}
          {drinks.map((item, index) => (
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={() => openModal(item)}>
              <img src={item.image} alt={item.name} className='w-full h-[200px] lg:h-[400px] object-cover rounded-t-lg' />
              <div className='flex justify-between px-2 py-4 bg-white'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-yellow-600 text-white p-2 rounded-full'>${item.price}</span>
                </p>
              </div>
            </div>
          ) )}
        </div>
        <Customization item={selectedItem} onClose={closeModal} />
      </div>
      <Footer />
    </div>
  )
}

export default Order