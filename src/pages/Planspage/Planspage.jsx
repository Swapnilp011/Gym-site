import React from 'react';
import '../../pages/Planspage/Fullplan.jsx';

// 1. IMPORT COMMON COMPONENTS
// import Navbar from '../../components/common/navbar.jsx'; 
// import Footer from '../../components/common/footer.jsx';
// import Copyright from '../../components/common/Copyright'; // Uncomment if you have this

// 2. IMPORT THE SECTIONS
import FullGymPlan from '././Fullplan.jsx';    
import ContactUs from '../Homepage/Contactus.jsx';

// 3. IMPORT IMAGES
// Reusing your hero image for the banner, or pick a specific one


const PlansPage = () => {
  return (
    <div className="plans-page">
      
      {/* <Navbar /> */}

      {/* --- PAGE BANNER --- */}
      

      {/* --- FULL GYM PLAN SECTION --- */}
      <FullGymPlan />

      {/* You can add more sections here later (e.g., Personal Training) */}

        <ContactUs/>
      {/* <Footer /> */}
      {/* <Copyright /> */}

    </div> 
  );
};

export default PlansPage;