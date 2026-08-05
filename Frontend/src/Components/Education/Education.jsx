import React, { useState } from 'react';
import './Education.css';

// Imported background crescent image
import educationBgShape from '../../assets/education.webp';

// Importing course images
import education1 from '../../assets/education1.webp';
import education2 from '../../assets/education2.webp';
import education3 from '../../assets/education3.webp';
import education4 from '../../assets/education4.webp';
import education5 from '../../assets/education5.webp';
import education6 from '../../assets/education6.webp';
import education7 from '../../assets/education7.webp';
import education8 from '../../assets/education8.webp';

const Education = () => {
  const [activeTab, setActiveTab] = useState('Beginner');
  const [email, setEmail] = useState('');

  // Course cards data with 8 full items for each tab with rearranged image sets
  const coursesData = {
    Beginner: [
      { id: 1, title: 'When is the Best Time to Trade ForTradex', img: education1 },
      { id: 2, title: 'Diving into Options, Futures, and Fortradex', img: education2 },
      { id: 3, title: 'Leveraging Dividends and Interest in Trading', img: education3 },
      { id: 4, title: 'Traders Make and How to Avoid Them', img: education4 },
      { id: 5, title: 'Chart Patterns Every Trader Should Know', img: education5 },
      { id: 6, title: 'Finding Your Edge in the Market', img: education6 },
      { id: 7, title: 'Protecting Your Capital and Maximizing', img: education7 },
      { id: 8, title: 'Diving into Options, Futures, and Fortradex', img: education8 },
    ],
    Trader: [
      { id: 1, title: 'Diving into Options, Futures, and Fortradex', img: education2 },
      { id: 2, title: 'Leveraging Dividends and Interest in Trading', img: education3 },
      { id: 3, title: 'When is the Best Time to Trade ForTradex', img: education1 },
      { id: 4, title: 'Chart Patterns Every Trader Should Know', img: education5 },
      { id: 5, title: 'Traders Make and How to Avoid Them', img: education4 },
      { id: 6, title: 'Diving into Options, Futures, and Fortradex', img: education8 },
      { id: 7, title: 'Finding Your Edge in the Market', img: education6 },
      { id: 8, title: 'Protecting Your Capital and Maximizing', img: education7 },
    ],
    Expert: [
      { id: 1, title: 'Chart Patterns Every Trader Should Know', img: education5 },
      { id: 2, title: 'Finding Your Edge in the Market', img: education6 },
      { id: 3, title: 'Protecting Your Capital and Maximizing', img: education7 },
      { id: 4, title: 'Diving into Options, Futures, and Fortradex', img: education8 },
      { id: 5, title: 'When is the Best Time to Trade ForTradex', img: education1 },
      { id: 6, title: 'Diving into Options, Futures, and Fortradex', img: education2 },
      { id: 7, title: 'Leveraging Dividends and Interest in Trading', img: education3 },
      { id: 8, title: 'Traders Make and How to Avoid Them', img: education4 },
    ]
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="Education-container">
      {/* Header Section with Rotating Crescent Background */}
      <div className="Education-header">
        <img 
          src={educationBgShape} 
          alt="Background Shape" 
          className="Education-header-bg-shape" 
        />
        <h1 className="Education-title">Education</h1>
        <p className="Education-breadcrumb">
          <span>Home</span> - <span className="Education-breadcrumb-active">Education</span>
        </p>
      </div>

      {/* Main Section */}
      <div className="Education-main">
        {/* Section Pill Badge */}
        <div className="Education-badge-container">
          <span className="Education-badge">OUR RANGE</span>
        </div>

        <h2 className="Education-section-heading">Top Pricing List in Market</h2>

        {/* Dynamic Tab Switcher */}
        <div className="Education-tabs-wrapper">
          <div className="Education-tabs">
            {['Beginner', 'Trader', 'Expert'].map((tab) => (
              <button
                key={tab}
                className={`Education-tab-btn ${
                  activeTab === tab ? 'Education-tab-btn-active' : ''
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid with Smooth Tab Animations */}
        <div className="Education-grid" key={activeTab}>
          {coursesData[activeTab].map((course, index) => (
            <div 
              key={course.id} 
              className="Education-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="Education-card-img-wrapper">
                <img
                  src={course.img}
                  alt={course.title}
                  className="Education-card-img"
                />
              </div>
              <div className="Education-card-content">
                <h3 className="Education-card-title">{course.title}</h3>
                <a href="#learn-more" className="Education-card-link">
                  Learn Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Banner */}
        <div className="Education-subscribe-banner">
          <h2 className="Education-subscribe-title">
            Subscribe for latest update
          </h2>
          <form className="Education-subscribe-form" onSubmit={handleSubscribeSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              className="Education-subscribe-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="Education-subscribe-btn">
              <span>Subscribe &rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Education;