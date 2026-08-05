import React from 'react';
import './Downloadapp.css';

// Importing your image assets from local assets folder
import MainDevicesImg from '../../assets/dashboard-2.png';
import AppleIcon from '../../assets/icon-8.png'; 
import PlayStoreIcon from '../../assets/icon-7.png';
const Downloadapp = () => {
  return (
    <section className="download-app-section">
      <div className="download-app-container">
        {/* Floating Side Button (RTL) */}
        <div className="floating-rtl-badge">RTL</div>

        {/* Left Column: Devices Image */}
        <div className="devices-image-wrapper">
          <img
            src={MainDevicesImg}
            alt="Trading App Dashboard on Tablet and Smartphone"
            className="devices-img"
          />
        </div>

        {/* Right Column: App Download Content */}
        <div className="download-content">
          <span className="download-badge">DOWNLOAD APP</span>
          <h1 className="download-title">Download Trading App</h1>
          <p className="download-description">
            We use cookines to understand how you use our website and to give
            you the best possible experience.
          </p>

          {/* App Store / Play Store Buttons */}
          <div className="store-buttons">
            {/* Apple App Store Button */}
            <a href="#app-store" className="store-btn">
              <div className="store-icon">
                {/* SVG Apple Icon for sharp golden hover effect */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.02c.67-.82 1.12-1.97.99-3.12-1 .04-2.22.67-2.93 1.5-.64.74-1.2 1.93-1.05 3.06 1.12.09 2.26-.57 2.99-1.44z"/>
                </svg>
              </div>
              <div className="store-text">
                <span className="store-subtitle">DOWNLOAD ON</span>
                <span className="store-title">App Store</span>
              </div>
            </a>

            {/* Google Play Store Button */}
            <a href="#play-store" className="store-btn">
              <div className="store-icon">
                {/* SVG PlayStore Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.28l13.52 8.5c.57.36.92.98.92 1.66s-.35 1.3-.92 1.66L5.36 22.42c-.25.18-.55.28-.86.28C3.67 22.7 3 22.03 3 21.2v-.7z"/>
                </svg>
              </div>
              <div className="store-text">
                <span className="store-subtitle">GET IT ON</span>
                <span className="store-title">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloadapp;