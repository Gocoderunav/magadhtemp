
import React, { useEffect, useRef } from 'react';
import imga from "../img/itemsimg/Tikona Paratha.jpg";
import imgb from "../img/itemsimg/Aaloo Paratha.jpg";
import imgc from "../img/itemsimg/Tulsi Kadha with Milk.jpg";
import imgd from "../img/itemsimg/Sattu Drink.jpg";
import imge from "../img/itemsimg/Jal Jeera.jpg";
import imgf from "../img/itemsimg/Nibbu Paani.jpg";
import imgg from "../img/itemsimg/Sevai Kheer.jpg";
import imgh from "../img/itemsimg/Besan Halwa.jpg";
import imgi from "../img/itemsimg/Basmati Rice kheer.jpg";
import "./livescroll.css";

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

export const Livescroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth / 2;
      const animationDuration = scrollWidth / 50; // Adjust speed here

      scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`);
      scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`);
    }
  }, []);

  return (
    <div className="livescroll-carousel">
      
      <div className="livescroll-container">
        <div className="livescroll-items" ref={scrollRef}>
          {[...foodItems, ...foodItems].map((item, index) => (
            <div key={index} className="livescroll-item">
              <img src={item.img} alt={item.itemName} />
              <p>{item.itemName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};