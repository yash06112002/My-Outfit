import React from 'react'
import Card from '../Card/Card'
import "./Featured.scss"
import useFetch from '../../hooks/useFetch'

const Featured = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    return (
        <div className='featured'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi sit amet mauris commodo. Enim praesent elementum facilisis leo vel fringilla est.

                </p>
            </div>
            <div className='bottom'>
                {error ? "Something went wrong" : loading ? "Loading" : data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Featured