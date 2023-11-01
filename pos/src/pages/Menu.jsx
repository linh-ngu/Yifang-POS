import React from 'react'
import Cards from '../components/Cards'
import Food from '../components/Food'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <div className="menu-wrap">
            {/* <Cards /> */}
            <Food />
        </div>
    </div>
  )
}

export default Menu