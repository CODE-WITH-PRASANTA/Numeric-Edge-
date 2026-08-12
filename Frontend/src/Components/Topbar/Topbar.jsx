import React from 'react';
import { FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import './Topbar.css';

const Topbar = ({ onLogout }) => {
  const phoneNumber = '91-2345-678';
  const telHref = `tel:${phoneNumber.replace(/-/g, '')}`;

  return (
    <div className="Topbar">
      <div className="Topbar-container">
        <a href={telHref} className="Topbar-contact" aria-label={`Call us at ${phoneNumber}`}>
          <span className="Topbar-contact-icon">
            <FaHeadset />
          </span>
          <span className="Topbar-contact-number">{phoneNumber}</span>
        </a>

        <div className="Topbar-actions">
          <button 
            type="button" 
            onClick={onLogout} 
            className="Topbar-btn Topbar-btn--outline"
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;