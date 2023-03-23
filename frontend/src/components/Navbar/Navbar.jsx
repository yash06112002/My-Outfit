import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const products = useSelector(state => state.cart.products)
    const [open, setOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item'>
                        <img src=''></img>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className='link' to="/">MY OUTFITS</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='link' to="/products/3">Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/3">About</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/3">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/3">Stores</Link>
                    </div>
                    <div className='icons'>
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className='cartIcon' onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar