import React from 'react'
import Card from '../Card/Card'
import "./Featured.scss"

const data = [
    {
        id: 1,
        img1: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Title",
        isNew: true,
        oldPrice: 20,
        newPrice: 15
    },
    {
        id: 2,
        img1: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Title",
        isNew: true,
        oldPrice: 20,
        newPrice: 15
    },
    {
        id: 3,
        img1: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Title",
        isNew: true,
        oldPrice: 20,
        newPrice: 15
    },
    {
        id: 4,
        img1: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Title",
        isNew: true,
        oldPrice: 20,
        newPrice: 15
    }

]
const Featured = ({ type }) => {
    return (
        <div className='featured'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi sit amet mauris commodo. Enim praesent elementum facilisis leo vel fringilla est.

                </p>
            </div>
            <div className='bottom'>
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Featured