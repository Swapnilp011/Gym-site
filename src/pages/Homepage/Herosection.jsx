import React from 'react';
import '../Homepage/Herosection.css';

// 1. IMPORT BOTH IMAGES
// Rename your mobile image to 'HeroMobile.jpg' for clarity
import heroBgDesktop from '../../assets/images/Heroimage.svg';
import heroBgMobile from '../../assets/images/HeroMobile.svg'; 

const Hero = () => {
  return (
    <section 
      className="hero-container" 
      // 2. Pass both images as CSS Variables
      style={{ 
        '--bg-desktop': `url(${heroBgDesktop})`,
        '--bg-mobile': `url(${heroBgMobile})`
      }}
    >
      {/* Overlay: Visible on Desktop, Hidden/Adjusted on Mobile */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Unleash the Beast <br />
          <span>Within</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;