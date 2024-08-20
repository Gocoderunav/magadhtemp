

import React, { useState } from 'react';
import './Arts.css';
import imgone from "../img/artsimg/newart1.jpg";
import imgtwo from "../img/artsimg/newart9.jpg";
import imgthree from "../img/artsimg/newart8.jpg";
import imgfour from "../img/artsimg/newart3.jpg";

export const Arts = () => {
    const [current, setCurrent] = useState(0);
    const slides = [
        { image: imgone, description: "Magadh Food is inspired by the rich flavors of Bihar, bringing the essence of Chandragupta's era to your plate." },
         { image: imgtwo, description: "Indulge in the authentic taste of Bihar with our traditional dishes, crafted with care and precision." },
        { image: imgthree, description: "Experience the vibrant culture of Bihar through our culinary masterpieces, each dish telling a story of its own." },
        { image: imgfour, description: "Immerse yourself in the exquisite details of our cuisine, where every flavor is a journey through the history of Bihar." }

    ];

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider-container">
            <button className="arrow left-arrow" onClick={prevSlide}>
                &lt;
            </button>
            <div className="slider" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`slide ${index === current ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                        <div className="description">{slide.description}</div>
                    </div>
                ))}
            </div>
            <button className="arrow right-arrow" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};