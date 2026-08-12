import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./MainLayout.css";

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileOpen(false);
  };

  return (
    <div className={`MainLayout ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar 
        isCollapsed={isCollapsed} 
        isMobileOpen={isMobileOpen} 
        closeMobileSidebar={closeMobileSidebar} 
      />
      
      <Topbar 
        toggleSidebar={toggleSidebar} 
        toggleMobileSidebar={toggleMobileSidebar} 
      />

      <main className="MainContentContainer">
        <div className="ContentWrapper">
          {/* Outlet renders the current matching child route, e.g., Dashboard */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;