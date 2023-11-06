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
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
            <Link to="/">
                <img src={Logo} alt='Logo'/>
            </Link>
                <div className='hiddenLinks'>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/manager'>Manager</Link>
                </div>
            </div>
            <div className='rightSide'>
                <div className='navBarButtons'>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/manager'>Manager</Link>
                    <button onClick={toggleNavbar}>
                        <MenuIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar