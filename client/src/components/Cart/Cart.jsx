import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
// import {s} from ""
const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;

        products.forEach(element => {
            total += element.price * element.quantity
        });
        return total.toFixed(2);
    }
    const stripePromise = loadStripe('pk_test_51MoMQGSArvp0a0ZTI02bZmkvMd5Qk3PBh6KRPM5KlhbDbLIStmmY2hlx70sTovQE01yJDn5G5eqw9mtDTLcRHetX00jS2r2Flw');

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='cart'>
            <h1>Your Cart</h1>
            {products?.map(item => (
                <div className='item' key={item.id}>
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img1} />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>RESET</span>
        </div>
    )
}

export default Cart