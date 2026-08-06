import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Standardize component imports
import Footer from "./components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";

// Education Routes
import Education from "./Components/Education/Education";
import BookDetails from "./Components/BookDetails/BookDetails"; // Serves as Education Details

// Team Routes
import OurTeam from "./Components/OurTeam/OurTeam";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

// Blog Routes
import Bloggrids from "./Pages/Bloggrids/Bloggrids";
import Blogdetails from "./Pages/Blogdetails/Blogdetails";

// Other Routes
import ContactUs from "./Pages/ContactUs/ContactUs";
import FaqSection from "./Components/FaqSection/FaqSection";
// Option: Import a NotFound component if you have one
// import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* SEO-Optimized Education & Education Details Routes */}
        <Route path="/education" element={<Education />} />
        {/* Dynamic dynamic route for Education/Book details (use :slug or :id) */}
        <Route path="/education/details" element={<BookDetails />} />

        {/* Team Routes */}
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-team/details" element={<TeamDetails />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<Bloggrids />} />
        <Route path="/blog/details" element={<Blogdetails />} />

        {/* Contact & FAQ */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FaqSection />} />

        {/* 404 Catch-All for SEO (prevents broken indexing) */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;