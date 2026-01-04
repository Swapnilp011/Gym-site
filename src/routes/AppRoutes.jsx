import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/common/navbar.jsx";
import Hero from "../pages/Homepage/HeroSection.jsx"; 
import Services from "../components/home/Services.jsx"; // Import it

const AppRoutes = () => {
  return (
    <>
      {/* 1. Navbar is placed OUTSIDE <Routes> so it is always visible */}
      <Navbar />

      <Routes>
        {/* 2. The main route "/" now points to the Hero component */}
        {/* (If you create a full 'Home' page later, you can swap <Hero /> for <Home />) */}
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
};

export default AppRoutes;