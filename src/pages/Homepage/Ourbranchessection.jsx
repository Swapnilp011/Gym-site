import React from 'react';
import '../Homepage/Ourbranchessection.css';

// 1. IMPORT YOUR LOGO
// Assuming your logo is in src/assets/logo.png or similar.
// Update this path to match your actual file.
import gymLogo from '../../assets/images/logo2.svg'; 

const branchesData = [
  {
    id: 1,
    name: "Beast Gym Pune",
    location: "Pune",
    link: "#"
  },
  {
    id: 2,
    name: "Beast Gym Mumbai",
    location: "Mumbai",
    link: "#"
  },
  {
    id: 3,
    name: "Beast Gym Delhi",
    location: "Delhi",
    link: "#"
  },
  {
    id: 4,
    name: "Beast Gym Bangalore",
    location: "Bangalore",
    link: "#"
  }
];

const Branches = () => {
  return (
    <section className="branches-section" id="branches">
      <h2 className="branches-title">Our Branches</h2>
      
      <div className="branches-container">
        {branchesData.map((branch) => (
          <div key={branch.id} className="branch-card">
            <div className="branch-logo-wrapper">
              <img src={gymLogo} alt="Beast Gym Logo" className="branch-logo" />
            </div>
            
            <h3 className="branch-name">{branch.name}</h3>
            
            <button className="branch-btn">Get more info</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;