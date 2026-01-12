import React from 'react';

// 1. IMPORT SECTIONS
// Note: Ensure the file name matches exactly what you have in your folder (Fullplan.jsx vs FullGymPlan.jsx)
import FullGymPlan from '../Planspage/Fullplan.jsx';    
import Yogaplan from '../Planspage/Yogaplan.jsx';
import ZumbaPlan from './Zumba.jsx';
import ComboPlan from './Comboplan.jsx';



import ContactUs from '../Homepage/Contactus.jsx'; 



const PlansPage = () => {
  return (
    <div className="plans-page">
      
      {/* --- PAGE BANNER --- */}
      {/* This was missing in your code. It adds the "Membership Plans" header image */}
      
      {/* --- FULL GYM PLAN SECTION --- */}
      <FullGymPlan />

      <Yogaplan/>
      <ZumbaPlan/>
      <ComboPlan/>

      {/* --- CONTACT US SECTION --- */}
      {/* This appears at the bottom so the "Contact Us" buttons can scroll here */}
      <ContactUs />

      {/* Footer is handled in App.js */}

    </div> 
  );
};

export default PlansPage;