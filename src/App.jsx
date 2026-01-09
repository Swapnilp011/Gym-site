import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/common/navbar.jsx";
import Footer from "./components/common/footer.jsx";
import "./App.css";

// IMPORT PAGES
// Note: Keeping your existing Home import logic
import Home from "./routes/AppRoutes.jsx"; 
import AboutUs from "./pages/Aboutuspage/Aboutuspage.jsx"; // Ensure this filename is correct
import PlansPage from "./pages/Planspage/Planspage.jsx"; // <--- 1. IMPORT THE NEW PLANS PAGE

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* The Homepage */}
            <Route path="/" element={<Home />} />
            
            {/* The About Us Page */}
            <Route path="/about" element={<AboutUs />} />

            {/* The Plans Page */}
            {/* 2. ADD THIS ROUTE SO THE BUTTON WORKS */}
            <Route path="/plans" element={<PlansPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;