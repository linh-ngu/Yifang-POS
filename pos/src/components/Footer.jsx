import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/YifangLogo.png'
import getWeather from '../apirequests/AccuWeather'
/**
 * @returns footer with apis and logos
 */
function Footer() {

  const [weatherText, setWeatherText] = useState('');
  const [translatedText] = useState('');

  const handleWeather = async() => {
    const weather = await getWeather();
    setWeatherText(weather.Headline.Text + " - Min: " + weather.DailyForecasts[0].Temperature.Minimum.Value
    + "F, Max: " + weather.DailyForecasts[0].Temperature.Maximum.Value + "F");
    console.log(weather);
  }

  return (
    <div className='flex flex-col bottom-0 min-h-[150px] p-0 m-0 justify-center items-center'>
      <Link to="/">
          <img src={Logo} alt='Logo' className='w-[150px] p-2'/>
      </Link>
      <div className='flex justify-center items-center'>
        <button aria-label="Weather" className='border border-black p-2 m-2 rounded-xl' onClick={handleWeather}>Weather</button>
        <p className='border border-black rounded-xl text-center p-2'>{weatherText}</p>
      </div>
    </div>
  )
}

export default Footer;
