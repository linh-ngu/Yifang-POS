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
    <div className='absolute top-[130px] w-full'>
      <div className='max-w-[1640px] m-auto px-16 py-4'>
        <h1 className='font-bold text-4xl text-center'>Ordering Menu</h1>
        <div className='flex flex-col justify-between py-4'> {/*filter row*/}
          <div> {/*filter type*/}
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex flex-wrap'>
              <button aria-label="All" onClick={() => handleFilter('All')} className={`rounded-lg m-3 p-2 border border-black shadow-md ${activeFilter === 'All' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>All</button>
              <button aria-label="Tea" onClick={() => handleFilter('Tea')} className={`rounded-lg m-2 p-2 border border-black shadow-md ${activeFilter === 'Tea' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>Tea</button>
              <button aria-label="Brown sugar" onClick={() => handleFilter('Brown Sugar')} className={`rounded-lg m-2 p-2 border border-black shadow-md ${activeFilter === 'Brown Sugar' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>Brown Sugar</button>
              <button aria-label="Milk tea" onClick={() => handleFilter('Milk Tea')} className={`rounded-lg m-2 p-2 border border-black shadow-md ${activeFilter === 'Milk Tea' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>Milk Tea</button>
              <button aria-label="Fruits" onClick={() => handleFilter('Fruits')} className={`rounded-lg m-2 p-2 border border-black shadow-md ${activeFilter === 'Fruits' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>Fruits</button>
              <button aria-label="Fresh sugarcane" onClick={() => handleFilter('Fresh Sugarcane')} className={`rounded-lg m-2 p-2 border border-black shadow-md ${activeFilter === 'Fresh Sugarcane' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>Fresh Sugarcane</button>
              <button aria-label="Fresh taro or red bean" onClick={() => handleFilter('Fresh Taro/Red Bean')} className={`rounded-lg m-2 p-2 border border-black shadow-md ${activeFilter === 'Fresh Taro/Red Bean' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>Fresh Taro/Red Bean</button>
              <button aria-label="Traditional" onClick={() => handleFilter('Traditional')} className={`rounded-lg m-2 p-2 border border-black shadow-md ${activeFilter === 'Traditional' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>Traditional</button>
              <button aria-label="Seasonal" onClick={() => handleFilter('Seasonal')} className={`rounded-lg m-2 p-2 border border-black shadow-md ${activeFilter === 'Seasonal' ? 'bg-black text-white font-thin' : 'text-black font-thin hover:bg-black hover:text-white duration-300'}`}>Seasonal</button>
            </div>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'> {/*display food cards*/}
          {drinks.map((item, index) => (
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={() => openModal(item)}>
              <img src={item.image} alt={item.name} className='w-full h-[200px] lg:h-[400px] object-cover rounded-t-lg' />
              <div className='flex justify-between px-2 py-4 bg-white rounded-b-lg'>
                <p className='font-normal'>{item.name}</p>
                <p>
                  <span className='border border-black text-black font-thin p-2 rounded-full'>${item.price}</span>
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