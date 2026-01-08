import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 1. Added Routes & Route imports
import Navbar from "./components/common/navbar.jsx";
import Footer from "./components/common/footer.jsx";
import "./App.css";

// 2. Import your Page Components here
// Update the path below if your Home file is in 'pages/Homepage/Home'
import Home from "./routes/AppRoutes.jsx"; 
import AboutUs from "./pages/Aboutuspage/Aboutuspage.jsx"; // Import the new About page

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        
        <main className="flex-grow">
          {/* 3. Replace <AppRoutes /> with direct <Routes> */}
          <Routes>
            {/* The Homepage */}
            <Route path="/" element={<Home />} />
            
            {/* The New About Us Page */}
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        
        {/* 4. Fixed the Footer and closing tags */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;