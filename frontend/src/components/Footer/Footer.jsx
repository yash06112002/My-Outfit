import React from 'react'
import "./footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='item'>
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className='item'>
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className='item'>
                    <h1>
                        About
                    </h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi sit amet mauris commodo. Enim praesent elementum facilisis leo vel fringilla est.
                    </span>
                </div>
                <div className='item'>
                    <h1>
                        Contact
                    </h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi sit amet mauris commodo. Enim praesent elementum facilisis leo vel fringilla est.
                    </span>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <span className='logo'>My Outfits</span>
                    <span className='copyright'>Copyright 2023. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer