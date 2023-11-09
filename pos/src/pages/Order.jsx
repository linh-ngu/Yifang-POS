import React, { useState} from 'react'
import {drinksData} from '../assets/drinks'
import {toppingsData} from '../assets/toppings'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Footer from '../components/Footer'

function Order() {
  const [drinks, setDrinks] = useState(drinksData)
  const [toppings] = useState(toppingsData)
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
    
  const Customization = ({ item, onClose }) => {
    if (!item) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8" onClick={onClose}>
        <div className="relative bg-white rounded-lg overflow-y-scroll max-h-[calc(100vh-200px)]" onClick={(e) => e.stopPropagation()}>
          <img src={item.image} alt={item.name} className='h-[300px] w-[590px] object-cover rounded-t-lg'/>
          <div className='px-8'>
            <h2 className="text-xl font-bold pt-4 pb-2">{item.name}</h2>
            <p className='pb-4'>add ingredients</p>
            <hr className='solid'></hr>
            <h3 className='py-4 font-bold'>Add Toppings (Additional)</h3>
            <div className='grid grid-cols-2 gap-3 pt-2 pb-5'>
              {toppings.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                  <div className='flex justify-between px-2 py-4'>
                    <p className='font-medium px-2'>{item.name}</p>
                  </div>
                </div>
              ) )}
            </div>
            <hr className='solid'></hr>
            <h3 className='py-4 font-bold'>Special Instructions</h3>
            <textarea className='border rounded-lg w-full h-24'></textarea>
          </div>
          <button onClick={onClose} className='bg-white absolute top-2 right-3 m-2 rounded-full p-2'><CloseOutlinedIcon/></button>
          <div className='border bg-white h-[72px] sticky bottom-0 mt-2 flex justify-between items-center'>
            <div className='flex justify-center items-center m-4'>
              <button className='m-2 cursor-pointer'>-</button>
              <p>
                <span className='bg-blue-200 text-black p-2 rounded-full'>1</span> {/*change price to count*/}
              </p>
              <button className='m-2 cursor-pointer'>+</button>
            </div>
            <button className='bg-blue-500 rounded-full h-10 w-full m-6' onClick={onClose}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };

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
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300' onClick={() => openModal(item)}>
              <img src={item.image} alt={item.name} className='w-full h-[200px] lg:h-[400px] object-cover rounded-t-lg' />
              <div className='flex justify-between px-2 py-4 bg-white'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-yellow-600 text-white p-2 rounded-full'>{item.price}</span>
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