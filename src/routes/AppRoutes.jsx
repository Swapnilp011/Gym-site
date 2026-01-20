import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../pages/Homepage/Herosection.jsx"; 
import Services from "../pages/Homepage/Ourservicessection.jsx"; 
import Branches from "../pages/Homepage/Ourbranchessection.jsx";
import Features from "../pages/Homepage/Ourfeaturessection.jsx";
import Testimonials from "../pages/Homepage/Testimonials.jsx";
import ContactSection from "../pages/Homepage/Contactus.jsx";
import Getintouch from "../pages/Homepage/Getintouchsection.jsx";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Branches/> 
            <Features/>
            <Testimonials/>
            <ContactSection/>
            <Getintouch/>
          </>
        } />
      </Routes>
    </>
  );
};

export default AppRoutes;