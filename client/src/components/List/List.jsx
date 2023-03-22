import React from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import "./List.scss"
import useFetch from '../../hooks/useFetch';

const List = ({ selectedCats, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(`/products?populate=*
    &[filters][categories][id][$eq]=${catId}
    ${selectedCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}
    &sort=price:${sort}`)

    return (
        <div className='list'>
            {loading ? "Loading" : data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List