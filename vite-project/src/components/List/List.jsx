import React from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import "./List.scss"

const List = () => {

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
    ];

    return (
        <div className='list'>
            {data.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List