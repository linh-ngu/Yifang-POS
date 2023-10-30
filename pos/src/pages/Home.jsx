// import React from 'react'
import Video from '../assets/Yifang.mov'
import '../styles/Home.css'
import translateText from '../apirequests/GoogleTranslate';
import React, { useState } from "react";

function Home() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default: Spanish

  const handleTranslate = async () => {
    if (inputText) {
      const translatedText = await translateText(inputText, targetLanguage);
      console.log(translatedText)
      // Do something with the translatedText, e.g., display it on the page.
    }
  };

  return (
    <div className='home'>
      <div className="overlay"></div>
      <video src={Video} autoPlay loop muted/>
      <div className='video-text'>
        <h1>Yi Fang Taiwan Fruit Tea</h1>
        <h3>Authentic  ·  Organic  ·  Fresh</h3>
        {/* adding translate button */}
        <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more language options */}
        </select>
        <button onClick={handleTranslate}>Translate</button>   
      </div>
    </div>
  )
}

export default Home