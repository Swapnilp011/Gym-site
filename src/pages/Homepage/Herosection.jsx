import React from 'react';
import '../Homepage/Herosection.css';

import heroBgDesktop from '../../assets/images/Heroimage.svg';
import heroBgMobile from '../../assets/images/HeroMobile.svg'; 

const Hero = () => {
  return (
    <section 
      className="hero-container" 
      style={{ 
        '--bg-desktop': `url(${heroBgDesktop})`,
        '--bg-mobile': `url(${heroBgMobile})`
      }}
    >
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