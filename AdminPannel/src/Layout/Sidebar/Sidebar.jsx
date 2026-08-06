import React from "react";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Wallet, 
  LineChart, 
  ArrowLeftRight, 
  History, 
  ShieldCheck, 
  Settings, 
  LogOut 
} from "lucide-react";
import logo from "../../assets/logo.jpeg"; // Adjust path to your src/assets logo
import "./Sidebar.css";

const Sidebar = ({ isCollapsed, isMobileOpen, closeMobileSidebar }) => {
  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/markets", name: "Live Markets", icon: <TrendingUp size={20} /> },
    { path: "/trade", name: "Trade Terminal", icon: <LineChart size={20} /> },
    { path: "/portfolio", name: "Portfolio", icon: <Wallet size={20} /> },
    { path: "/transactions", name: "Transactions", icon: <ArrowLeftRight size={20} /> },
    { path: "/history", name: "Order History", icon: <History size={20} /> },
    { path: "/risk-management", name: "Risk Management", icon: <ShieldCheck size={20} /> },
    { path: "/settings", name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {isMobileOpen && <div className="SidebarOverlay" onClick={closeMobileSidebar}></div>}
      
      <aside className={`Sidebar ${isCollapsed ? "collapsed" : ""} ${isMobileOpen ? "mobile-open" : ""}`}>
        <div className="SidebarHeader">
          <div className="SidebarLogoContainer">
            <img src={logo} alt="Trading Logo" className="SidebarLogoImg" />
          </div>
          {!isCollapsed && <span className="SidebarBrandName">ApexTrade<span className="BrandDot">.</span></span>}
        </div>

        <div className="SidebarCategoryTitle">{!isCollapsed ? "MAIN NAVIGATION" : "---"}</div>

        <ul className="SidebarMenuList">
          {menuItems.map((item, index) => (
            <li key={index} className="SidebarMenuItem">
              <a href={item.path} className="SidebarMenuLink" title={item.name}>
                <span className="SidebarMenuIcon">{item.icon}</span>
                {!isCollapsed && <span className="SidebarMenuText">{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>

        <div className="SidebarFooter">
          <a href="/logout" className="SidebarMenuLink SidebarLogoutLink">
            <span className="SidebarMenuIcon"><LogOut size={20} /></span>
            {!isCollapsed && <span className="SidebarMenuText">Sign Out</span>}
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;