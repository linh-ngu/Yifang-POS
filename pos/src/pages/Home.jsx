import React, { useState, useEffect } from 'react'
import Video from '../assets/Yifang.mov'
import '../styles/Home.css'
import getWeather from '../apirequests/AccuWeather';
import Footer from '../components/Footer';

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
 
  const [weatherText, setWeatherText] = useState('');
  const [translatedText] = useState('');

  const handleWeather = async() => {
    const weather = await getWeather();
    setWeatherText(weather.Headline.Text + " - Min: " + weather.DailyForecasts[0].Temperature.Minimum.Value
    + "F, Max: " + weather.DailyForecasts[0].Temperature.Maximum.Value + "F");
    console.log(weather);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="absolute w-full bg-black bg-opacity-50 h-screen top-0"></div>
      <video src={Video} autoPlay loop muted className='top-0 object-cover h-screen'/>
      <div className='video-text'>
        <h1>Yi Fang Taiwan Fruit Tea</h1>
        <h3>Authentic  ·  Organic  ·  Fresh</h3>
        <div>
          <p id="google_translate_element" className='p-4'>{translatedText}</p>
          <button className='weather-button' onClick={handleWeather}>Weather</button>
          <p>{weatherText}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home