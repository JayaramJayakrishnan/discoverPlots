import React, { useState } from "react";
import Slider from "react-slick"
import {v4 as uuidv4} from 'uuid'
import {GrNext, GrPrevious} from 'react-icons/gr'
import {BsFillPlayFill} from 'react-icons/bs'

import './index.css'

const images = [
    {
        id: uuidv4(),
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1684000263/Rectangle_66_lyb5cu.png",
    },

    {
        id: uuidv4(),
        imgUrl: "https://media.istockphoto.com/id/1398069511/photo/affectionate-and-loving-mixed-race-family-sitting-together-happy-family-with-two-daughters.jpg?b=1&s=170667a&w=0&k=20&c=-LaoBRGsOW_iBFY0uMQCms0aI8sLNdN8dx1yBmC-00o=",
    },

    {
        id: uuidv4(),
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1684000264/Rectangle_67_vkixbn.png",
    },

    {
        id: uuidv4(),
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1684000263/Rectangle_66_lyb5cu.png",
    },

    {
        id: uuidv4(),
        imgUrl: "https://media.istockphoto.com/id/1398069511/photo/affectionate-and-loving-mixed-race-family-sitting-together-happy-family-with-two-daughters.jpg?b=1&s=170667a&w=0&k=20&c=-LaoBRGsOW_iBFY0uMQCms0aI8sLNdN8dx1yBmC-00o=",
    },

    {
        id: uuidv4(),
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1684000264/Rectangle_67_vkixbn.png",
    },
]

const TestimonialsSection = () => {

    const NextButton = ({onClick}) => (
        <button type="button" className="navigation-button next-button-position" onClick={onClick}>
            <GrNext />
        </button>)

    const PrevButton = ({onClick}) =>( 
        <button type="button" className="navigation-button prev-button-position" onClick={onClick}>
            <GrPrevious />
        </button>)
    

    const [imgIndex, updateImgIndex] = useState(0)

    const settings = {
        infiniteScroll:true, 
        speed: 300, 
        slidesToShow: 3, 
        slidesToScroll: 3,
        centerMode: true, 
        centerPadding: 0,
        nextArrow: <NextButton />, 
        prevArrow: <PrevButton />, 
        beforeChange: (current, next) => updateImgIndex(next)
    }

    return(
    <div className="testimonials-section">
        <div className="testimonials-section-content">
            <h1 className="testimonials-section-heading">Clients Testimonials</h1>
            <Slider {...settings} >
                {images.map((item, index) => (
                <div className={index === imgIndex ? 'active-slide slide' : 'slide'} key={item.id}>   
                    <img src={item.imgUrl} alt="slide" className="slide-image"/>
                </div>
                ))}
            </Slider>

            <div className="play-icon-container">
                <BsFillPlayFill className="play-icon" />
            </div>
        </div>
    </div>
)}

export default TestimonialsSection


