import React, { useState, useEffect } from 'react';
import './OurTeam.css';

// Asset Imports from local assets folder
import education from '../../assets/education.webp';
import ourteam1 from '../../assets/ourteam1.jpg';
import ourteam2 from '../../assets/ourteam2.jpg';
import ourteam3 from '../../assets/ourteam3.jpg';
import ourteam4 from '../../assets/ourteam4.jpg';
import ourteam5 from '../../assets/ourteam5.jpg';
import ourteam6 from '../../assets/ourteam6.jpg';

// Floating Avatar Assets for Testimonials Section
import edu1 from '../../assets/education1.webp';
import edu2 from '../../assets/education2.webp';
import edu3 from '../../assets/education3.webp';
import edu4 from '../../assets/education4.webp';
import edu5 from '../../assets/education5.webp';
import edu6 from '../../assets/education6.webp';

const OurTeam = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState('');

  // Team Members List
  const teamMembers = [
    { id: 1, name: 'Olivia Quinn', role: 'Forex Trader', image: ourteam1 },
    { id: 2, name: 'Nathan Hayes', role: 'Consultant', image: ourteam2 },
    { id: 3, name: 'Ava Jensen', role: 'Trading Assistant', image: ourteam3 },
    { id: 4, name: 'Sophia Knight', role: 'President of Trade', image: ourteam4 },
    { id: 5, name: 'Ethan brooks', role: 'Marketing Coordinator', image: ourteam5 },
    { id: 6, name: 'Aronic kehan', role: 'Business Assistant', image: ourteam6 },
  ];

  // Testimonials Carousel Data
  const testimonials = [
    {
      id: 0,
      quote: '"Crypto investor makes my investment work efficient and pleasant"',
      description:
        'Navigate the financial waves with FXT’s premier trading app, designed to put the power of the markets in your palm. Our cutting-edge app blends sophisticated functionality anywhere.',
      author: 'Roger Federal',
      role: 'Uses Saxolvestor',
    },
    {
      id: 1,
      quote: '"Outstanding platform with real-time accuracy and intuitive UI"',
      description:
        'Executing strategic market trades has never been smoother. The speed, accuracy, and support provided make this app an absolute necessity for modern investors.',
      author: 'Sarah Jenkins',
      role: 'Senior Portfolio Manager',
    },
    {
      id: 2,
      quote: '"The absolute gold standard for automated asset tracking"',
      description:
        'Everything from analytical charting to automated execution works seamlessly. Highly recommended for traders seeking reliable performance.',
      author: 'Michael Vance',
      role: 'Crypto Analyst',
    },
  ];

  // Automatic Slide Interval (Slides every 4 seconds)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [testimonials.length]);

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="OurTeam-container">
      {/* Header Section with Rotating Background Shape */}
      <div className="OurTeam-header">
        <img
          src={education}
          alt="Background Shape"
          className="OurTeam-header-bg-shape"
        />
        <h1 className="OurTeam-title">Our Expert Team</h1>
        <p className="OurTeam-breadcrumb">
          <span>Home</span> - <span className="OurTeam-breadcrumb-active">Team</span>
        </p>
      </div>

      {/* Main Team Content Grid */}
      <div className="OurTeam-main">
        <div className="OurTeam-badge-container">
          <span className="OurTeam-badge">OUR EXPERT TEAM</span>
        </div>
        <h2 className="OurTeam-section-heading">Our Talented Team Member</h2>

        <div className="OurTeam-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="OurTeam-card">
              <div className="OurTeam-card-avatar-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="OurTeam-card-avatar"
                />
              </div>
              <div className="OurTeam-card-content">
                <h3 className="OurTeam-member-name">{member.name}</h3>
                <p className="OurTeam-member-role">{member.role}</p>
                
              <div className="OurTeam-social-icons">

                  {/* Twitter */}
                  <a href="#" className="OurTeam-social-btn">
                    <div className="OurTeam-inner-circle">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="OurTeam-social-btn">
                    <div className="OurTeam-inner-circle">
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                  </a>

                  {/* Dribbble */}
                  <a href="#" className="OurTeam-social-btn">
                    <div className="OurTeam-inner-circle">
                      <i className="fab fa-dribbble"></i>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download Trading App Dark Banner */}
      <div className="OurTeam-app-banner">
        <div className="OurTeam-app-content">
          <span className="OurTeam-app-badge">DOWNLOAD APP</span>
          <h2 className="OurTeam-app-title">Download Trading App</h2>
          <p className="OurTeam-app-desc">
            We use cookies to understand how you use our website and to give you the best possible experience.
          </p>

          <div className="OurTeam-app-buttons">
            <a href="#apple" className="OurTeam-app-btn OurTeam-app-btn-apple" aria-label="Apple Store">
              <span className="OurTeam-app-btn-icon"></span>
            </a>
            <a href="#windows" className="OurTeam-app-btn" aria-label="Windows Store">
              <span className="OurTeam-app-btn-icon">❖</span>
            </a>
            <a href="#android" className="OurTeam-app-btn" aria-label="Android Play Store">
              <span className="OurTeam-app-btn-icon">🤖</span>
            </a>
            <a href="#qr" className="OurTeam-app-btn OurTeam-app-btn-qr" aria-label="QR Code">
              <span className="OurTeam-app-btn-icon">🏁</span>
            </a>
          </div>
        </div>

        {/* Mockup Mobile Screenshots Container */}
        <div className="OurTeam-app-mockups">
          <div className="OurTeam-phone OurTeam-phone-front">
            <div className="OurTeam-phone-screen">
              <div className="OurTeam-phone-header">Exchange</div>
              <div className="OurTeam-phone-trade-card">
                <div className="OurTeam-phone-badge-buy">Buy</div>
                <div className="OurTeam-phone-badge-sell">Sell</div>
              </div>
              <div className="OurTeam-phone-row">
                <span>AAPL Apple Inc.</span>
                <strong>$245.00</strong>
              </div>
              <div className="OurTeam-phone-row">
                <span>MSFT Microsoft</span>
                <strong>$254.00</strong>
              </div>
            </div>
          </div>

          <div className="OurTeam-phone OurTeam-phone-back">
            <div className="OurTeam-phone-screen">
              <div className="OurTeam-phone-header">Portfolio</div>
              <div className="OurTeam-phone-balance">$97,326.45</div>
            </div>
          </div>
        </div>
      </div>

      {/* Love From Clients Testimonials Section */}
      <div className="OurTeam-testimonials-section">
        <div className="OurTeam-badge-container">
          <span className="OurTeam-badge">TESTIMONIALS</span>
        </div>
        <h2 className="OurTeam-section-heading">Love from Clients</h2>

        <div className="OurTeam-testimonials-stage">
          {/* Floating User Avatars */}
          <img src={edu1} alt="Client 1" className="OurTeam-float-avatar OurTeam-float-1" />
          <img src={edu2} alt="Client 2" className="OurTeam-float-avatar OurTeam-float-2" />
          <img src={edu3} alt="Client 3" className="OurTeam-float-avatar OurTeam-float-3" />
          <img src={edu4} alt="Client 4" className="OurTeam-float-avatar OurTeam-float-4" />
          <img src={edu5} alt="Client 5" className="OurTeam-float-avatar OurTeam-float-5" />
          <img src={edu6} alt="Client 6" className="OurTeam-float-avatar OurTeam-float-6" />

          {/* Testimonial Active Slide with key for animation reset */}
          <div 
            key={activeTestimonial}
            className="OurTeam-testimonial-card-active"
          >
            <h3 className="OurTeam-quote">{testimonials[activeTestimonial].quote}</h3>
            <p className="OurTeam-testimonial-desc">
              {testimonials[activeTestimonial].description}
            </p>
            <h4 className="OurTeam-client-name">{testimonials[activeTestimonial].author}</h4>
            <span className="OurTeam-client-role">{testimonials[activeTestimonial].role}</span>
          </div>

          {/* Pagination Indicators */}
          <div className="OurTeam-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`OurTeam-dot ${
                  activeTestimonial === index ? 'OurTeam-dot-active' : ''
                }`}
                onClick={() => setActiveTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Bar */}
      <div className="OurTeam-subscribe-banner">
        <h2 className="OurTeam-subscribe-title">
          Subscribe for latest update
        </h2>
        <form className="OurTeam-subscribe-form" onSubmit={handleSubscribeSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="OurTeam-subscribe-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="OurTeam-subscribe-btn">
            <span>Subscribe &rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default OurTeam;