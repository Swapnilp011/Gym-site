import React from 'react';
import './Testimonials.css';

// 1. IMPORT YOUR PHOTOS HERE
// Make sure to rename your local files to match or update these names
import client1 from '../../assets/images/client1.svg';
import client2 from '../../assets/images/client2.svg';
import client3 from '../../assets/images/client3.svg';

const testimonialsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Body Transformation",
    image: client1,
    review: "Joining Beast Gym was the best decision of my life. The trainers are incredibly supportive, and the equipment is top-notch. I lost 15kg in 6 months!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Yoga & Fitness",
    image: client2,
    review: "I love the vibe here! It's not just about lifting weights; the yoga classes are amazing. The environment is safe and very motivating for women.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Strength Training",
    image: client3,
    review: "The facilities are world-class. From the deadlift platforms to the cardio section, everything is well maintained. Highly recommend for serious lifters.",
    rating: 5
  }
];

const Testimonials = () => {
  // Helper to render stars
  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title1">Testimonials
      </h2>
      
      <div className="testimonials-container">
        {testimonialsData.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="card-header">
              <img src={item.image} alt={item.name} className="client-img" />
              <div className="client-info">
                <h3 className="client-name">{item.name}</h3>
                <span className="client-role">{item.role}</span>
              </div>
            </div>
            
            <p className="testimonial-text">"{item.review}"</p>
            
            <div className="star-rating">
              {renderStars(item.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;