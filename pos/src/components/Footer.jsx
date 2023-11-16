import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/YifangLogo.png'
import getWeather from '../apirequests/AccuWeather'

function Footer() {

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
    <div className='flex bottom-0 h-[150px] p-0 m-0 justify-center items-center'>
      <Link to="/">
          <img src={Logo} alt='Logo' className='w-[150px]'/>
      </Link>
      {/* <p id="google_translate_element" className='border-4'>{translatedText}</p> */}
      <div className='max-w-[200px]'>
        <button className='bg-[#ADD8E6] p-[10px] rounded-xl' onClick={handleWeather}>Weather</button>
        <p>{weatherText}</p>
      </div>
    </div>
  )
}

export default Footer
