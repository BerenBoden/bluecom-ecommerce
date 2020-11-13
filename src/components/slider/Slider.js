import React from 'react';
import ItemData from '../../data/data.json';
import './Slider.css';
import Slide from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true
    };

    const image = ItemData.map(image => {
        return( 
            <div key={image._id} className="slider__container">
                <img src={image.picture} alt="" />
            </div>
        )
    })

    return (
        <Slide {...settings}>
            {image}
        </Slide>
    )
}

export default Slider