import React from 'react'
import Video from '../assets/Yifang.mov'
import '../styles/Home.css'
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='flex flex-col justify-center items-center p-0 m-0'>
      <div className="absolute w-full bg-black bg-opacity-50 h-screen top-0"></div>
      <video src={Video} autoPlay loop muted className='top-0 object-cover h-screen w-screen'/>
      <div className='absolute text-center text-white transform -translate-y-10'>
        <h1 className='text-7xl p-4'>Yi Fang Taiwan Fruit Tea</h1>
        <h2 className='text-3xl p-4'>Authentic  ·  Organic  ·  Fresh</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Home