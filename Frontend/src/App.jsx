import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// COMMON COMPONENTS
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";

// LOGIN & PROTECTED ROUTE
import Loginform from "./Components/Loginform/Loginform";
import Protectrouter from "./Components/Protectrouter/Protectrouter";

// PAGES
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Education from "./Components/Education/Education";
import BookDetails from "./Components/BookDetails/BookDetails";
import OurTeam from "./Components/OurTeam/OurTeam";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import Bloggrids from "./Pages/Bloggrids/Bloggrids";
import Blogdetails from "./Pages/Blogdetails/Blogdetails";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FaqSection from "./Components/FaqSection/FaqSection";

const App = () => {
  // AUTHENTICATION STATE
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return (
      localStorage.getItem("isAuthenticated") === "true" ||
      sessionStorage.getItem("isAuthenticated") === "true"
    );
  });

  // LOGIN SUCCESS HANDLER
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  // LOGOUT HANDLER
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("isAuthenticated");
    localStorage.removeItem("adminAuth");
    sessionStorage.removeItem("adminAuth");
    localStorage.removeItem("adminUser");
    sessionStorage.removeItem("adminUser");
    localStorage.removeItem("deliveryPartner");
    sessionStorage.removeItem("deliveryPartner");

    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      {/* Topbar and Navbar will show only when authenticated */}
      {isAuthenticated && <Topbar onLogout={handleLogout} />}
      {isAuthenticated && <Navbar onLogout={handleLogout} />}

      <Routes>
        {/* LOGIN ROUTE */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Loginform onLoginSuccess={handleLoginSuccess} />
            )
          }
        />

        {/* PROTECTED ROUTES */}
        <Route
          path="/"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <Home />
            </Protectrouter>
          }
        />

        <Route
          path="/about-us"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <AboutUs />
            </Protectrouter>
          }
        />

        <Route
          path="/education"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <Education />
            </Protectrouter>
          }
        />

        <Route
          path="/education/details"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <BookDetails />
            </Protectrouter>
          }
        />

        <Route
          path="/our-team"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <OurTeam />
            </Protectrouter>
          }
        />

        <Route
          path="/our-team/details"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <TeamDetails />
            </Protectrouter>
          }
        />

        <Route
          path="/blog"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <Bloggrids />
            </Protectrouter>
          }
        />

        <Route
          path="/blog/details"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <Blogdetails />
            </Protectrouter>
          }
        />

        <Route
          path="/contact"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <ContactUs />
            </Protectrouter>
          }
        />

        <Route
          path="/faqs"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <FaqSection />
            </Protectrouter>
          }
        />

        {/* CATCH ALL ROUTE */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />}
        />
      </Routes>

      {/* Footer shows only when authenticated */}
      {isAuthenticated && <Footer />}
    </BrowserRouter>
  );
};

export default App;