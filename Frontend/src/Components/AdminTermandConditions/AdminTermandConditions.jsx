import React from 'react';
import { 
  MdSecurity, 
  MdCheckCircle, 
  MdGavel, 
  MdAdminPanelSettings, 
  MdPrivacyTip, 
  MdUpdate, 
  MdHelpOutline,
  MdArrowForward 
} from 'react-icons/md';
import './AdminTermandConditions.css';

const AdminTermandConditions = () => {
  return (
    <div className="AdminTermandConditions-fullscreen-wrapper">
      <div className="AdminTermandConditions-container">
        
        {/* Background Trading Network Effect / Overlay Elements */}
        <div className="AdminTermandConditions-bg-glow-1"></div>
        <div className="AdminTermandConditions-bg-glow-2"></div>
        <div className="AdminTermandConditions-chart-candles">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        {/* Hero Banner Card matching Reference UI */}
        <div className="AdminTermandConditions-header-card">
          <div className="AdminTermandConditions-header-content">
            <div className="AdminTermandConditions-badge">
              <MdAdminPanelSettings className="AdminTermandConditions-badge-icon" />
              <span>Official Admin Policy</span>
            </div>
            <h1 className="AdminTermandConditions-title">
              Terms & <span className="AdminTermandConditions-highlight">Conditions</span>
            </h1>
            <p className="AdminTermandConditions-subtitle">
              Welcome to Numeric. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>
          </div>
          <div className="AdminTermandConditions-shield-container">
            <div className="AdminTermandConditions-shield-ring"></div>
            <MdSecurity className="AdminTermandConditions-shield-icon" />
            <MdCheckCircle className="AdminTermandConditions-check-icon" />
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="AdminTermandConditions-content-grid">
          
          <div className="AdminTermandConditions-card">
            <div className="AdminTermandConditions-card-header">
              <div className="AdminTermandConditions-card-icon-box">
                <MdGavel />
              </div>
              <h3>1. Platform Usage & Agreement</h3>
            </div>
            <p>
              By accessing Numeric, you warrant that you are of legal age to form a binding contract and are not barred from receiving services under the laws of applicable jurisdictions.
            </p>
            <div className="AdminTermandConditions-card-footer">
              <span>Section 1.1 - 1.4</span>
              <MdArrowForward className="AdminTermandConditions-arrow-icon" />
            </div>
          </div>

          <div className="AdminTermandConditions-card">
            <div className="AdminTermandConditions-card-header">
              <div className="AdminTermandConditions-card-icon-box">
                <MdPrivacyTip />
              </div>
              <h3>2. Data Privacy & Security</h3>
            </div>
            <p>
              Your security is our priority. We employ state-of-the-art encryption protocols to safeguard your trading data and portfolio history against unauthorized entries.
            </p>
            <div className="AdminTermandConditions-card-footer">
              <span>Section 2.1 - 2.5</span>
              <MdArrowForward className="AdminTermandConditions-arrow-icon" />
            </div>
          </div>

          <div className="AdminTermandConditions-card">
            <div className="AdminTermandConditions-card-header">
              <div className="AdminTermandConditions-card-icon-box">
                <MdUpdate />
              </div>
              <h3>3. Policy Modifications</h3>
            </div>
            <p>
              Numeric administration reserves the right to change, modify, or alter these terms at any time. Notifications of major changes will be posted directly onto your dashboard.
            </p>
            <div className="AdminTermandConditions-card-footer">
              <span>Section 3.1 - 3.3</span>
              <MdArrowForward className="AdminTermandConditions-arrow-icon" />
            </div>
          </div>

        </div>

        {/* Support Callout Footer */}
        <div className="AdminTermandConditions-support-footer">
          <MdHelpOutline className="AdminTermandConditions-support-icon" />
          <div>
            <h4>Have questions regarding our terms?</h4>
            <p>Contact our administrative compliance support team anytime at support@numeric.platform</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminTermandConditions;