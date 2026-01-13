import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORT LINK
import '../common/navbar.css';

// Make sure this path to your logo is correct
import logo from '../../assets/images/Logo.svg'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar-container">
      
      {/* 1. HAMBURGER MENU */}
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

      {/* 2. LOGO */}
      <div className="navbar-logo-wrapper">
        <Link to="/">
          <img src={logo} alt="Beast Gym" className="navbar-logo-img" />
        </Link>
      </div>

      {/* 3. LINKS */}
      <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"}>
        
        {/* HOME -> Goes to / */}
        <li onClick={() => setIsMobile(false)}>
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        
        {/* SERVICES -> Scrolls to section on Home */}
        <li onClick={() => setIsMobile(false)}>
          <a href="/#services" className="nav-link">Services</a>
        </li>
        
        {/* BRANCHES -> Scrolls to section on Home */}
        <li onClick={() => setIsMobile(false)}>
          <a href="/#branches" className="nav-link">Branches</a>
        </li>
        
        {/* ABOUT US -> Opens About Page */}
        <li onClick={() => setIsMobile(false)}>
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        
        {/* PLANS -> Opens Plans Page */}
        {/* ⚠️ THIS WAS THE ISSUE. IT MUST BE <Link>, NOT <a> */}
        <li onClick={() => setIsMobile(false)}>
          <Link to="/plans" className="nav-link">Plans</Link>
        </li>
        
        {/* Mobile Button */}
        <li className="mobile-btn-wrapper">
           <button className="navbar-btn mobile-btn">Contact us</button>
        </li>
      </ul>

      {/* 4. DESKTOP BUTTON */}
      <div className="desktop-btn-wrapper">
        <button className="navbar-btn">Contact us</button>
      </div>

      {/* 5. SEARCH ICON */}
      <div className="mobile-search-icon">
        <span className="search-glass"></span>
      </div>

    </nav>
  );
};

export default Navbar;