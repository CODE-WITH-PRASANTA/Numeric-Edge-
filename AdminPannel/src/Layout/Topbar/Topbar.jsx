import React, { useState, useRef, useEffect } from "react";
import { 
  Menu, 
  Bell, 
  Search, 
  User, 
  Settings, 
  LogOut, 
  ShieldAlert, 
  CheckCircle2, 
  TrendingUp, 
  ChevronDown 
} from "lucide-react";
import "./Topbar.css";

const Topbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="Topbar">
      <div className="TopbarLeft">
        <button 
          className="TopbarToggleBtn" 
          onClick={() => {
            toggleSidebar();
            toggleMobileSidebar();
          }} 
          aria-label="Toggle Navigation"
        >
          <Menu size={20} />
        </button>

        {/* Live Mini Market Indices Ticker for Trading Company */}
        <div className="TopbarTickerContainer">
          <div className="TickerItem">
            <span className="TickerSymbol">BTC/USDT</span>
            <span className="TickerPrice positive">$67,420.50</span>
          </div>
          <div className="TickerItem hidden-mobile">
            <span className="TickerSymbol">ETH/USDT</span>
            <span className="TickerPrice positive">$3,540.10</span>
          </div>
        </div>
      </div>

      <div className="TopbarRight">
        <div className="TopbarSearchBox hidden-mobile">
          <Search size={16} className="SearchIcon" />
          <input type="text" placeholder="Search orders, assets..." className="TopbarSearchInput" />
        </div>

        {/* Notification Section */}
        <div className="TopbarActionWrapper" ref={notificationRef}>
          <button 
            className="TopbarActionBtn" 
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="ActionBadge">3</span>
          </button>

          {showNotifications && (
            <div className="NotificationPopupCard">
              <div className="PopupHeader">
                <h4>System Alerts</h4>
                <span className="MarkRead">Mark all read</span>
              </div>
              <div className="PopupBody">
                <div className="NotificationItem">
                  <CheckCircle2 size={16} className="text-positive" />
                  <div className="NotificationContent">
                    <p>Order #9842 executed successfully</p>
                    <span className="NotificationTime">2 mins ago</span>
                  </div>
                </div>
                <div className="NotificationItem">
                  <TrendingUp size={16} className="text-positive" />
                  <div className="NotificationContent">
                    <p>BTC breached resistance level $67,000</p>
                    <span className="NotificationTime">14 mins ago</span>
                  </div>
                </div>
                <div className="NotificationItem">
                  <ShieldAlert size={16} className="text-warning" />
                  <div className="NotificationContent">
                    <p>Margin usage reached 75% threshold</p>
                    <span className="NotificationTime">1 hour ago</span>
                  </div>
                </div>
              </div>
              <div className="PopupFooter">
                <a href="/notifications">View All Activity</a>
              </div>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="TopbarActionWrapper" ref={profileRef}>
          <div 
            className="TopbarProfileTrigger" 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="ProfileAvatar">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Trader Profile" />
              <span className="OnlineStatusDot"></span>
            </div>
            <div className="ProfileInfo hidden-mobile">
              <span className="ProfileName">Alex Morgan</span>
              <span className="ProfileRole">Senior Trader</span>
            </div>
            <ChevronDown size={14} className="hidden-mobile" />
          </div>

          {showProfileMenu && (
            <div className="ProfileDropdownCard">
              <div className="ProfileDropdownHeader">
                <p className="DropdownUserName">Alex Morgan</p>
                <p className="DropdownUserEmail">alex.morgan@apitrade.com</p>
              </div>
              <div className="ProfileDropdownList">
                <a href="/profile" className="DropdownItem">
                  <User size={16} /> My Profile
                </a>
                <a href="/settings" className="DropdownItem">
                  <Settings size={16} /> Account Settings
                </a>
                <div className="DropdownDivider"></div>
                <a href="/logout" className="DropdownItem LogoutItem">
                  <LogOut size={16} /> Sign Out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;