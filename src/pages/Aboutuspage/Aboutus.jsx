import React from 'react';
import '././Aboutus.css'; 

import visionImage from '../../assets/images/about_img.svg'; 

const AboutSection = () => {
  return (
    <section className="about-vision-section">
      <h2 className="vision-title">About Us</h2>
      
      <div className="vision-container">
        
        <div className="vision-image-wrapper">
          <img src={visionImage} alt="Trust Your Vision" className="vision-img" />
        </div>

        <div className="vision-content">
          <p className="vision-text">
            Beast Gym is more than just a fitness center — it’s a place
            where strength, discipline, and determination come
            together. We help individuals transform their bodies, build
            confidence, and adopt a healthier lifestyle.
          </p>
          <p className="vision-text">
            With modern equipment, advanced training facilities, and
            certified trainers, we provide the right support for beginners
            and experienced athletes alike. At Beast Gym, fitness is a
            lifelong commitment, and we inspire our members to push
            their limits and unleash the beast within.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;