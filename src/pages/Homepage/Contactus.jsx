import React from 'react';
import './Contactus.css';

const ContactUs = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-desc">
          Have questions about memberships, training programs, or timings?
          We're here to help you start your fitness journey.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="form-input" 
            required
          />

          <input 
            type="email" 
            placeholder="Email" 
            className="form-input" 
            required
          />

          <div className="form-row mobile-row">
            <input 
              type="text" 
              value="+91" 
              readOnly 
              className="form-input code-input" 
            />
            <input 
              type="tel" 
              placeholder="Mobile" 
              className="form-input mobile-input" 
              required
            />
          </div>

          <select className="form-input select-input" defaultValue="">
            <option value="" disabled>Select location</option>
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
          </select>

          <select className="form-input select-input" defaultValue="">
            <option value="" disabled>Select Gym</option>
            <option value="main-branch">Main Branch</option>
            <option value="city-center">City Center</option>
          </select>

          <textarea 
            placeholder="Message" 
            className="form-input textarea-input" 
            rows="4"
          ></textarea>

          <div className="btn-container">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;