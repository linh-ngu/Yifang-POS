import React, { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Logo from '../assets/YifangLogo.png'
import Bag from './Bag';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);
    const [isBagOpen, setIsBagOpen] = useState(false);
    const [hoverLogin, setHoverLogin] = useState(false);
    const [hoverBag, setHoverBag] = useState(false);

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
                    <Link to='/menu' className='styled-hover'>Menu</Link>
                    <Link to='/order' className='styled-hover'>Order</Link>
                    <Link to='/login' className='login' onMouseEnter={() => setHoverLogin(true)} onMouseLeave={() => setHoverLogin(false)}>
                        {hoverLogin ? <AccountCircleIcon /> : <AccountCircleOutlinedIcon />}
                    </Link>
                </div>
            </div>
            <div className='rightSide'>
                <div className='navBarButtons'>
                    <Link to='/menu' className='styled-hover'>Menu</Link>
                    <Link to='/order' className='styled-hover'>Order</Link>
                    <Link to='/login' className='-translate-y-[2px]' onMouseEnter={() => setHoverLogin(true)} onMouseLeave={() => setHoverLogin(false)}>
                        {hoverLogin ? <AccountCircleIcon /> : <AccountCircleOutlinedIcon />}
                    </Link>
                    <button aria-label="Shopping bag" onClick={toggleNavbar}><MenuIcon/></button>
                    <div className='bag cursor-pointer -translate-y-[2px]' onMouseEnter={() => setHoverBag(true)} onMouseLeave={() => setHoverBag(false)}>
                        {isBagOpen ? <ShoppingBagIcon onClick={() => setIsBagOpen(!isBagOpen)} /> : (hoverBag ? <ShoppingBagIcon onClick={() => setIsBagOpen(!isBagOpen)} /> : <ShoppingBagOutlinedIcon onClick={() => setIsBagOpen(!isBagOpen)} />)}
                    </div>
                </div>
            </div>
            {isBagOpen && <Bag onClose={closeBag} />}
        </div>
    )
}

export default Navbar
