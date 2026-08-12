import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// =========================================
// COMMON COMPONENTS
// =========================================

import Footer from "./components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";

// =========================================
// LOGIN & PROTECTED ROUTE
// =========================================

import Loginform from "./Components/Loginform/Loginform";
import Protectrouter from "./Components/Protectrouter/Protectrouter";

// =========================================
// PAGES
// =========================================

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";

// =========================================
// EDUCATION
// =========================================

import Education from "./Components/Education/Education";
import BookDetails from "./Components/BookDetails/BookDetails";

// =========================================
// TEAM
// =========================================

import OurTeam from "./Components/OurTeam/OurTeam";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

// =========================================
// BLOG
// =========================================

import Bloggrids from "./Pages/Bloggrids/Bloggrids";
import Blogdetails from "./Pages/Blogdetails/Blogdetails";

// =========================================
// OTHER PAGES
// =========================================

import ContactUs from "./Pages/ContactUs/ContactUs";
import FaqSection from "./Components/FaqSection/FaqSection";


const App = () => {

  // =========================================
  // AUTHENTICATION STATE
  // =========================================

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return (
      localStorage.getItem("isAuthenticated") === "true" ||
      sessionStorage.getItem("isAuthenticated") === "true"
    );
  });


  // =========================================
  // LOGIN SUCCESS
  // =========================================

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };


  // =========================================
  // LOGOUT
  // =========================================

  const handleLogout = () => {

    // Remove main authentication
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("isAuthenticated");

    // Remove other possible authentication keys
    localStorage.removeItem("adminAuth");
    sessionStorage.removeItem("adminAuth");

    // Remove user information
    localStorage.removeItem("adminUser");
    sessionStorage.removeItem("adminUser");

    // Remove delivery partner data if it exists
    localStorage.removeItem("deliveryPartner");
    sessionStorage.removeItem("deliveryPartner");

    // Update React authentication state
    setIsAuthenticated(false);
  };


  return (
    <BrowserRouter>

      {/* =====================================
          TOPBAR
      ====================================== */}

      {isAuthenticated && (
        <Topbar
          onLogout={handleLogout}
        />
      )}


      {/* =====================================
          NAVBAR
      ====================================== */}

      {isAuthenticated && (
        <Navbar
          onLogout={handleLogout}
        />
      )}


      {/* =====================================
          APPLICATION ROUTES
      ====================================== */}

      <Routes>

        {/* =====================================
            LOGIN ROUTE
        ====================================== */}

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate
                to="/"
                replace
              />
            ) : (
              <Loginform
                onLoginSuccess={handleLoginSuccess}
              />
            )
          }
        />


        {/* =====================================
            PROTECTED HOME ROUTE
        ====================================== */}

        <Route
          path="/"
          element={
            <Protectrouter
              isAuthenticated={isAuthenticated}
            >
              <Home />
            </Protectrouter>
          }
        />


        {/* =====================================
            ABOUT US
        ====================================== */}

        <Route
          path="/about-us"
          element={<AboutUs />}
        />


        {/* =====================================
            EDUCATION
        ====================================== */}

        <Route
          path="/education"
          element={<Education />}
        />

        <Route
          path="/education/details"
          element={<BookDetails />}
        />


        {/* =====================================
            OUR TEAM
        ====================================== */}

        <Route
          path="/our-team"
          element={<OurTeam />}
        />

        <Route
          path="/our-team/details"
          element={<TeamDetails />}
        />


        {/* =====================================
            BLOG
        ====================================== */}

        <Route
          path="/blog"
          element={<Bloggrids />}
        />

        <Route
          path="/blog/details"
          element={<Blogdetails />}
        />


        {/* =====================================
            CONTACT
        ====================================== */}

        <Route
          path="/contact"
          element={<ContactUs />}
        />


        {/* =====================================
            FAQ
        ====================================== */}

        <Route
          path="/faqs"
          element={<FaqSection />}
        />


        {/* =====================================
            CATCH ALL / 404
        ====================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to={isAuthenticated ? "/" : "/login"}
              replace
            />
          }
        />

      </Routes>


      {/* =====================================
          FOOTER
      ====================================== */}

      {isAuthenticated && <Footer />}

    </BrowserRouter>
  );
};

export default App;