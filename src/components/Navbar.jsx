

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { FaHome, FaUtensils, FaPhone, FaShoppingCart } from 'react-icons/fa';
// import logo from "../img/mask.png";

// export const Navbar = () => {
//   const [isActive, setIsActive] = useState(false);


//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };

//   const removeActive = () => {
//     setIsActive(false);
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/" className="logo">
//             <img src={logo} alt="Logo"/>
//           </Link>
//         </div>

//         <nav className={`navbar ${isActive ? 'active' : ''}`}>
//           <ul className={`navbar-list ${isActive ? 'active' : ''}`}>
//             <li className="navbar-item" onClick={removeActive}>
//               <Link to="/" className="navbar-link hover-underline">
//                 <FaHome /> About
//               </Link>
//             </li>
//             <li className="navbar-item" onClick={removeActive}>
//               <Link to="/menu" className="navbar-link hover-underline">
//                 <FaUtensils /> Menu
//               </Link>
//             </li>
//             <li className="navbar-item" onClick={removeActive}>
//               <Link to="/contact" className="navbar-link hover-underline">
//                 <FaPhone /> Contact
//               </Link>
//             </li>
//             <li className="navbar-item" onClick={removeActive}>
//               <Link to="/ordernow" className="navbar-link hover-underline">
//                 <FaShoppingCart /> Order
//               </Link>
//             </li>
//           </ul>

//           <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaUtensils, FaPhone, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';

import logo from "../img/Mask group.png";
import newlogo from  "../img/newlogo.jpg";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showOrderOptions, setShowOrderOptions] = useState(false);

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

  const handleClickOutside = (event) => {
    if (!event.target.closest('.navbar-item.order')) {
      setShowOrderOptions(false);
    }
  };

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
    setShowOrderOptions(false);
  };

  const toggleOrderOptions = () => {
    setShowOrderOptions(!showOrderOptions);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo">
            <img src={newlogo} style={{borderRadius:'50%'}} alt="Logo"/>
          </Link>
        </div>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <ul className={`navbar-list ${isActive ? 'active' : ''}`}>
            <li className="navbar-item" onClick={removeActive}>
              <Link to="/" className="navbar-link hover-underline">
                <FaHome /> About
              </Link>
            </li>
            <li className="navbar-item" onClick={removeActive}>
              <Link to="/menu" className="navbar-link hover-underline">
                <FaUtensils /> Menu
              </Link>
            </li>
            <li className="navbar-item" onClick={removeActive}>
              <Link to="/contact" className="navbar-link hover-underline">
                <FaPhone /> Contact
              </Link>
            </li>
            <li className="navbar-item order" onClick={toggleOrderOptions}>
              <div className="navbar-link hover-underline">
                <FaShoppingCart style ={{color:"white"}}/> <span style={{color:"white"}}>Order Now</span>
              </div>
              {showOrderOptions && (
                <div className="order-options">
                  <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Zomato</a>
                  <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">Swiggy</a>
                </div>
              )}
            </li>
            <li className="navbar-item" onClick={removeActive}>
              <Link to="/career" className="navbar-link hover-underline">
              <MdOutlineContactMail /> Career
              </Link>
            </li>
          </ul>

          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
