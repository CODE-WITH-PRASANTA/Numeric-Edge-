import React, { useState } from 'react';
import { 
  MdSecurity, 
  MdLock, 
  MdKeyboardArrowDown, 
  MdKeyboardArrowUp 
} from 'react-icons/md';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const privacySections = [
    {
      id: '01',
      title: 'Information We Collect',
      content: 'We collect personal information that you provide directly to us, such as your name, email address, phone number, date of birth, and KYC documents when you register or use our services.'
    },
    {
      id: '02',
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, operate, and improve our services, process transactions, communicate with you, comply with legal obligations, and protect our rights.'
    },
    {
      id: '03',
      title: 'Information Sharing & Disclosure',
      content: 'We do not sell your personal information. We may share your information with trusted third parties such as service providers, regulatory authorities, or as required by law.'
    },
    {
      id: '04',
      title: 'Data Security',
      content: 'We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      id: '05',
      title: 'Your Data Rights',
      content: 'You have the right to access, update, correct, or delete your personal information and to object to or restrict certain data processing activities.'
    },
    {
      id: '06',
      title: 'Cookies & Tracking Technologies',
      content: 'We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content. You can manage your cookie preferences in your browser settings.'
    }
  ];

  return (
    <div className="PrivacyPolicy-fullscreen-wrapper">
      <div className="PrivacyPolicy-container">
        
        {/* Background Trading Glows & Ambient Lights */}
        <div className="PrivacyPolicy-bg-glow-1"></div>
        <div className="PrivacyPolicy-bg-glow-2"></div>
        
        {/* Simulated Candlesticks Background Graphic */}
        <div className="PrivacyPolicy-trading-candles">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        {/* Header Section */}
        <div className="PrivacyPolicy-header">
          <div className="PrivacyPolicy-title-box">
            <h1 className="PrivacyPolicy-main-title">
              Privacy <span className="PrivacyPolicy-highlight">Policy</span>
            </h1>
            <div className="PrivacyPolicy-underline-group">
              <span className="PrivacyPolicy-line"></span>
              <MdSecurity className="PrivacyPolicy-title-icon" />
            </div>
            <p className="PrivacyPolicy-subtitle">
              At Numeric, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform.
            </p>
          </div>
          <div className="PrivacyPolicy-shield-container">
            <div className="PrivacyPolicy-shield-ring"></div>
            <MdLock className="PrivacyPolicy-shield-icon" />
          </div>
        </div>

        {/* Accordion Cards (01 to 06) */}
        <div className="PrivacyPolicy-accordion-list">
          {privacySections.map((section, index) => {
            const isOpen = openSection === index;
            return (
              <div 
                key={section.id} 
                className={`PrivacyPolicy-card ${isOpen ? 'active' : ''}`}
                onClick={() => toggleSection(index)}
              >
                <div className="PrivacyPolicy-card-header">
                  <div className="PrivacyPolicy-card-left">
                    <span className="PrivacyPolicy-number-badge">{section.id}</span>
                    <h3 className="PrivacyPolicy-card-title">{section.title}</h3>
                  </div>
                  <div className="PrivacyPolicy-arrow-box">
                    {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                  </div>
                </div>
                <div className="PrivacyPolicy-card-body">
                  <p className="PrivacyPolicy-card-text">{section.content}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;