import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/YifangLogo.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <Link to="/">
          <img src={Logo} alt='Logo'/>
      </Link>

    </div>
  )
}

export default Footer
