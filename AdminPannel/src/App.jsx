import React, { useState, useEffect } from "react";
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


const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const App = () => {
  // Initialize state from localStorage so it survives page reloads
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const handleLoginSuccess = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  // Optional logout helper if you need it later
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
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

        {/* MainLayout acts as the persistent wrapper containing the Sidebar and Topbar */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/markets" element={<LiveMarkets/>}/>
          <Route path="/trade" element={<TradeTerminal/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/history" element={<OrderHistory/>}/>
          <Route path="/risk-management"element={<Riskmanagement/>}/>
          <Route path="/settings" element={<Settings/>}/>
          {/* You can add future pages here inside the layout wrapper */}
        <Route path="/" element={<Navigate to="/login" replace />} />

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

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;