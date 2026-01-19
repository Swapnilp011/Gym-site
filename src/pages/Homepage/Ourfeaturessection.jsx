import React, { useState, useEffect } from 'react';
import '../Homepage/Ourfeaturessection.css';

import feature1 from '../../assets/images/feature1.svg';
import feature2 from '../../assets/images/feature2.svg';
import feature3 from '../../assets/images/feature3.svg';
import feature4 from '../../assets/images/feature4.svg';
import feature5 from '../../assets/images/feature5.svg';
import feature6 from '../../assets/images/feature6.svg';

const featuresData = [
  { id: 1, image: feature1, title: "Modern Equipment" },
  { id: 2, image: feature2, title: "Spacious Gym Floor" },
  { id: 3, image: feature3, title: "Certified Trainers" },
  { id: 3, image: feature4, title: "Certified Trainers" },
  { id: 3, image: feature5, title: "Certified Trainers" },
  { id: 3, image: feature6, title: "Certified Trainers" },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuresData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const getSlideClass = (index) => {
    if (index === currentIndex) return "slide active";
    
    const prevIndex = currentIndex === 0 ? featuresData.length - 1 : currentIndex - 1;
    if (index === prevIndex) return "slide prev";

    const nextIndex = currentIndex === featuresData.length - 1 ? 0 : currentIndex + 1;
    if (index === nextIndex) return "slide next";

    return "slide hidden"; 
  };

  return (
    <section className="features-section" id="features">
      <h2 className="features-title">Our Features</h2>
      
      <div className="carousel-container">
        <div className="carousel-track">
          {featuresData.map((feature, index) => (
            <div key={feature.id} className={getSlideClass(index)}>
              <img src={feature.image} alt={feature.title} className="feature-img" />
              <div className="feature-caption">{feature.title}</div> 
            </div>
          ))}
        </div>
        
        <div className="carousel-dots">
          {featuresData.map((_, index) => (
            <span 
              key={index} 
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;