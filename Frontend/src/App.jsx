import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Loginform from "./Components/Loginform/Loginform";
import Protectrouter from "./Components/Protectrouter/Protectrouter";



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return (
      localStorage.getItem("isAuthenticated") === "true" ||
      sessionStorage.getItem("isAuthenticated") === "true"
    );
  });

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <Topbar />}
      {isAuthenticated && <Navbar onLogout={handleLogout} />}

      <Routes>
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

        <Route
          path="/"
          element={
            <Protectrouter isAuthenticated={isAuthenticated}>
              <Home />
            </Protectrouter>
          }
        />

        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />}
        />
      </Routes>

      {isAuthenticated && <Footer />}
    </BrowserRouter>
  );
};

export default App;