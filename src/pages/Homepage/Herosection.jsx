import React from 'react';
import '../Homepage/Herosection.css';
// 1. Import the SVG file
// MAKE SURE THE PATH IS CORRECT relative to this file.
// If Herosection.jsx is in src/components/home/ and the image is in src/assets/:
import heroBgId from '../../assets/images/Heroimage.svg';

const Hero = () => {
  return (
    // 2. Pass the imported image directly into the inline style
    <section 
      className="hero-container" 
      style={{ backgroundImage: `url(${heroBgId})` }}
    >
      {/* The dark overlay on top of the image */}
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