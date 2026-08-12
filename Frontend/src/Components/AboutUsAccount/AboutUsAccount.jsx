import React from 'react';
import './AboutUsAccount.css';

const AboutUsAccount = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Professional Account',
      description:
        'Traders with professional accounts gain access to a wide range of benefits, including enhanced trading platforms',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      column: 'left',
    },
    {
      id: 2,
      title: 'Overview Account',
      description:
        'The primary feature of a trading overview account is its ability to aggregate information from multiple accounts and',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ),
      column: 'right',
    },
    {
      id: 3,
      title: 'Demo Account',
      description:
        'Trading demo accounts are particularly valuable for novice traders who are new to the world of investing.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
        </svg>
      ),
      column: 'left',
    },
    {
      id: 4,
      title: 'Islamic Account',
      description:
        'Islamic accounts also adhere to ethical guidelines that prohibit trading certain financial instruments deemed',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 1-10-10z" />
        </svg>
      ),
      column: 'right',
    },
  ];

  return (
    <div className="AboutUsAccount-container">
      <div className="AboutUsAccount-main">
        {/* Left Side 4 Account Cards Layout */}
        <div className="AboutUsAccount-cards-section">
          <div className="AboutUsAccount-col AboutUsAccount-col-left">
            {cardsData
              .filter((card) => card.column === 'left')
              .map((card, index) => (
                <div
                  key={card.id}
                  className="AboutUsAccount-card"
                  style={{ animationDelay: `${index * 0.25 + 0.1}s` }}
                >
                  <div className="AboutUsAccount-icon-badge">
                    <span className="AboutUsAccount-icon-symbol">{card.icon}</span>
                  </div>
                  <h3 className="AboutUsAccount-card-title">{card.title}</h3>
                  <p className="AboutUsAccount-card-desc">{card.description}</p>
                </div>
              ))}
          </div>

          <div className="AboutUsAccount-col AboutUsAccount-col-right">
            {cardsData
              .filter((card) => card.column === 'right')
              .map((card, index) => (
                <div
                  key={card.id}
                  className="AboutUsAccount-card"
                  style={{ animationDelay: `${index * 0.25 + 0.25}s` }}
                >
                  <div className="AboutUsAccount-icon-badge">
                    <span className="AboutUsAccount-icon-symbol">{card.icon}</span>
                  </div>
                  <h3 className="AboutUsAccount-card-title">{card.title}</h3>
                  <p className="AboutUsAccount-card-desc">{card.description}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Right Side Content Section */}
        <div className="AboutUsAccount-content-section">
          <div className="AboutUsAccount-badge-container">
            <span className="AboutUsAccount-badge">ACCOUNTS</span>
          </div>

          <h2 className="AboutUsAccount-heading">
            Level up your trading <br />
            with <span className="AboutUsAccount-heading-green">Account</span>
          </h2>

          <p className="AboutUsAccount-subtext">
            Not sure which is the right FOREX com platform for you? Check out our
            handy platform comparison table which will show you all the differences.
          </p>

          <ul className="AboutUsAccount-checklist">
            <li className="AboutUsAccount-check-item">
              <span className="AboutUsAccount-check-icon">✓</span>
              <span>Trade with one tap, anywhere, anytime</span>
            </li>
            <li className="AboutUsAccount-check-item">
              <span className="AboutUsAccount-check-icon">✓</span>
              <span>Seamlessly manage your account and portfolio</span>
            </li>
            <li className="AboutUsAccount-check-item">
              <span className="AboutUsAccount-check-icon">✓</span>
              <span>Stay ahead with real-time charts and indicators</span>
            </li>
          </ul>

          <button className="AboutUsAccount-create-btn">
            <span>Create Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAccount;