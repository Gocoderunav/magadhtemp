import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Itemsmove.css';
import imga from "../img/itemsimg/Tikona Paratha.jpg";
import imgb from "../img/itemsimg/Aaloo Paratha.jpg";
import imgc from "../img/itemsimg/Tulsi Kadha with Milk.jpg";
import imgd from "../img/itemsimg/Sattu Drink.jpg";
import imge from "../img/itemsimg/Jal Jeera.jpg";
import imgf from "../img/itemsimg/Nibbu Paani.jpg";
import imgg from "../img/itemsimg/Sevai Kheer.jpg";
import imgh from "../img/itemsimg/Besan Halwa.jpg";
import imgi from "../img/itemsimg/Basmati Rice kheer.jpg";
import { Link } from 'react-router-dom';

export const foodItems = [
  { img: imga, itemName: "Tikona Paratha" },
  { img: imgb, itemName: "Aaloo Paratha" },
  { img: imgc, itemName: "Tulsi Kadha" },
  { img: imgd, itemName: "Sattu Drink" },
  { img: imge, itemName: "Jal Jeera" },
  { img: imgf, itemName: "Nibbu Paani" },
  { img: imgg, itemName: "Sevai Kheer" },
  { img: imgh, itemName: "Besan Halwa" },
  { img: imgi, itemName: "Basmati Rice Kheer" },
 
];



export const Itemsmove = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();



  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? foodItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex === foodItems.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleItems = [...foodItems.slice(startIndex), ...foodItems.slice(0, startIndex)].slice(0, 6);

  return (
    <div className="food-carousel">
      <h2>What's on your mind?</h2>
      <div className="carousel-container">
        <button className="nav-button prev" onClick={handlePrev}>&lt;</button>
        <div className="food-items">
          {visibleItems.map((item, index) => (
            <div key={index} className="food-item">
              <Link to="/menu"><img src={item.img} alt={item.itemName} /></Link>
              
              <p>{item.itemName}</p>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={handleNext}>&gt;</button>
      </div>
      <div className="btn" style={{display:"flex", justifyContent:"center"}}>
      <button 
  onClick={() => navigate("/menu")} 
  style={{
    backgroundColor: "#3498DB", // Replace this with your desired color code
    border: "none", 
    padding: "8px", 
    color: "white",
    cursor: "pointer" // Optional: Adds pointer cursor on hover
  }}
>
  Explore Menu
</button>

      </div>
     
    </div>
  );
};
