import React, { useState, useEffect } from 'react';
import '../Homepage/Ourservicessection.css';

// IMPORT YOUR LOCAL IMAGES HERE
import strengthImg from '../../assets/images/strength.svg';
import cardioImg from '../../assets/images/cardio.svg';
import yogaImg from '../../assets/images/yoga.svg';
import personalImg from '../../assets/images/personal.svg';
import dietImg from '../../assets/images/diet.svg';
import groupImg from '../../assets/images/group.svg';

const servicesData = [
  { id: 1, title: "Strength Training", image: strengthImg },
  { id: 2, title: "Cardio & CrossFit", image: cardioImg },
  { id: 3, title: "Yoga & Zumba", image: yogaImg },
  { id: 4, title: "Personal Training", image: personalImg },
  { id: 5, title: "Diet & Nutrition Guidance", image: dietImg },
  { id: 6, title: "Group Classes", image: groupImg }
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false); // State to toggle view

  // 1. Detect Mobile Screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Logic: Show all if Desktop OR if 'showAll' is true. 
  // Otherwise, show only first 4.
  const displayedServices = !isMobile || showAll ? servicesData : servicesData.slice(0, 4);

  // 3. Toggle Function
  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Our Services</h2>
      
      <div className="services-grid">
        {displayedServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} className="service-img" />
            </div>
            <h3 className="service-name">{service.title}</h3>
          </div>
        ))}
      </div>

      {/* 4. Button: Visible ONLY on Mobile */}
      {isMobile && (
        <div className="view-all-container">
          <button className="view-all-btn" onClick={toggleView}>
            {/* Dynamic Text: "View less" if open, "View all" if closed */}
            {showAll ? 'View less' : 'View all'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Services;