import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect base URL to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* MainLayout acts as the persistent wrapper containing the Sidebar and Topbar */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* You can add future pages here inside the layout wrapper */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;