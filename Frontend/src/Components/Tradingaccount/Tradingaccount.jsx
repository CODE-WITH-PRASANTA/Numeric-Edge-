import React from 'react';
import './Tradingaccount.css';

// Importing top/bottom torn border image
import Shape9 from '../../assets/shape-9.png';

const accountsData = [
  {
    id: 1,
    title: 'Professional Account',
    description: 'Traders with professional accounts gain access to a wide',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Overview Account',
    description: 'The primary feature of a trading overview account is its ability to',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Demo Account',
    description: 'Trading demo accounts are particularly valuable for novice',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Islamic Account',
    description: 'Islamic accounts also adhere to ethical guidelines that prohibit',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
];

const Tradingaccount = () => {
  return (
    <section className="trading-account-section">
      {/* Top Torn Paper Border Accent */}
      <div
        className="torn-divider top-divider"
       
      />

      <div className="trading-account-container">
        {/* Header Badge & Title */}
        <div className="section-header">
          <span className="accounts-badge">ACCOUNTS</span>
          <h1 className="section-title">Trading Account</h1>
        </div>

        {/* Floating Side Button (RTL) */}
        <div className="floating-rtl-btn">RTL</div>

        {/* Cards Grid */}
        <div className="accounts-grid">
          {accountsData.map((account) => (
            <div key={account.id} className="account-card">
              {/* Top Floating Badge Icon */}
              <div className="icon-badge">{account.icon}</div>

              {/* Card Title & Content */}
              <h3 className="card-title">{account.title}</h3>
              <p className="card-description">{account.description}</p>

              {/* Action Button */}
              <button className="create-account-btn">Create Account</button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Torn Paper Border Accent */}
      <div
        className="torn-divider bottom-divider"
      />
    </section>
  );
};

export default Tradingaccount;