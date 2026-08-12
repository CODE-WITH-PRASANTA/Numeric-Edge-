import React, { useState, useEffect } from 'react';
import './AboutUsHead.css';

// Asset Imports
import education from '../../assets/education.webp';
import aboutusImg from '../../assets/aboutus.webp';
import aboutustradeImg from '../../assets/aboutustrade.png';

const AboutUsHead = () => {
  // Accordion State
  const [openAccordion, setOpenAccordion] = useState(0);

  // Video Modal State
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Animated Counter States
  const [counts, setCounts] = useState({
    clients: 0,
    satisfied: 0,
    invested: 0,
    traders: 0,
  });

  // Accordion Data
  const accordionData = [
    {
      id: 0,
      title: 'Who we are',
      content:
        'Facilitating international payments and foreign exchange transactions, issuing credit cards, and more.',
      linkText: 'Learn More',
    },
    {
      id: 1,
      title: 'What we do',
      content:
        'Providing advanced trading platforms, market liquidity, and transparent multi-asset execution for institutional and retail traders.',
      linkText: 'Learn More',
    },
    {
      id: 2,
      title: 'How it works',
      content:
        'Open an account in minutes, deposit funds securely, and access global financial markets with automated trading tools.',
      linkText: 'Learn More',
    },
  ];

  // Stats Counter Target Values
  const statsData = [
    { key: 'clients', target: 10, suffix: 'K', label: 'Client World Wide' },
    { key: 'satisfied', target: 99, suffix: '%', label: 'Satisfied Clients' },
    { key: 'invested', target: 150, suffix: 'M+', label: 'Money Invested' },
    { key: 'traders', target: 800, suffix: '+', label: 'Expert Traders' },
  ];

  // Smooth Count-Up Animation on Mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;

      setCounts({
        clients: Math.min(Math.floor(10 * progress), 10),
        satisfied: Math.min(Math.floor(99 * progress), 99),
        invested: Math.min(Math.floor(150 * progress), 150),
        traders: Math.min(Math.floor(800 * progress), 800),
      });

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="AboutUsHead-container">
      {/* Header Section with Rotating Clockwise Graphic */}
      <div className="AboutUsHead-header">
        <img
          src={education}
          alt="Rotating Background Shape"
          className="AboutUsHead-header-bg-shape"
        />
        <h1 className="AboutUsHead-title">About Us</h1>
        <p className="AboutUsHead-breadcrumb">
          <span>Home</span> - <span className="AboutUsHead-breadcrumb-active">About Us</span>
        </p>
      </div>

      <div className="AboutUsHead-main">
        {/* Experience Section */}
        <div className="AboutUsHead-exp-section">
          {/* Left Column: Heading & Accordions */}
          <div className="AboutUsHead-exp-left">
            <div className="AboutUsHead-badge-container">
              <span className="AboutUsHead-badge">ABOUT US</span>
            </div>
            <h2 className="AboutUsHead-heading">
              Our reputation is built on <br />
              <span className="AboutUsHead-heading-highlight">Experience</span>
            </h2>

            {/* Accordion Group */}
            <div className="AboutUsHead-accordion-group">
              {accordionData.map((item, index) => {
                const isOpen = openAccordion === index;
                return (
                  <div
                    key={item.id}
                    className={`AboutUsHead-accordion-card ${
                      isOpen ? 'AboutUsHead-accordion-open' : ''
                    }`}
                  >
                    <div
                      className="AboutUsHead-accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className="AboutUsHead-accordion-title">{item.title}</h3>
                      <span className="AboutUsHead-accordion-icon">
                        {isOpen ? '⌄' : '⌄'}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="AboutUsHead-accordion-body">
                        <p className="AboutUsHead-accordion-text">{item.content}</p>
                        <a href="#learn-more" className="AboutUsHead-accordion-link">
                          {item.linkText}
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image with Play Video Overlay Badge */}
          <div className="AboutUsHead-exp-right">
            <div className="AboutUsHead-image-wrapper">
              <img
                src={aboutusImg}
                alt="Plant in coin jar representing experience"
                className="AboutUsHead-featured-img"
              />

              {/* Watch Video Right Now Circle Trigger */}
              <div
                className="AboutUsHead-video-badge"
                onClick={() => setIsVideoOpen(true)}
                title="Click to play video"
              >
                <svg
                  className="AboutUsHead-video-text-svg"
                  viewBox="0 0 100 100"
                  width="130"
                  height="130"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text fontSize="8.8" fontWeight="700" letterSpacing="2.2" fill="#111111">
                    <textPath href="#circlePath">
                      WATCH THE VIDEO RIGHT NOW •
                    </textPath>
                  </text>
                </svg>
                <div className="AboutUsHead-play-btn">
                  <div className="AboutUsHead-play-triangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Counter Boxes (Client World Wide, etc.) */}
        <div className="AboutUsHead-stats-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="AboutUsHead-stat-card">
              <h3 className="AboutUsHead-stat-number">
                {counts[stat.key]}
                {stat.suffix}
              </h3>
              <p className="AboutUsHead-stat-label">{stat.label}</p>
              <div className="AboutUsHead-stat-dots"></div>
            </div>
          ))}
        </div>

        {/* Try Demo Trading Banner with Coin Breakout Layout */}
        <div className="AboutUsHead-trade-banner-wrapper">
          <div className="AboutUsHead-trade-banner">
            <div className="AboutUsHead-coin-container">
              <img
                src={aboutustradeImg}
                alt="United States of America Coin"
                className="AboutUsHead-coin-img"
              />
            </div>

            <div className="AboutUsHead-trade-content">
              <h2 className="AboutUsHead-trade-title">
                Trade for <strong>less</strong>, with <strong>low prices</strong> <br />
                and <strong>transparent fees</strong>
              </h2>

              <button className="AboutUsHead-demo-btn">
                <span>Try Demo Trading</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal Overlay */}
      {isVideoOpen && (
        <div className="AboutUsHead-modal-backdrop" onClick={() => setIsVideoOpen(false)}>
          <div className="AboutUsHead-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="AboutUsHead-modal-close"
              onClick={() => setIsVideoOpen(false)}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="About Us Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsHead;