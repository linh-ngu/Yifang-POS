import React, { useState, useEffect } from 'react'
import Video from '../assets/Yifang.mov'
import '../styles/Home.css'
// import translateText from '../apirequests/GoogleTranslate';
import getWeather from '../apirequests/AccuWeather';

function Home() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
        
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  // const [inputText, setInputText] = useState('');
  // const [targetLanguage, setTargetLanguage] = useState('es'); // Default: Spanish
  const [weatherText, setWeatherText] = useState('');
  const [translatedText] = useState('');

  // const handleTranslate = async () => {
  //   if (inputText) {
  //     const translated = await translateText(inputText, targetLanguage);
  //     setTranslatedText(translated);
  //     console.log(translated);
  //   }
  // };

  const handleWeather = async() => {
    const weather = await getWeather();
    setWeatherText(weather.Headline.Text + " - Min: " + weather.DailyForecasts[0].Temperature.Minimum.Value
    + "F, Max: " + weather.DailyForecasts[0].Temperature.Maximum.Value + "F");
    console.log(weather);
  }

  return (
    <div className='home'>
      <div className="overlay"></div>
      <video src={Video} autoPlay loop muted/>
      <div id="google_translate_element" className='video-text'>
        <h1>Yi Fang Taiwan Fruit Tea</h1>
        <h3>Authentic  ·  Organic  ·  Fresh</h3>
        <div>
          <p>{translatedText}</p>
          <button className='weather-button' onClick={handleWeather}>Weather</button>
          <p>{weatherText}</p>
        </div>
      </div>
    </div>
  )
}

export default Home