import React, { useState } from 'react';
import './BookDetails.css';

// Import local assets
import education from '../../assets/education.webp';
import bookDetailsMainImg from '../../assets/Bookdetailsmain.webp';
import bookLogo from '../../assets/booklogo.png'; // Imported book logo
import logo1 from '../../assets/bookdetailslogo1.png';
import logo2 from '../../assets/bookdetailslogo2.png';
import logo3 from '../../assets/bookdetailslogo3.png';
import logo4 from '../../assets/bookdetailslogo4.png';

const BookDetails = () => {
  // Accordion open/close state
  const [openAccordion, setOpenAccordion] = useState(0);

  // Video modal toggle state
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Email input state
  const [email, setEmail] = useState('');

  const accordionData = [
    {
      id: 0,
      title: 'What is Fortradex?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      id: 1,
      title: 'How it’s Work?',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: 2,
      title: 'How to Start Fortradex Trading?',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      logo: logo1,
      name: 'Brooklyn Simmons',
      role: 'Nursing Assistant',
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur in euismod odio gravida gravida. Discovery of the text's origin is attributed.",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 2,
      logo: logo2,
      name: 'Guy Hawkins',
      role: 'Web Designer',
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur in euismod odio gravida gravida. Discovery of the text's origin is attributed.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 3,
      logo: logo3,
      name: 'Esther Howard',
      role: 'President of Sales',
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur in euismod odio gravida gravida. Discovery of the text's origin is attributed.",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail('');
    }
  };

  const handleBuyNow = () => {
    alert('Redirecting to checkout page...');
  };

  return (
    <div className="BookDetails-container">
      {/* Header Section with 20s Continuous Rotating Image */}
      <div className="BookDetails-header">
        <img
          src={education}
          alt="Background Shape"
          className="BookDetails-header-bg-shape"
        />
        <h1 className="BookDetails-title">Book Details</h1>
        <p className="BookDetails-breadcrumb">
          <span>Home</span> - <span className="BookDetails-breadcrumb-active">Book Details</span>
        </p>
      </div>

      {/* Main Section Content */}
      <div className="BookDetails-main">
        <div className="BookDetails-top-grid">
          {/* Left Column - Author Info, Book Logo & Course Outline Accordion */}
          <div className="BookDetails-left-content">
            <div className="BookDetails-author-header">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                alt="Liam Benjamin"
                className="BookDetails-author-avatar"
              />
              <div className="BookDetails-author-info">
                <h3 className="BookDetails-author-name">Liam Benjamin</h3>
                <span className="BookDetails-author-role">Manager</span>
              </div>
            </div>

            <div className="BookDetails-course-summary-wrapper">
              {/* Updated Book Logo Section */}
              <div className="BookDetails-book-logo-box">
                <img 
                  src={bookLogo} 
                  alt="Book Logo" 
                  className="BookDetails-book-logo-img" 
                />
              </div>

              <div className="BookDetails-course-summary">
                <h2 className="BookDetails-course-title">Beguiled demo going to Learn</h2>
                <div className="BookDetails-course-meta">
                  <span className="BookDetails-meta-icon">&#128214;</span>
                  <span>5 Lectures _ 2hr 25mins</span>
                </div>
              </div>
            </div>

            {/* Accordion FAQ Section */}
            <div className="BookDetails-accordion-group">
              {accordionData.map((item) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div
                    key={item.id}
                    className={`BookDetails-accordion-item ${
                      isOpen ? 'BookDetails-accordion-item-open' : ''
                    }`}
                  >
                    <button
                      className="BookDetails-accordion-header"
                      onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                    >
                      <div className="BookDetails-accordion-header-left">
                        <span className="BookDetails-accordion-icon">&#128214;</span>
                        <span className="BookDetails-accordion-title">{item.title}</span>
                      </div>
                      <span className="BookDetails-accordion-arrow">
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="BookDetails-accordion-body">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Pricing Sidebar Card */}
          <div className="BookDetails-right-sidebar">
            <div className="BookDetails-sidebar-card">
                <div className="BookDetails-price-row">
                <div className="BookDetails-price-group">
                    <span className="BookDetails-current-price">$54.00</span>
                    <span className="BookDetails-original-price">$60.00</span>
                </div>
                <span className="BookDetails-discount-badge">2 days left at this price!</span>
                </div>

                <div className="BookDetails-rating-row">
                <span className="BookDetails-star">&#9733;</span>
                <span className="BookDetails-rating-score">4.8</span>
                <span className="BookDetails-rating-reviews">(3,726 Reviews)</span>
                </div>

                <ul className="BookDetails-specs-list">
                <li>
                    <span className="BookDetails-spec-label">Language</span>
                    <span className="BookDetails-spec-value">English</span>
                </li>
                <li>
                    <span className="BookDetails-spec-label">Access</span>
                    <span className="BookDetails-spec-value">Lifetime</span>
                </li>
                <li>
                    <span className="BookDetails-spec-label">Certificate</span>
                    <span className="BookDetails-spec-value">Yes</span>
                </li>
                <li>
                    <span className="BookDetails-spec-label">Enrolled</span>
                    <span className="BookDetails-spec-value">55 Students</span>
                </li>
                </ul>

                {/* Buy Now Button with 50/50 Dual Slide Animation */}
                <button className="BookDetails-buy-now-btn" onClick={handleBuyNow}>
                <span>Buy Now</span>
                </button>

                <div className="BookDetails-share-row">
                <span>Share With:</span>
                <div className="BookDetails-share-icons">
                    <a href="#facebook" className="BookDetails-share-icon">f</a>
                    <a href="#twitter" className="BookDetails-share-icon">t</a>
                    <a href="#web" className="BookDetails-share-icon">🌐</a>
                    <a href="#linkedin" className="BookDetails-share-icon">in</a>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Book Features Section */}
        <div className="BookDetails-features-section">
          <h2 className="BookDetails-features-heading">Book Features:</h2>
          <ul className="BookDetails-features-list">
            <li>A beginner friendly overview explaining.</li>
            <li>Explains how economic indicators, geopolitical events.</li>
            <li>Covers chart patterns, indicators and tools used to analyze price movements.</li>
            <li>Discusses techniques for managing risk, such as setting stop-loss orders.</li>
            <li>Presents various trading strategies, including trend following.</li>
            <li>Includes discussions on advanced trading concepts like algorithmic trading.</li>
          </ul>
        </div>

        {/* Watch Video Banner Section */}
        <div className="BookDetails-video-banner">
          <img
            src={bookDetailsMainImg}
            alt="Trading Chart Preview"
            className="BookDetails-video-bg-img"
          />
          <div className="BookDetails-video-overlay"></div>

          <button
            className="BookDetails-play-button-wrapper"
            onClick={() => setIsVideoOpen(true)}
            aria-label="Play video"
          >
            {/* Circular Rotating Text Path */}
            <div className="BookDetails-rotating-text-ring">
              <svg viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="none"
                />
                <text fontSize="8.5" fontWeight="800" letterSpacing="2.5" fill="#000000">
                  <textPath href="#circlePath">
                    WATCH THE VIDEO RIGHT NOW •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Center White Play Circle */}
            <div className="BookDetails-play-icon-center">
              <span className="BookDetails-play-icon">▶</span>
            </div>
          </button>
        </div>

        {/* Testimonials Section */}
        <div className="BookDetails-testimonials-section">
          <div className="BookDetails-badge-container">
            <span className="BookDetails-badge">TESTIMONIALS</span>
          </div>
          <h2 className="BookDetails-section-heading">Love from Users</h2>

          <div className="BookDetails-testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="BookDetails-testimonial-card">
                <div className="BookDetails-testimonial-logo-wrapper">
                  <img src={item.logo} alt="Company Logo" className="BookDetails-testimonial-logo" />
                </div>
                <div className="BookDetails-testimonial-stars">
                  ★★★★★
                </div>
                <p className="BookDetails-testimonial-text">{item.review}</p>
                <div className="BookDetails-testimonial-user">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="BookDetails-testimonial-avatar"
                  />
                  <div className="BookDetails-testimonial-user-info">
                    <h4 className="BookDetails-testimonial-user-name">{item.name}</h4>
                    <span className="BookDetails-testimonial-user-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription Bar */}
        <div className="BookDetails-subscribe-banner">
          <h2 className="BookDetails-subscribe-title">
            Subscribe for latest update
          </h2>
          <form className="BookDetails-subscribe-form" onSubmit={handleSubscribeSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              className="BookDetails-subscribe-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="BookDetails-subscribe-btn">
              <span>Subscribe &rarr;</span>
            </button>
          </form>
        </div>
      </div>

      {/* Embedded YouTube Video Modal Frame */}
      {isVideoOpen && (
        <div className="BookDetails-modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="BookDetails-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="BookDetails-modal-close-btn"
              onClick={() => setIsVideoOpen(false)}
            >
              ✕
            </button>
            <div className="BookDetails-modal-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Trading Video Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;