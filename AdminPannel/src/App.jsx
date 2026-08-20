import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LiveMarkets from "./Components/LiveMarkets/LiveMarkets";
import TradeTerminal from "./Components/TradeTerminal/TradeTerminal";
import Portfolio from "./Components/Portfolio/Portfolio";
import Transactions from "./Components/Transactions/Transactions";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import Riskmanagement from "./Components/Riskmanagement/Riskmanagement";
import Settings from "./Components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect base URL to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;