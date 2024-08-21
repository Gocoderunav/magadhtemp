import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logofootnew from '../img/newlogo.jpg'; 
import { FaHome, FaUtensils, FaPhone, FaShoppingCart, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaTree } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';
import { ImLocation2 } from "react-icons/im";
import './Footer.css';

export const Footer = () => {
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const orderRef = useRef(null);
  const date = new Date();

  const toggleOrderOptions = (e) => {
    e.preventDefault();
    setShowOrderOptions(!showOrderOptions);
  };

  const handleClickOutside = (event) => {
    if (orderRef.current && !orderRef.current.contains(event.target)) {
      setShowOrderOptions(false);
    }
  };

  useEffect(() => {
    if (showOrderOptions) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showOrderOptions]);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logofootnew} alt="Magadh Foods" style={{height:"100px", width:"100px"}}/>
          <h3>Magadh Foods</h3>
          <p>Bringing unexplored flavours from Bihar and UP to your plate.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><FaHome aria-label="Home" /> About</Link></li>
            <li><Link to="/menu"><FaUtensils aria-label="Menu" /> Menu</Link></li>
            <li><Link to="/contact"><FaPhone aria-label="Contact" /> Contact</Link></li>
            <li><Link to="/career"><MdOutlineContactMail aria-label="Career" /> Career</Link></li>
            <li style={{position:"relative"}} ref={orderRef}>
              <a href="#" onClick={toggleOrderOptions} aria-label="Order">
                <FaShoppingCart /> Order
              </a>
              {showOrderOptions && (
                <div className="order-options-footer">
                  <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Zomato</a>
                  <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">Swiggy</a>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/magadhfoods?utm_source=qr&igsh=Yml6MGd6M2h0dHls" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/QX2GMRZ5QQtFcCbv/?mibextid=qi2Omg" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@magadhfoods?si=Hkn0Cj7SwABtHUVF" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://wa.me/919385587109" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://linktr.ee/magadhfoods" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
              <FaTree />
            </a>
            <a href="https://maps.app.goo.gl/Qg54WLuEoKwKnAcq8" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Location">
              <ImLocation2 /> 
            </a>
            <a href="https://www.instagram.com/gau_rawww/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />Gaurav
        </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {date.getFullYear()} Magadh Foods. All rights reserved.</p>
        
      </div>
    </footer>
  );
};
