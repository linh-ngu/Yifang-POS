// import React from 'react'
import Video from '../assets/Yifang.mov'
import '../styles/Home.css'
import translateText from '../apirequests/GoogleTranslate';
import React, { useState } from "react";
import { useEffect } from "react";

function Home() {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);
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
      <div id="google_translate_element" className='video-text'>
        <h1>Yi Fang Taiwan Fruit Tea</h1>
        <h3>Authentic  ·  Organic  ·  Fresh</h3>
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
          <option value="ZH">Chinese (Mandarin)</option>
        </select>
        <button onClick={handleTranslate}>Translate</button>   
      </div>
    </div>
  )
}

export default Home