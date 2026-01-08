import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import './Navbar.css';
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
        {/* Wrap logo in Link to Home */}
        <Link to="/">
          <img src={logo} alt="Beast Gym" className="navbar-logo-img" />
        </Link>
      </div>

      {/* 3. DESKTOP LINKS */}
      <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"}>
        
        {/* HOME: Use Link to "/" */}
        <li onClick={() => setIsMobile(false)}>
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        
        {/* SERVICES: Use /#services to force go to Home then scroll */}
        <li onClick={() => setIsMobile(false)}>
          <a href="/#services" className="nav-link">Services</a>
        </li>
        
        {/* BRANCHES: Use /#branches */}
        <li onClick={() => setIsMobile(false)}>
          <a href="/#branches" className="nav-link">Branches</a>
        </li>
        
        {/* ABOUT US: Use Link to "/about" (This opens the new page) */}
        <li onClick={() => setIsMobile(false)}>
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        
        {/* PLANS: Use /#plans */}
        <li onClick={() => setIsMobile(false)}>
          <a href="/#plans" className="nav-link">Plans</a>
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