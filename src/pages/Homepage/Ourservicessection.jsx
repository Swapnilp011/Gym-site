import React from 'react';
import '../Homepage/Ourservicessection.css';

// 1. IMPORT YOUR LOCAL IMAGES HERE
import strengthImg from '../../assets/images/strength.svg';
import cardioImg from '../../assets/images/cardio.svg';
import yogaImg from '../../assets/images/yoga.svg';
import personalImg from '../../assets/images/personal.svg';
import dietImg from '../../assets/images/diet.svg';
import groupImg from '../../assets/images/group.svg';

const servicesData = [
  {
    id: 1,
    title: "Strength Training",
    image: strengthImg  // Use the imported variable here
  },
  {
    id: 2,
    title: "Cardio & CrossFit",
    image: cardioImg
  },
  {
    id: 3,
    title: "Yoga & Zumba",
    image: yogaImg
  },
  {
    id: 4,
    title: "Personal Training",
    image: personalImg
  },
  {
    id: 5,
    title: "Diet & Nutrition Guidance",
    image: dietImg
  },
  {
    id: 6,
    title: "Group Classes",
    image: groupImg
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Our Services</h2>
      
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} className="service-img" />
            </div>
            <h3 className="service-name">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;