import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AboutUsExpertTeam.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Asset Imports - Team Members
import ourteam1 from '../../assets/ourteam1.jpg';
import ourteam2 from '../../assets/ourteam2.jpg';
import ourteam3 from '../../assets/ourteam3.jpg';
import ourteam4 from '../../assets/ourteam4.jpg';
import ourteam5 from '../../assets/ourteam5.jpg';
import ourteam6 from '../../assets/ourteam6.jpg';

// Asset Imports - Testimonials Floating Avatars
import edu1 from '../../assets/loveclients1.png';
import edu2 from '../../assets/loveclients2.png';
import edu3 from '../../assets/loveclients3.png';
import edu4 from '../../assets/loveclients4.png';
import edu5 from '../../assets/loveclients5.png';
import edu6 from '../../assets/loveclients6.png';

// Asset Imports - Media Center News Avatars
import loveclients1 from '../../assets/loveclients1.png';
import loveclients2 from '../../assets/loveclients2.png';
import loveclients3 from '../../assets/loveclients3.png';

// Framer Motion Animation Variants for News Grid
const mediaContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const mediaCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const AboutUsExpertTeam = () => {
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

  // News Data for Media Center Section
  const newsData = [
    {
      id: 1,
      date: '20TH APRIL, 2024',
      title: 'USD/JPY Stages the more upsides can Bulls Aim for 160x Bonus?',
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed",
      author: 'Daniel Marcon',
      avatar: loveclients1,
    },
    {
      id: 2,
      date: '19TH APRIL, 2024',
      title: "Nemo's Eurovision win fires up Swiss advocates for non-binary rights",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed",
      author: 'Robert Henry',
      avatar: loveclients2,
    },
    {
      id: 3,
      date: '18TH APRIL, 2024',
      title:
        'Wall St Week Ahead-Earnings bolster US stocks but crucial inflation report looms',
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed",
      author: 'Victor Classic',
      avatar: loveclients3,
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
    <div className="AboutUsExpertTeam-container">
      {/* 1. Main Team Content Grid */}
      <div className="AboutUsExpertTeam-main">
        <div className="AboutUsExpertTeam-badge-container">
          <span className="AboutUsExpertTeam-badge">OUR EXPERT TEAM</span>
        </div>
        <h2 className="AboutUsExpertTeam-section-heading">Our Talented Team Member</h2>

        <div className="AboutUsExpertTeam-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="AboutUsExpertTeam-card">
              <div className="AboutUsExpertTeam-card-avatar-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="AboutUsExpertTeam-card-avatar"
                />
              </div>
              <div className="AboutUsExpertTeam-card-content">
                <h3 className="AboutUsExpertTeam-member-name">{member.name}</h3>
                <p className="AboutUsExpertTeam-member-role">{member.role}</p>

                <div className="AboutUsExpertTeam-social-icons">
                  {/* Twitter */}
                  <a href="#twitter" className="AboutUsExpertTeam-social-btn" aria-label="Twitter">
                    <div className="AboutUsExpertTeam-inner-circle">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="#linkedin" className="AboutUsExpertTeam-social-btn" aria-label="LinkedIn">
                    <div className="AboutUsExpertTeam-inner-circle">
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                  </a>

                  {/* Dribbble */}
                  <a href="#dribbble" className="AboutUsExpertTeam-social-btn" aria-label="Dribbble">
                    <div className="AboutUsExpertTeam-inner-circle">
                      <i className="fab fa-dribbble"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Download Trading App Dark Banner */}
      <div className="AboutUsExpertTeam-app-banner">
        <div className="AboutUsExpertTeam-app-content">
          <span className="AboutUsExpertTeam-app-badge">DOWNLOAD APP</span>
          <h2 className="AboutUsExpertTeam-app-title">Download Trading App</h2>
          <p className="AboutUsExpertTeam-app-desc">
            We use cookies to understand how you use our website and to give you the best possible experience.
          </p>

          <div className="AboutUsExpertTeam-app-buttons">
            <a href="#apple" className="AboutUsExpertTeam-app-btn AboutUsExpertTeam-app-btn-apple" aria-label="Apple Store">
              <span className="AboutUsExpertTeam-app-btn-icon"></span>
            </a>
            <a href="#windows" className="AboutUsExpertTeam-app-btn" aria-label="Windows Store">
              <span className="AboutUsExpertTeam-app-btn-icon">❖</span>
            </a>
            <a href="#android" className="AboutUsExpertTeam-app-btn" aria-label="Android Play Store">
              <span className="AboutUsExpertTeam-app-btn-icon">🤖</span>
            </a>
            <a href="#qr" className="AboutUsExpertTeam-app-btn AboutUsExpertTeam-app-btn-qr" aria-label="QR Code">
              <span className="AboutUsExpertTeam-app-btn-icon">🏁</span>
            </a>
          </div>
        </div>

        {/* Mockup Mobile Screenshots */}
        <div className="AboutUsExpertTeam-app-mockups">
          <div className="AboutUsExpertTeam-phone AboutUsExpertTeam-phone-front">
            <div className="AboutUsExpertTeam-phone-screen">
              <div className="AboutUsExpertTeam-phone-header">Exchange</div>
              <div className="AboutUsExpertTeam-phone-trade-card">
                <div className="AboutUsExpertTeam-phone-badge-buy">Buy</div>
                <div className="AboutUsExpertTeam-phone-badge-sell">Sell</div>
              </div>
              <div className="AboutUsExpertTeam-phone-row">
                <span>AAPL Apple Inc.</span>
                <strong>$245.00</strong>
              </div>
              <div className="AboutUsExpertTeam-phone-row">
                <span>MSFT Microsoft</span>
                <strong>$254.00</strong>
              </div>
            </div>
          </div>

          <div className="AboutUsExpertTeam-phone AboutUsExpertTeam-phone-back">
            <div className="AboutUsExpertTeam-phone-screen">
              <div className="AboutUsExpertTeam-phone-header">Portfolio</div>
              <div className="AboutUsExpertTeam-phone-balance">$97,326.45</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Love From Clients Testimonials Section */}
      <div className="AboutUsExpertTeam-testimonials-section">
        <div className="AboutUsExpertTeam-badge-container">
          <span className="AboutUsExpertTeam-badge">TESTIMONIALS</span>
        </div>
        <h2 className="AboutUsExpertTeam-section-heading">Love from Clients</h2>

        <div className="AboutUsExpertTeam-testimonials-stage">
          {/* Floating User Avatars */}
          <img src={edu1} alt="Client 1" className="AboutUsExpertTeam-float-avatar AboutUsExpertTeam-float-1" />
          <img src={edu2} alt="Client 2" className="AboutUsExpertTeam-float-avatar AboutUsExpertTeam-float-2" />
          <img src={edu3} alt="Client 3" className="AboutUsExpertTeam-float-avatar AboutUsExpertTeam-float-3" />
          <img src={edu4} alt="Client 4" className="AboutUsExpertTeam-float-avatar AboutUsExpertTeam-float-4" />
          <img src={edu5} alt="Client 5" className="AboutUsExpertTeam-float-avatar AboutUsExpertTeam-float-5" />
          <img src={edu6} alt="Client 6" className="AboutUsExpertTeam-float-avatar AboutUsExpertTeam-float-6" />

          {/* Testimonial Active Slide */}
          <div 
            key={activeTestimonial}
            className="AboutUsExpertTeam-testimonial-card-active"
          >
            <h3 className="AboutUsExpertTeam-quote">{testimonials[activeTestimonial].quote}</h3>
            <p className="AboutUsExpertTeam-testimonial-desc">
              {testimonials[activeTestimonial].description}
            </p>
            <h4 className="AboutUsExpertTeam-client-name">{testimonials[activeTestimonial].author}</h4>
            <span className="AboutUsExpertTeam-client-role">{testimonials[activeTestimonial].role}</span>
          </div>

          {/* Pagination Indicators */}
          <div className="AboutUsExpertTeam-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`AboutUsExpertTeam-dot ${
                  activeTestimonial === index ? 'AboutUsExpertTeam-dot-active' : ''
                }`}
                onClick={() => setActiveTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Media Center / Latest News Update Section (Integrated directly below Testimonials) */}
      <div className="AboutUsExpertTeam-media-section">
        <div className="AboutUsExpertTeam-badge-container">
          <span className="AboutUsExpertTeam-badge">MEDIA CENTER</span>
        </div>
        <h2 className="AboutUsExpertTeam-section-heading">Latest News Update</h2>

        {/* Framer Motion Entry Animation */}
        <motion.div
          className="AboutUsExpertTeam-media-grid"
          variants={mediaContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {newsData.map((item) => (
            <motion.article
              key={item.id}
              className="AboutUsExpertTeam-media-card"
              variants={mediaCardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
              <div className="AboutUsExpertTeam-media-card-main">
                <span className="AboutUsExpertTeam-media-card-date">{item.date}</span>
                <h3 className="AboutUsExpertTeam-media-card-title">{item.title}</h3>
                <p className="AboutUsExpertTeam-media-card-desc">{item.description}</p>
                
                <a href="#read-more" className="AboutUsExpertTeam-media-read-more">
                  Read More
                </a>
              </div>

              <div className="AboutUsExpertTeam-media-card-footer">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="AboutUsExpertTeam-media-author-avatar"
                />
                <span className="AboutUsExpertTeam-media-author-name">{item.author}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* 5. Newsletter Subscription Bar */}
      <div className="AboutUsExpertTeam-subscribe-banner">
        <h2 className="AboutUsExpertTeam-subscribe-title">
          Subscribe for latest update
        </h2>
        <form className="AboutUsExpertTeam-subscribe-form" onSubmit={handleSubscribeSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="AboutUsExpertTeam-subscribe-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="AboutUsExpertTeam-subscribe-btn">
            <span>Subscribe &rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUsExpertTeam;