import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/common/navbar.jsx";
import Hero from "../pages/Homepage/HeroSection.jsx"; 
import Services from "../pages/Homepage/Ourservicessection.jsx"; // Import it

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services /> {/* Add it here */}
          </>
        } />
      </Routes>
    </>
  );
};

export default AppRoutes;