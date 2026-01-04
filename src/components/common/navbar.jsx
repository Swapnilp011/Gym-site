import React, { useState } from 'react';
import './Navbar.css';
// UPDATE THIS PATH to your actual logo
import logo from '../../assets/images/Logo.svg'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar-container">
      
      {/* 1. HAMBURGER MENU (Left) */}
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

      {/* 2. LOGO SECTION (Center) */}
      <div className="navbar-logo-wrapper">
        <img src={logo} alt="Beast Gym" className="navbar-logo-img" />
      </div>

      {/* 3. DESKTOP LINKS (Hidden on Mobile) */}
      <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"}>
        <li onClick={() => setIsMobile(false)}><a href="#home" className="nav-link active">Home</a></li>
        <li onClick={() => setIsMobile(false)}><a href="#services" className="nav-link">Services</a></li>
        <li onClick={() => setIsMobile(false)}><a href="#branches" className="nav-link">Branches</a></li>
        <li onClick={() => setIsMobile(false)}><a href="#about" className="nav-link">About Us</a></li>
        <li onClick={() => setIsMobile(false)}><a href="#plans" className="nav-link">Plans</a></li>
        
        {/* Mobile Button */}
        <li className="mobile-btn-wrapper">
           <button className="navbar-btn mobile-btn">Contact us</button>
        </li>
      </ul>

      {/* 4. DESKTOP BUTTON (Hidden on Mobile) */}
      <div className="desktop-btn-wrapper">
        <button className="navbar-btn">Contact us</button>
      </div>

      {/* 5. SEARCH ICON (Right) */}
      <div className="mobile-search-icon">
        <span className="search-glass"></span>
      </div>

    </nav>
  );
};

export default Navbar;