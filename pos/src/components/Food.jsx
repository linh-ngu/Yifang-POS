import React, { useState} from 'react'
import {data} from '../data/data'


const Food = () => {
    
    const [foods, setFoods] = useState(data)

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            })
        );
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price
            })
        );
    };

    return (
        <div className='max-w-[1640px] m-auto px-16 py-4'>
            <h1 className='font-bold text-4xl text-center'>Menu</h1>
            <div className='flex flex-col justify-between py-4'> {/*filter row*/}
                <div> {/*filter type*/}
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex'>
                        <button onClick={()=> setFoods(data)} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>All</button>
                        <button onClick={()=> filterType('burger')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Burgers</button>
                        <button onClick={()=> filterType('pizza')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Pizza</button>
                        <button onClick={()=> filterType('salad')}className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Salad</button>
                        <button onClick={()=> filterType('chicken')}className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>Chicken</button>
                    </div>
                </div>
                <div> {/*filter price*/}
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex'>
                        <button onClick={()=> filterPrice('$')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>$</button>
                        <button onClick={()=> filterPrice('$$')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>$$</button>
                        <button onClick={()=> filterPrice('$$$')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>$$$</button>
                        <button onClick={()=> filterPrice('$$$$')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4'> {/*display food cards*/}
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-yellow-600 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ) )}
            </div>

        </div>
    )
}

export default Food