import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/common/navbar.jsx";
import Hero from "../pages/Homepage/Herosection.jsx"; 
import Services from "../pages/Homepage/Ourservicessection.jsx"; 
import Branches from "../pages/Homepage/Ourbranchessection.jsx";
import Features from "../pages/Homepage/Ourfeaturessection.jsx";
import Testimonials from "../pages/Homepage/Testimonials.jsx";
import ContactSection from "../pages/Homepage/Contactus.jsx";
import Getintouch from "../pages/Homepage/Getintouchsection.jsx";
// import Footer from "../components/common/footer.jsx";


const AppRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
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
            {/* <Footer/>Add it here */}
          </>
        } />
      </Routes>
    </>
  );
};

export default AppRoutes;