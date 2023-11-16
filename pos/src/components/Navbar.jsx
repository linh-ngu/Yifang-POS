import React, { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Logo from '../assets/YifangLogo.png'
import Bag from './Bag';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);
    const [isBagOpen, setIsBagOpen] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    const closeBag = () => {
        setIsBagOpen(false);
    };

    return (
        <div className='navbar w-full h-[150px] flex justify-between absolute z-10 backdrop-blur-sm'>
            <div className='flex items-center justify-center' id={openLinks ? "open" : "close"}>
            <Link to="/">
                <img src={Logo} alt='Logo' className='w-[150px]'/>
            </Link>
                <div className='hiddenLinks'>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/login'><AccountCircleOutlinedIcon/></Link>
                </div>
            </div>
            <div className='rightSide'>
                <div className='navBarButtons'>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/login'><AccountCircleOutlinedIcon/></Link>
                    <button onClick={toggleNavbar}><MenuIcon/></button>
                    <ShoppingBagOutlinedIcon className='bag cursor-pointer' onClick={() => setIsBagOpen(!isBagOpen)}/>
                </div>
            </div>
            {isBagOpen && <Bag onClose={closeBag} />}
        </div>
    )
}

export default Navbar
