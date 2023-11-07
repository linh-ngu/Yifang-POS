import React, { useState } from 'react'
import Logo from '../assets/YifangLogo.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
    return (
        <div className='navbar w-full h-[150px] flex justify-between absolute z-10 backdrop-blur-sm'>
            <div className='flex items-center justify-center' id={openLinks ? "open" : "close"}>
            <Link to="/">
                <img src={Logo} alt='Logo' className='w-[150px]'/>
            </Link>
                <div className='hiddenLinks'>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/manager'>Manager</Link>
                    <Link to='/cashier'>Cashier</Link>
                </div>
            </div>
            <div className='rightSide'>
                <div className='navBarButtons'>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/manager'>Manager</Link>
                    <Link to='/cashier'>Cashier</Link>
                    <button onClick={toggleNavbar}>
                        <MenuIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
