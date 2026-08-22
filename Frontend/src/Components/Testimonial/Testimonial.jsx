import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const [activeCategory, setActiveCategory] = useState('All Reviews');

  const categories = ['All Reviews', 'Traders', 'Investors', 'Algo Traders', 'Long Term Investors'];

  const testimonialsData = [
    {
      id: 1,
      name: 'James Carter',
      role: 'Swing Trader',
      category: 'Traders',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Numeric Edge has completely transformed my trading journey. The real-time data and insights helped me make confident decisions and grow my account consistently.',
      growth: '+78.42%',
      period: 'in 6 Months'
    },
    {
      id: 2,
      name: 'Sophia Bennett',
      role: 'Day Trader',
      category: 'Traders',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'The trade terminal is lightning fast and incredibly intuitive. I love the advanced charts and risk management tools that keep me ahead of the market.',
      growth: '+62.35%',
      period: 'in 3 Months'
    },
    {
      id: 3,
      name: 'Michael Anderson',
      role: 'Crypto Investor',
      category: 'Investors',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'As a crypto investor, I need accurate data and security. Numeric Edge delivers both with a seamless experience and top-notch customer support.',
      growth: '+104.21%',
      period: 'in 4 Months'
    },
    {
      id: 4,
      name: 'Emily Watson',
      role: 'Long Term Investor',
      category: 'Long Term Investors',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'I appreciate the in-depth market analysis and educational resources. It’s more than just a platform—it’s a partner in my financial success.',
      growth: '+55.18%',
      period: 'in 1 Year'
    },
    {
      id: 5,
      name: 'Daniel Roberts',
      role: 'Algo Trader',
      category: 'Algo Traders',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'The API access and automation tools are fantastic. I’ve built my strategies on Numeric Edge and the execution speed is unmatched.',
      growth: '+91.67%',
      period: 'in 6 Months'
    },
    {
      id: 6,
      name: 'Olivia Martinez',
      role: 'Options Trader',
      category: 'Traders',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'From options trading to portfolio tracking, everything I need is in one place. Clean interface, powerful features, and reliable performance.',
      growth: '+73.89%',
      period: 'in 5 Months'
    },
    {
      id: 7,
      name: 'Alexander Wright',
      role: 'Institutional Investor',
      category: 'Investors',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'High liquidity and low slippage make large executions effortless. The analytics dashboards give unparalleled transparency.',
      growth: '+112.40%',
      period: 'in 8 Months'
    },
    {
      id: 8,
      name: 'Hannah Miller',
      role: 'Quantitative Analyst',
      category: 'Algo Traders',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'The algorithmic backtesting suite is second to none. Real-time sub-millisecond execution helps capture every market edge.',
      growth: '+84.15%',
      period: 'in 4 Months'
    }
  ];

  const filteredTestimonials = activeCategory === 'All Reviews' 
    ? testimonialsData 
    : testimonialsData.filter(item => item.category === activeCategory);

  const handleStartTrading = () => {
    window.location.href = '/trade';
  };

  return (
    <div className="tm-container">
      {/* Top Header Section */}
      <header className="tm-header">
        <div className="tm-header-left">
          <h1 className="tm-title">Testimonials</h1>
          <p className="tm-subtitle">
            Hear from traders and investors who have achieved success with <span className="tm-brand-highlight">Numeric Edge</span>.
          </p>
        </div>

        <div className="tm-header-right">
          {/* Rating Summary Card */}
          <div className="tm-rating-box">
            <div className="tm-rating-score-group">
              <span className="tm-rating-num">4.9</span>
              <div className="tm-stars">
                {'★'.repeat(5)}
              </div>
            </div>
            <span className="tm-rating-count">Based on 248+ reviews</span>
          </div>

          {/* Trust Badge */}
          <div className="tm-trust-card">
            <div className="tm-quote-icon">❝</div>
            <div className="tm-trust-text">
              <strong>Trusted by traders</strong>
              <span>across the world</span>
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation Filter */}
      <div className="tm-filter-tabs">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`tm-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Testimonials 3-Column Grid */}
      <div className="tm-cards-grid">
        {filteredTestimonials.map((item) => (
          <div key={item.id} className="tm-card">
            <div className="tm-card-quote-badge">“</div>
            
            <div className="tm-card-user-info">
              <img src={item.avatar} alt={item.name} className="tm-user-avatar" />
              <div className="tm-user-meta">
                <h3 className="tm-user-name">{item.name}</h3>
                <span className="tm-user-role">{item.role}</span>
              </div>
              <div className="tm-user-stars">
                {'★'.repeat(item.rating)}
              </div>
            </div>

            <p className="tm-comment-text">{item.comment}</p>

            <div className="tm-growth-footer">
              <div className="tm-growth-left">
                <svg className="tm-trend-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span className="tm-growth-percentage">{item.growth}</span>
              </div>
              <div className="tm-growth-right">
                <span className="tm-growth-label">Portfolio Growth</span>
                <span className="tm-growth-period">{item.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="tm-cta-banner">
        <div className="tm-cta-left">
          <div className="tm-trophy-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7.5c-.28 0-.5.22-.5.5v1.5h10v-1.5c0-.28-.22-.5-.5-.5H15c-.55 0-1-.45-1-1v-2.34"></path>
              <path d="M18 4H6v7a6 6 0 0 0 12 0V4z"></path>
            </svg>
          </div>
          <div className="tm-cta-text">
            <h3>Join thousands of successful traders</h3>
            <p>Start your trading journey with Numeric Edge today.</p>
          </div>
        </div>
        <button className="tm-cta-btn" onClick={handleStartTrading}>
          Start Trading Now <span className="tm-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;