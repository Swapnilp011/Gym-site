import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/common/navbar.jsx";
import Footer from "./components/common/footer.jsx";
import "./App.css";

import Home from "./routes/AppRoutes.jsx"; 
import AboutUs from "./pages/Aboutuspage/Aboutuspage.jsx"; 
import PlansPage from "./pages/Planspage/Planspage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<AboutUs />} />

            <Route path="/plans" element={<PlansPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;