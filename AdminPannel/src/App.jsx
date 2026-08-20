import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LiveMarkets from "./Components/LiveMarkets/LiveMarkets";
import TradeTerminal from "./Components/TradeTerminal/TradeTerminal";
import Portfolio from "./Components/Portfolio/Portfolio";
import Transactions from "./Components/Transactions/Transactions";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import Loginform from "./Components/Loginform/Loginform";

// Protected Route wrapper to check authentication state
const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const App = () => {
  // Manage authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* If already authenticated, redirect away from login to dashboard */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Loginform onLoginSuccess={() => setIsAuthenticated(true)} />
            )
          } 
        />

        {/* Redirect base URL root to login first */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Protected Routes wrapped inside MainLayout */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/markets" element={<LiveMarkets />} />
            <Route path="/trade" element={<TradeTerminal />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/history" element={<OrderHistory />} />
          </Route>
        </Route>

        {/* Fallback catch-all redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;