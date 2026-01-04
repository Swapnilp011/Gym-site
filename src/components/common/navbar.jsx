import React from 'react';
import './Navbar.css';
// 1. IMPORT YOUR LOGO HERE
// Make sure the path matches where you saved your image
import logo from '../../assets/images/Logo.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Left: Slanted Logo Section */}
      <div className="navbar-logo-wrapper">
        <div className="navbar-logo-content">
          {/* 2. USE THE IMAGE TAG HERE */}
          <img src={logo} alt="Beast Gym" className="navbar-logo-img" />
        </div>
      </div>

      {/* Middle: Links */}
      <ul className="navbar-links">
        <li><a href="#home" className="nav-link active">Home</a></li>
        <li><a href="#services" className="nav-link">Services</a></li>
        <li><a href="#branches" className="nav-link">Branches</a></li>
        <li><a href="#about" className="nav-link">About Us</a></li>
        <li><a href="#plans" className="nav-link">Plans</a></li>
      </ul>

      {/* Right: Button */}
      <div className="navbar-action">
        <button className="navbar-btn">Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar;