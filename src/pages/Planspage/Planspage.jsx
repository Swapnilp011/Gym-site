import React from 'react';

import FullGymPlan from '../Planspage/Fullplan.jsx';    
import Yogaplan from '../Planspage/Yogaplan.jsx';
import ZumbaPlan from './Zumba.jsx';
import ComboPlan from './Comboplan.jsx';
import Getintouch from '../Homepage/Getintouchsection.jsx';



import ContactUs from '../Homepage/Contactus.jsx'; 



const PlansPage = () => {
  return (
    <div className="plans-page">
      
    
      <FullGymPlan />

      <Yogaplan/>
      <ZumbaPlan/>
      <ComboPlan/>

      <ContactUs />

    <Getintouch/>
      {/* Footer is handled in App.js */}

    </div> 
  );
};

export default PlansPage;