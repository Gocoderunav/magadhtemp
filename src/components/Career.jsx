import React from 'react'
import './Career.css';
import { AiOutlineMail } from "react-icons/ai";
import imgteam from '../img/artsimg/team3.jpg';
import { FiPhone } from "react-icons/fi";
import { FaTree } from 'react-icons/fa';

export const Career = () => {
  return (
    <div className="career-page">
    <div className="career-image">
        <img src={imgteam} alt="Career Opportunities" />
    </div>
    <div className="career-content">
        <h1>Join Our Team</h1>
        <p>We are always looking for talented individuals to join our team. If you’re passionate, driven, and ready to make an impact, we’d love to hear from you.</p>
        
        <h2>Contact Us</h2>
        <p><FiPhone />Phone: <a href="tel:+919385587109">9385587109</a></p>
       <p>
       <AiOutlineMail /> Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=patliputrabymagadhfoods@gmail.com" target="_blank" rel="noopener noreferrer">patliputrabymagadhfoods@gmail.com</a>
     </p>

     <p>
       <FaTree /><a href="https://linktr.ee/magadhfoods" target="_blank" rel="noopener noreferrer">Know More about us</a>
     </p>
     
    </div>
</div>
  )
}


