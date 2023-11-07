import React, { useState} from 'react'
import {data} from '../assets/data'

const Drink = () => {
    
    const [orders, setDrinks] = useState(data)

    const filterType = (category) => {
        setDrinks(
            data.filter((item) => {
                return item.category === category
            })
        );
    };
    
    //customization stuff
    const Customization = ({ item, onClose }) => {
        if (!item) return null;
      
        return (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded-lg">
              {/* Add your customization fields here */}
              <img src={item.image} alt={item.name} 
              className='h-[300px] w-[590px] object-cover rounded-t-lg'/>
              <div className='px-8'>
                <h2 className="text-xl font-bold pt-4 pb-2">{item.name}</h2>
                <p className='pb-4'>add ingredients</p>
                <hr className='solid'></hr>
                <h3 className='py-4'>Add Toppings (Additional)</h3>
                <div className='grid grid-cols-2 gap-3 pt-4'>
                    
                </div>
              </div>
              <button onClick={onClose} className="border px-4 py-2 mt-4">Close</button>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      };

    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className='max-w-[1640px] m-auto px-16 py-4'>
            <h1 className='font-bold text-4xl text-center'>Ordering Menu</h1>
            <div className='flex flex-col justify-between py-4'> {/*filter row*/}
                <div> {/*filter type*/}
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex'>
                        <button onClick={()=> setDrinks(data)} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>All</button>
                        <button onClick={()=> filterType('Tea')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Tea</button>
                        <button onClick={()=> filterType('Brown Sugar')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Brown Sugar</button>
                        <button onClick={()=> filterType('Milk Tea')}className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Milk Tea</button>
                        <button onClick={()=> filterType('Fruits')}className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Fruits</button>
                        <button onClick={()=> filterType('Fresh Sugarcane')}className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Fresh Sugarcane</button>
                        <button onClick={()=> filterType('Fresh Taro/Red Bean')}className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Fresh Taro/Red Bean</button>
                        <button onClick={()=> filterType('Traditional')}className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Traditional</button>
                        <button onClick={()=> filterType('Seasonal')}className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Seasonal</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4'> {/*display food cards*/}
                {orders.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300' onClick={() => openModal(item)}>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[400px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-yellow-600 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ) )}
            </div>
                    {/* Modal component */}
            <Customization item={selectedItem} onClose={closeModal} />
        </div>
    )
}

export default Drink