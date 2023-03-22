import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./slider.scss"
const Slider = () => {

    const data = [
        "https://images.pexels.com/photos/4495705/pexels-photo-4495705.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600",
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = () => {
        console.log("clicked");
        setCurrentSlide((slideNum) => (slideNum + 2) % 3)
    }
    const nextSlide = () => {
        console.log("clicked");
        setCurrentSlide((slideNum) => (slideNum + 1) % 3)

    }
    return (
        <div className='slider'>
            <div className='container' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} />
                <img src={data[1]} />
                <img src={data[2]} />
            </div>
            <div className='icons'>
                <div className='icon' onClick={prevSlide}><ArrowBackIcon /></div>
                <div className='icon' onClick={nextSlide}><ArrowForwardIcon /></div>
            </div>
        </div>
    )
}

export default Slider