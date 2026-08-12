import React, { useState, useEffect } from 'react';
import './TeamDetails.css';

// Import local assets
import education from '../../assets/education.webp';
import teamdetailsImg from '../../assets/teamdetails.webp';

const TeamDetails = () => {
  const [email, setEmail] = useState('');
  const [animateProgress, setAnimateProgress] = useState(false);

  const skillsData = [
    { name: 'Trading Advice', percentage: 85 },
    { name: 'Business Consulting', percentage: 90 },
    { name: 'Investment Strategy', percentage: 70 },
  ];

  // Trigger smooth left-to-right bar animation on page mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Re-trigger progress bar animation when clicking the section
  const handleSkillsClick = () => {
    setAnimateProgress(false);
    setTimeout(() => {
      setAnimateProgress(true);
    }, 50);
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="TeamDetails-container">
      {/* Header Section with Rotating Background Shape */}
      <div className="TeamDetails-header">
        <img
          src={education}
          alt="Background Shape"
          className="TeamDetails-header-bg-shape"
        />
        <h1 className="TeamDetails-title">Team Details</h1>
        <p className="TeamDetails-breadcrumb">
          <span>Home</span> - <span className="TeamDetails-breadcrumb-active">Team Details</span>
        </p>
      </div>

      {/* Main Profile Grid */}
      <div className="TeamDetails-main">
        <div className="TeamDetails-top-grid">
          {/* Left Column: Member Information & Skills */}
          <div className="TeamDetails-left-content">
            <h2 className="TeamDetails-member-name">Ethan brooks</h2>
            <p className="TeamDetails-member-role">Marketing Coordinator</p>

            <div className="TeamDetails-social-icons">
              <a href="#facebook" className="TeamDetails-social-btn" aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="#twitter" className="TeamDetails-social-btn" aria-label="Twitter">
                <span>t</span>
              </a>
              <a href="#web" className="TeamDetails-social-btn" aria-label="Website">
                <span>🌐</span>
              </a>
              <a href="#linkedin" className="TeamDetails-social-btn" aria-label="LinkedIn">
                <span>in</span>
              </a>
            </div>

            <p className="TeamDetails-bio-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lobortis tortor, sit amet
              congue purus. Maecenas pharetra lacus quis nisi porta facilisis. Morbi fermentum
              bibendum arcu, a porttitor eros volutpat et. Praesent nec magna tincidunt, placerat
              justo non, egestas quam.
            </p>

            <h3 className="TeamDetails-skills-heading">My Expertise & Skills</h3>
            <p className="TeamDetails-skills-desc">
              Etiam scelerisque nibh vitae purus blandit, sed iaculis dolor fringilla. Aenean luctus est
              sed justo pellentesque, quis fermentum felis pellentesque. Morbi varius, massa eget
              euismod finibus, elit urna ullamcorper est, et ultrices odio nunc sed nulla. Phasellus sed
              cursus erat. Nullam et nulla magna. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aenean lacinia at mauris at tempus. Nulla sed mi vel lorem tempor euismod.
            </p>

            {/* Progress Skill Bars Section (Clickable to Re-trigger) */}
            <div 
              className="TeamDetails-skills-group" 
              onClick={handleSkillsClick}
              title="Click to replay skill animation"
            >
              {skillsData.map((skill, index) => (
                <div key={index} className="TeamDetails-skill-item">
                  <div className="TeamDetails-skill-info">
                    <span className="TeamDetails-skill-label">{skill.name}</span>
                    <span className="TeamDetails-skill-percent">{skill.percentage}%</span>
                  </div>
                  <div className="TeamDetails-progress-bar-bg">
                    <div
                      className="TeamDetails-progress-bar-fill"
                      style={{
                        width: animateProgress ? `${skill.percentage}%` : '0%',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <p className="TeamDetails-footer-text">
              Phasellus sed cursus erat. Nullam et nulla magna. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean lacinia at mauris at tempus. Nulla sed mi vel lorem
            </p>
          </div>

          {/* Right Column: Member Portrait Image with Interactive Phone & Mail Links */}
          <div className="TeamDetails-right-content">
            <div className="TeamDetails-image-card">
              <img
                src={teamdetailsImg}
                alt="Ethan brooks"
                className="TeamDetails-portrait-img"
              />
              <div className="TeamDetails-contact-overlay">
                <a href="tel:+912136660027" className="TeamDetails-contact-item">
                  <div className="TeamDetails-contact-icon">📞</div>
                  <span className="TeamDetails-contact-text">+91-213-666-0027</span>
                </a>
                <a href="mailto:hallo@hawkins.com" className="TeamDetails-contact-item">
                  <div className="TeamDetails-contact-icon">✉</div>
                  <span className="TeamDetails-contact-text">hallo@hawkins.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Bar */}
        <div className="TeamDetails-subscribe-banner">
          <h2 className="TeamDetails-subscribe-title">
            Subscribe for latest update
          </h2>
          <form className="TeamDetails-subscribe-form" onSubmit={handleSubscribeSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              className="TeamDetails-subscribe-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="TeamDetails-subscribe-btn">
              <span>Subscribe &rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;