import React, { useState } from 'react';
import './Trading.css';

// 1. IMPORT the image at the top of the file
import TradingMockups from '../../assets/dashboard-2.png'; 

const tabsData = [
  {
    id: 'financial-markets',
    title: 'Financial Markets',
    heading: 'Financial Markets',
    description:
      'Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.',
    subDescription:
      'Check out our handy platform comparison table which will show you all the differences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M15 9.5a2.5 2.5 0 0 0-5 0c0 2.5 5 1.5 5 4a2.5 2.5 0 0 1-5 0" />
      </svg>
    ),
  },
  {
    id: 'what-is-forex',
    title: 'What is Forex',
    heading: 'What is Forex',
    description:
      'Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.',
    subDescription:
      'Check out our handy platform comparison table which will show you all the differences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 10 10h-10V2z" />
      </svg>
    ),
  },
  {
    id: 'tools-overview',
    title: 'Tools Overview',
    heading: 'Tools Overview',
    description:
      'Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.',
    subDescription:
      'Check out our handy platform comparison table which will show you all the differences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'platform-comparison',
    title: 'Platform Comparison',
    heading: 'Platform Comparison',
    description:
      'Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.',
    subDescription:
      'Check out our handy platform comparison table which will show you all the differences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const Trading = () => {
  const [activeTab, setActiveTab] = useState('financial-markets');

  const currentTab = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="trading-section">
      <div className="trading-header">
        <span className="top-badge">LEARN MORE</span>
        <h1 className="main-heading">What is Trading</h1>
      </div>

      <div className="trading-card">
        {/* Navigation Tabs */}
        <div className="tabs-header">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-title">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content with Smooth Fade-in Animation */}
        <div className="tab-content" key={activeTab}>
          <div className="content-left">
            <h2>{currentTab.heading}</h2>
            <p className="desc">{currentTab.description}</p>
            <p className="sub-desc">{currentTab.subDescription}</p>

            <div className="action-buttons">
              <button className="btn btn-primary">Start Trading</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="content-right">
            {/* 2. USE the imported image variable in the src attribute */}
            <img
              src={TradingMockups} // Correctly uses the imported image variable
              alt="Trading Platform on Tablet and Smartphone"
              className="device-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trading;