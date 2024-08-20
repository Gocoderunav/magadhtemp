
import React, { useState } from 'react';
import './Slides.css';
import imga from "../img/artsimg/newart16.jpg";
import imgb from "../img/artsimg/newart15.jpg";
import imgc from "../img/artsimg/newart14.jpg";

export const Slides = () => {
    const [current, setCurrent] = useState(0);
    const slides = [imga, imgb, imgc];

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider-container">
            <button className="left-arrow" onClick={prevSlide}>
                &lt;
            </button>
            <div className="slider" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`slide ${index === current ? 'active' : ''}`}
                    >
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="right-arrow" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};
