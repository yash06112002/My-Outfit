import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Featured from '../../components/Featured/Featured'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <Featured type="featured" />
            <Categories />
            <Featured type="trending" />
            <Contact />
        </div>
    )
}

export default Home