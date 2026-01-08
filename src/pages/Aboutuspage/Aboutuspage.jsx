import React from 'react';
// import './Aboutuspage.css';

// 1. IMPORT COMPONENTS
// import Navbar from '../../components/common/Navbar.jsx'; 
// import Footer from '../../components/common/footer.jsx';

// IMPORT SECTIONS
import AboutSection from '../Aboutuspage/Aboutus.jsx'; // <--- IMPORT NEW SECTION
import OurGoal from '././OurGoal.jsx'; 

// 2. IMPORT IMAGES
// Note: 'aboutImage' is no longer needed here because it's inside AboutSection.jsx

const AboutUs = () => {
  return (
    <div className="about-page">
      
      {/* <Navbar /> */}

      {/* --- PAGE BANNER --- */}
      

      {/* --- MAIN ABOUT TEXT SECTION --- */}
      <AboutSection /> 

      {/* --- OUR GOAL SECTION --- */}
      <OurGoal />

      {/* <Footer /> */}

    </div> 
  );
};

export default AboutUs;