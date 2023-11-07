import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/YifangLogo.png'

function Footer() {
  return (
    <div className='flex bottom-0 justify-center items-center h-[150px] p-0 m-0'>
      <Link to="/">
          <img src={Logo} alt='Logo' className='w-[150px]'/>
      </Link>
    </div>
  )
}

export default Footer
