import React from 'react';
import '../Planspage/Zumba.css';

// Import your zumba background image
import zumbaBg from '../../assets/images/plan3.svg'; 

const ZumbaPlan = () => {
  const plans = [
    { title: '1 Month\nPlan', price: '₹500 /--' },
    { title: '6 Month\nPlan', price: '₹2500 /--' },
    { title: '1 Year\nPlan', price: '₹4500 /--' },
    { title: '1 Year\nPlan', price: '₹12000 /--' }, 
  ];

  const features = [
    "High-energy dance workouts",
    "Group fitness sessions",
    "Fat burn & cardio training",
    "Music-based fitness routines",
    "Certified zumba trainer"
  ];

  return (
    <section 
      className="zumba-section" 
      style={{ backgroundImage: `url(${zumbaBg})` }}
    >
      <div className="zumba-overlay"></div>
      
      <div className="zumba-content-container">
        <h2 className="zumba-title">Zumba Plan</h2>

        {/* CARDS ROW */}
        <div className="zumba-cards-row">
          {plans.map((plan, index) => (
            <div key={index} className="zumba-glass-card">
              <h3 className="zumba-card-title">{plan.title}</h3>
              <p className="zumba-card-price">{plan.price}</p>
              
              {/* Button linking to Contact Section */}
              <a href="#contact" className="zumba-card-btn">
                Contact us
              </a>
            </div>
          ))}
        </div>

        {/* FEATURES LIST */}
        <div className="zumba-features-container">
          <ul className="zumba-features-list">
            {features.map((feature, index) => (
              <li key={index} className="zumba-feature-item">
                <span className="zumba-bullet">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ZumbaPlan;