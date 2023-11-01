import React from 'react'
import mangoPomeloSagoCooler from '../assets/mangoPomeloSagoCooler.jpeg'
import superTrioTraditionalMilkTea from '../assets/superTrioTraditionalMilkTea.jpeg'
import avocadoMangoAgarCooler from '../assets/avocadoMangoAgarCooler.png'
// import '../styles/Cards.css'

function Cards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 bg-green-900'>
        <div className='rounded-xl relative h-64'>   
            <div className='absolute w-full h-full bg-black bg-opacity-50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Mango Pomelo Sago Cooler</p>
              <p className='px-2'>test</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>order</button>
            </div>
            <img className='w-full h-full object-cover rounded-xl'
            src={mangoPomeloSagoCooler} alt="mango pomelo sago cooler" />
        </div>
        <div className='rounded-xl relative h-64'>   
            <div className='absolute w-full h-full bg-black bg-opacity-50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Avocado Mango Agar Cooler</p>
              <p className='px-2'>test</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>order</button>
            </div>
            <img className='w-full h-full object-cover rounded-xl'
            src={avocadoMangoAgarCooler} alt="avocado mango agar cooler" />
        </div>
        <div className='rounded-xl relative h-64'>   
            <div className='absolute w-full h-full bg-black bg-opacity-50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Super Trio Traditional Milk Tea</p>
              <p className='px-2'>test</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>order</button>
            </div>
            <img className='w-full h-full object-cover rounded-xl'
            src={superTrioTraditionalMilkTea} alt="super trio traditional milk tea" />
        </div>
    </div>
  )
}

export default Cards