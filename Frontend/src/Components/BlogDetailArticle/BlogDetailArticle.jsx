import React, { useState } from 'react';
import { 
  FaPlay, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaDribbble, 
  FaCircle, 
  FaTimes, 
  FaShareAlt, 
  FaExpand 
} from 'react-icons/fa';

import './BlogDetailArticle.css';

const BlogDetailArticle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    saveInfo: false,
  });

  // High-resolution image for the video banner section
  const videoBannerImg = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comment Submitted:', formData);
  };

  return (
    <article className="BlogDetailArticle">
      <div className="BlogDetailArticle-container">
        
        {/* 1. Large Video Thumbnail Banner */}
        <div className="BlogDetailArticle-video-wrapper">
          <img 
            src={videoBannerImg} 
            alt="Emerging Trends Video Thumbnail" 
            className="BlogDetailArticle-video-image" 
          />
          <div className="BlogDetailArticle-play-button-container">
            <div className="BlogDetailArticle-circular-text">
              <svg viewBox="0 0 100 100" width="160" height="160">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text fontSize="8.5" fontWeight="700" fill="#111111" letterSpacing="1.8">
                  <textPath href="#circlePath">
                    WATCH THE VIDEO RIGHT NOW •
                  </textPath>
                </text>
              </svg>
            </div>
            <button 
              className="BlogDetailArticle-play-btn" 
              aria-label="Play Video"
              onClick={() => setIsModalOpen(true)}
            >
              <FaPlay />
            </button>
          </div>
        </div>

        {/* ========================================================
            POP-UP VIDEO MODAL (MATCHING REFERENCE IMAGE)
        ======================================================== */}
        {isModalOpen && (
          <div className="BlogDetailArticle-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="BlogDetailArticle-modal-wrapper" onClick={(e) => e.stopPropagation()}>
              
              {/* Modal Top Toolbar (Close, Share, Expand) */}
              <div className="BlogDetailArticle-modal-toolbar">
                <button className="BlogDetailArticle-modal-tool-btn" title="Expand">
                  <FaExpand />
                </button>
                <button className="BlogDetailArticle-modal-tool-btn" title="Share">
                  <FaShareAlt />
                </button>
                <button 
                  className="BlogDetailArticle-modal-close-btn" 
                  aria-label="Close Video"
                  title="Close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Video Player Box */}
              <div className="BlogDetailArticle-modal-player-box">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Company Directors - Good Board Meetings"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="BlogDetailArticle-modal-iframe"
                ></iframe>
              </div>

            </div>
          </div>
        )}

        {/* 2. Article Heading & Description */}
        <h2 className="BlogDetailArticle-section-title">
          Emerging Trends and Technologies Shaping the Industry
        </h2>
        
        <p className="BlogDetailArticle-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
        </p>

        {/* 3. Subheading & Feature List */}
        <h3 className="BlogDetailArticle-subtitle">
          Your Gateway to Trading Success
        </h3>

        <ul className="BlogDetailArticle-feature-list">
          <li>
            <FaCircle className="BlogDetailArticle-list-icon" />
            <span>Risk management features such as stop-loss orders</span>
          </li>
          <li>
            <FaCircle className="BlogDetailArticle-list-icon" />
            <span>Trading platforms provide account management features for depositing</span>
          </li>
          <li>
            <FaCircle className="BlogDetailArticle-list-icon" />
            <span>Mobile trading apps offer the flexibility to trade on-the-go using smartphones and tablets</span>
          </li>
          <li>
            <FaCircle className="BlogDetailArticle-list-icon" />
            <span>Some platforms offer tools for backtesting trading strategies using historical data</span>
          </li>
        </ul>

        {/* 4. Tags & Social Share Card */}
        <div className="BlogDetailArticle-share-card">
          <div className="BlogDetailArticle-tags-group">
            <span className="BlogDetailArticle-tags-label">Tags:</span>
            <span className="BlogDetailArticle-tag-pill">Careers</span>
            <span className="BlogDetailArticle-tag-pill">Demo</span>
          </div>

          <div className="BlogDetailArticle-social-group">
            <span className="BlogDetailArticle-share-label">Share This :</span>
            <div className="BlogDetailArticle-social-icons">
              <a href="#facebook" className="BlogDetailArticle-social-icon" aria-label="Share on Facebook">
                <FaFacebookF />
              </a>
              <a href="#twitter" className="BlogDetailArticle-social-icon" aria-label="Share on Twitter">
                <FaTwitter />
              </a>
              <a href="#linkedin" className="BlogDetailArticle-social-icon" aria-label="Share on LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#dribbble" className="BlogDetailArticle-social-icon" aria-label="Share on Dribbble">
                <FaDribbble />
              </a>
            </div>
          </div>
        </div>

        {/* 5. Write Comment Form */}
        <section className="BlogDetailArticle-comment-section">
          <h2 className="BlogDetailArticle-comment-title">Write Comment</h2>
          
          <form onSubmit={handleSubmit} className="BlogDetailArticle-form">
            <div className="BlogDetailArticle-form-row">
              <div className="BlogDetailArticle-field-group">
                <label htmlFor="name" className="BlogDetailArticle-label">
                  Name <span className="BlogDetailArticle-required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="BlogDetailArticle-input"
                />
              </div>

              <div className="BlogDetailArticle-field-group">
                <label htmlFor="email" className="BlogDetailArticle-label">
                  Email <span className="BlogDetailArticle-required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="BlogDetailArticle-input"
                />
              </div>
            </div>

            <div className="BlogDetailArticle-field-group">
              <label htmlFor="message" className="BlogDetailArticle-label">
                Message <span className="BlogDetailArticle-required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="7"
                required
                value={formData.message}
                onChange={handleChange}
                className="BlogDetailArticle-textarea"
              ></textarea>
            </div>

            <div className="BlogDetailArticle-checkbox-group">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
                className="BlogDetailArticle-checkbox"
              />
              <label htmlFor="saveInfo" className="BlogDetailArticle-checkbox-label">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button type="submit" className="BlogDetailArticle-submit-btn">
              <span className="BlogDetailArticle-btn-text">Submit Review</span>
            </button>
          </form>
        </section>

      </div>
    </article>
  );
};

export default BlogDetailArticle;