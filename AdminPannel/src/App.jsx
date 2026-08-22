import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LiveMarkets from "./Components/LiveMarkets/LiveMarkets";
import TradeTerminal from "./Components/TradeTerminal/TradeTerminal";
import Portfolio from "./Components/Portfolio/Portfolio";
import Transactions from "./Components/Transactions/Transactions";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import Riskmanagement from "./Components/Riskmanagement/Riskmanagement";
import Settings from "./Components/Settings/Settings";
import Loginform from "./Components/Loginform/Loginform";
import Testimonial from "./Components/Testimonial/Testimonial";

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const handleLoginSuccess = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Loginform onLoginSuccess={handleLoginSuccess} />
            )
          }
        />

        {/* Protected Routes inside MainLayout */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route element={<MainLayout onLogout={handleLogout} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/markets" element={<LiveMarkets />} />
            <Route path="/trade" element={<TradeTerminal />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/risk-management" element={<Riskmanagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/testimonials" element={<Testimonial/>}/>

          </Route>
        </Route>

        {/* Default & Fallback Redirections */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;