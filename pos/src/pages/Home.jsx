import React from 'react'
import Video from '../assets/Yifang.mov'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="overlay"></div>
      <video src={Video} autoPlay loop muted/>
      <div className='video-text'>
        <h1>Yi Fang Taiwan Fruit Tea</h1>
        <h3>Authentic  ·  Organic  ·  Fresh</h3>
      </div>
    </div>
  )
}

export default Home