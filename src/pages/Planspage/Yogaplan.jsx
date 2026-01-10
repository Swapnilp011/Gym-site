import React from 'react';
import '../Planspage/yogaplan.css';

// Import your yoga background image (The sunset silhouette)
import yogaBg from '../../assets/images/plan2.svg'; 

const YogaPlan = () => {
  const plans = [
    { title: '1 Month\nPlan', price: '₹500 /--' },
    { title: '6 Month\nPlan', price: '₹2500 /--' },
    { title: '1 Year\nPlan', price: '₹4500 /--' },
    { title: '1 Year\nPlan', price: '₹12000 /--' }, 
  ];

  const features = [
    "Morning & evening yoga sessions",
    "Flexibility & posture improvement",
    "Breathing (Pranayama) exercises",
    "Meditation & relaxation sessions",
    "Certified yoga instructor guidance"
  ];

  return (
    <section 
      className="yoga-section" 
      style={{ backgroundImage: `url(${yogaBg})` }}
    >
      <div className="yoga-overlay"></div>
      
      <div className="yoga-content-container">
        <h2 className="yoga-title">Yoga Plan</h2>

        {/* CARDS ROW */}
        <div className="yoga-cards-row">
          {plans.map((plan, index) => (
            <div key={index} className="yoga-glass-card">
              <h3 className="yoga-card-title">{plan.title}</h3>
              <p className="yoga-card-price">{plan.price}</p>
              
              {/* Button linking to Contact Section */}
              <a href="#contact" className="yoga-card-btn">
                Contact us
              </a>
            </div>
          ))}
        </div>

        {/* FEATURES LIST */}
        <div className="yoga-features-container">
          <ul className="yoga-features-list">
            {features.map((feature, index) => (
              <li key={index} className="yoga-feature-item">
                <span className="yoga-bullet">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default YogaPlan;