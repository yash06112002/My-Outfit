import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
    const data = [
        {
            id: 1,
            img1: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Title",
            desc: "aaaaaaaaaaa ewla;jtera erbfe.aef",
            isNew: true,
            oldPrice: 20,
            newPrice: 15
        },
        {
            id: 2,
            img1: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Title",
            desc: "aaaaaaaaaaa ewla;jtera erbfe.aef",
            isNew: true,
            oldPrice: 20,
            newPrice: 15
        },

    ]
    return (
        <div className='cart'>
            <h1>Your Cart</h1>
            {data?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img1} />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>
                            1 x ${item.newPrice}
                        </div>
                    </div>
                    <DeleteOutlineIcon className='delete' />
                </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>$50</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>RESET</span>
        </div>
    )
}

export default Cart