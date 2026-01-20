import React from 'react';

import AboutSection from '../Aboutuspage/Aboutus.jsx'; 
import OurGoal from '././OurGoal.jsx'; 
import Getintouch from '../Homepage/Getintouchsection.jsx';

const AboutUs = () => {
  return (
    <div className="about-page">
      
     
      <AboutSection /> 

      <OurGoal />

      <Getintouch/>


    </div> 
  );
};

export default AboutUs;