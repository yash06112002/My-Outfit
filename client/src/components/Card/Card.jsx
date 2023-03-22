import React from 'react'
import "./Card.scss"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='card'>
                <div className='image'>
                    {item?.attributes.isNew && <span>NEW</span>}
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.attributes?.img1?.data?.attributes?.url} className="mainImg" />
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url} className="secondImg" />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className='prices'>
                    <h3>${item.oldPrice || item?.attributes.price + 10}</h3>
                    <h3>${item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card