import React from 'react';
import '../Planspage/Comboplan.css';

import comboBg from '../../assets/images/plan4.svg'; 

const ComboPlan = () => {
  const plans = [
    { title: '1 Month Plan', price: '₹2500 /--' },
    { title: '6 Month Plan', price: '₹11500 /--' },
    { title: '1 Year Plan', price: '₹20000 /--' },
    { title: '1 Year Plan', price: '₹12000 /--' }, 
  ];

  const features = [
    "Full Gym Access (Weight training + machines)",
    "Cardio Training (Treadmill, cycle, cross trainer)",
    "Yoga Sessions (Morning & evening batches)",
    "Zumba Classes (High-energy group workouts)"
  ];

  return (
    <section 
      className="combo-section" 
      style={{ backgroundImage: `url(${comboBg})` }}
    >
      <div className="combo-overlay"></div>
      
      <div className="combo-content-container">
        <h2 className="combo-title">Combo Plan</h2>

        <div className="combo-cards-row">
          {plans.map((plan, index) => (
            <div key={index} className="combo-glass-card">
              <h3 className="combo-card-title">{plan.title}</h3>
              <p className="combo-card-price">{plan.price}</p>
              
              <a href="#contact" className="combo-card-btn">
                Contact us
              </a>
            </div>
          ))}
        </div>

        <div className="combo-features-container">
          <ul className="combo-features-list">
            {features.map((feature, index) => (
              <li key={index} className="combo-feature-item">
                <span className="combo-bullet">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ComboPlan;