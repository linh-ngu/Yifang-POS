import React, { useState} from 'react'
import {drinksData} from '../assets/drinks'


const Food = () => {

    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilter = (category) => {
        if (category === 'All') {
          setFoods(drinksData);
        } else {
          setFoods(
            drinksData.filter((item) => {
              return item.category === category;
            })
          );
        }
        setActiveFilter(category);
      };
    
    const [foods, setFoods] = useState(drinksData)

    return (
        <div className='max-w-[1640px] m-auto px-16 py-4'>
            <h1 className='font-bold text-4xl text-center'>Menu</h1>
            <div className='flex flex-col justify-between py-4'> {/*filter row*/}
                <div> {/*filter type*/}
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div>
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

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4'> {/*display food cards*/}
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[400px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-yellow-600 text-white p-2 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ) )}
            </div>

        </div>
    )
}

export default Food