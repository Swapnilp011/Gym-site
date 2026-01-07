import React from 'react';
import '../Homepage/Getintouchsection.css';

// 1. IMPORT YOUR ICONS HERE
// Contact Icons (Left Side)
import emailIcon from '../../assets/images/msg.svg';
import phoneIcon from '../../assets/images/contact.svg';
import locationIcon from '../../assets/images/location.svg';

// Social Media Icons (Right Side)
import fbIcon from '../../assets/images/facebook.svg';
import instaIcon from '../../assets/images/instagram.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import youtubeIcon from '../../assets/images/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* --- LEFT SIDE: Contact Info --- */}
        <div className="footer-left">
          <h2 className="footer-title">
            Get In Touch <br />
            with Us Today
          </h2>

          <div className="contact-list">
            {/* Email */}
            <div className="contact-item">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <span className="contact-text">Beastgym@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <span className="contact-text">+91 9876543210</span>
            </div>

            {/* Address */}
            <div className="contact-item">
              <img src={locationIcon} alt="Location" className="contact-icon" />
              <span className="contact-text address-text">
                head office address:<br />
                N6 Cidco,<br />
                Chh.Sambhajinagar/<br />
                Aurangabad,<br />
                Maharashtra - 431001
              </span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Links & Socials --- */}
        <div className="footer-right">
          
          {/* Links Grid */}
          <div className="footer-links-wrapper">
            
            {/* Column 1: About */}
            <div className="link-column">
              <h3 className="column-title">About</h3>
              <ul className="footer-links">
                <li><a href="#locator">Gym Locator</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#terms">Terms & Rules</a></li>
              </ul>
            </div>

            {/* Column 2: Career */}
            <div className="link-column">
              <h3 className="column-title">Career</h3>
              <ul className="footer-links">
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#events">Our Events</a></li>
                <li><a href="#group">Group Program</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="social-media-container">
            <a href="#"><img src={fbIcon} alt="Facebook" className="social-icon" /></a>
            <a href="#"><img src={instaIcon} alt="Instagram" className="social-icon" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" className="social-icon" /></a>
            <a href="#"><img src={youtubeIcon} alt="YouTube" className="social-icon" /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;