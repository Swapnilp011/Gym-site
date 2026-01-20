import React from 'react';
import '../Aboutuspage/OurGoal.css';

import goalImage from '../../assets/images/ab.svg'; 

const OurGoal = () => {
  return (
    <section className="goal-section">
      <h2 className="goal-title">Our Goal</h2>
      
      <div className="goal-container">
        
        <div className="goal-image-wrapper">
          <img src={goalImage} alt="Athlete preparing for lift" className="goal-img" />
        </div>

        <div className="goal-content">
          <p className="goal-text">
            Our goal at Beast Gym is to help individuals unlock their true physical and 
            mental strength through disciplined training. We aim to create a fitness culture 
            that inspires consistency, confidence, and long-term results.
          </p>
          <p className="goal-text">
            We focus on providing high-quality equipment, certified trainers, and personalized 
            workout plans to support every fitness level — from beginners to advanced athletes. 
            At Beast Gym, we believe fitness is not just about building muscles, but about 
            building a strong lifestyle.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurGoal;