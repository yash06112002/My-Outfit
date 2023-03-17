import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
    const [index, setIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = [
        "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg?auto=compress&cs=tinysrgb&w=600",

    ]
    return (
        <div className='product'>
            <div className='left'>
                <div className='images'>
                    <img src={images[0]} onClick={e => setIndex(0)} />
                    <img src={images[1]} onClick={e => setIndex(1)} />
                </div>
                <div className='mainImage'>
                    <img src={images[index]} />
                </div>
            </div>
            <div className='right'>
                <h1>Title</h1>
                <span className='price'>$20</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi sit amet mauris commodo. Enim praesent elementum facilisis leo vel fringilla est.
                </p>
                <div className='quantity'>
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className='links'>
                    <div className='item'>
                        <FavoriteBorderIcon /> ADD TO WISHLIST
                    </div>
                    <div className='item'>
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className='info'>
                    <span>Vender: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Men</span>
                </div>
                <hr />
                <div className='info'>
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product