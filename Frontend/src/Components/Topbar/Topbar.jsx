import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadset } from 'react-icons/fa';
import './Topbar.css';

const Topbar = () => {
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
          <Link to="/open-account" className="Topbar-btn Topbar-btn--filled">
            Open Account
          </Link>
          <Link to="/login" className="Topbar-btn Topbar-btn--outline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;