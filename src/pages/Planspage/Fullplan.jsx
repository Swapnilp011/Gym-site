import React from 'react';
import '../Planspage/Fullplan.css';

// Import your background image (The dark gym interior)
import bgImage from '../../assets/images/plan1.svg'; 

const FullGymPlan = () => {
  const plans = [
    { title: '1 Month\nPlan', price: '₹1500 /--' },
    { title: '6 Month\nPlan', price: '₹7500 /--' },
    { title: '1 Year\nPlan', price: '₹12000 /--' },
    { title: '1 Year\nPlan', price: '₹12000 /--' }, // Duplicate as shown in image
  ];

  const features = [
    "Unlimited full gym access",
    "Diet & nutrition guidance",
    "Weight training & cardio",
    "Monthly fitness assessment",
    "Dedicated trainer support",
    "Priority support",
    "Customized workout plan",
    "Locker facility"
  ];

  return (
    <section 
      className="full-gym-section" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="dark-overlay"></div>
      
      <div className="content-container">
        <h2 className="section-title">Full Gym Plan</h2>

        {/* CARDS ROW */}
        <div className="cards-row">
          {plans.map((plan, index) => (
            <div key={index} className="glass-card">
              <h3 className="card-title">{plan.title}</h3>
              <p className="card-price">{plan.price}</p>
              <button className="card-btn">Contact us</button>
            </div>
          ))}
        </div>

        {/* FEATURES LIST */}
        <div className="features-container">
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="bullet">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FullGymPlan;