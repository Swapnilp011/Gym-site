import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../common/navbar.css';

import logo from '../../assets/images/Logo.svg'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar-container">
      
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <span className="close-icon">&times;</span>
        ) : (
          <div className="hamburger-lines">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        )}
      </div>

      <div className="navbar-logo-wrapper">
        <Link to="/">
          <img src={logo} alt="Beast Gym" className="navbar-logo-img" />
        </Link>
      </div>

      <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"}>
        
        <li onClick={() => setIsMobile(false)}>
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        
        <li onClick={() => setIsMobile(false)}>
          <a href="/#services" className="nav-link">Services</a>
        </li>
        
        <li onClick={() => setIsMobile(false)}>
          <a href="/#branches" className="nav-link">Branches</a>
        </li>
        
        <li onClick={() => setIsMobile(false)}>
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        
        <li onClick={() => setIsMobile(false)}>
          <Link to="/plans" className="nav-link">Plans</Link>
        </li>
        
        <li className="mobile-btn-wrapper">
           <button className="navbar-btn mobile-btn">Contact us</button>
        </li>
      </ul>

      <div className="desktop-btn-wrapper">
        <button className="navbar-btn">Contact us</button>
      </div>

      <div className="mobile-search-icon">
        <span className="search-glass"></span>
      </div>

    </nav>
  );
};

export default Navbar;