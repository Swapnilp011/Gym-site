import React, { useState, useEffect } from 'react';
import '../Homepage/Ourbranchessection.css';

// IMPORT YOUR LOGO
import gymLogo from '../../assets/images/logo2.svg'; 

const branchesData = [
  { id: 1, name: "Beast Gym Pune", location: "Pune", link: "#" },
  { id: 2, name: "Beast Gym Mumbai", location: "Mumbai", link: "#" },
  { id: 3, name: "Beast Gym Delhi", location: "Delhi", link: "#" },
  { id: 4, name: "Beast Gym Bangalore", location: "Bangalore", link: "#" }
];

const Branches = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // 1. Detect Mobile Screen (<= 480px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Check on initial load
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Logic: 
  // If on Mobile AND showAll is false -> Show only 3 items.
  // Otherwise -> Show all items.
  const displayedBranches = (isMobile && !showAll) 
    ? branchesData.slice(0, 3) 
    : branchesData;

  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="branches-section" id="branches">
      <h2 className="branches-title">Our Branches</h2>
      
      <div className="branches-container">
        {displayedBranches.map((branch) => (
          <div key={branch.id} className="branch-card">
            <div className="branch-logo-wrapper">
              <img src={gymLogo} alt="Beast Gym Logo" className="branch-logo" />
            </div>
            <h3 className="branch-name">{branch.name}</h3>
            <button className="branch-btn">Get more info</button>
          </div>
        ))}
      </div>

      {/* 3. Toggle Button: Only visible on Mobile */}
      {isMobile && (
        <div className="branch-view-all-container">
          <button className="branch-view-all-btn" onClick={toggleView}>
            {showAll ? 'View less' : 'View all'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Branches;