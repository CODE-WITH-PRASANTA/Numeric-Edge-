import React, { useState, useEffect } from 'react';
import './HomeBreadcrum.css';

// आपकी सभी इमेज फ़ाइलों के इम्पोर्ट्स
import bgBanner1 from '../../assets/banner-4.jpg';       // Slide 1 Background
import bgBanner2 from '../../assets/banner-5.jpg';       // Slide 2 Background

import imgMan1 from '../../assets/banner-img-1.png';      // Image 3 (Man with folder)
import imgChart1 from '../../assets/banner-img-3.png';    // Image 4 (Candlestick chart)
import imgSpread1 from '../../assets/banner-img-2.png';   // Image 5 (USD Spread badge)

import imgMan2 from '../../assets/banner-img-4.png';      // Image 6 (Man on phone)
import imgChart2 from '../../assets/banner-img-5.png';    // Image 7 (Growth chart)
import imgSpread2 from '../../assets/banner-img-6.png';   // Image 8 (GBP Spread card)

const HomeBreadcrum = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Slides के बीच ऑटो-टॉगल (1s smoothly transition + sequence delay)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 1 ? 2 : 1));
    }, 7000); // 7 सेकंड प्रति स्लाइड

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="breadcrum-hero-wrapper">
      {/* Slide 1 */}
      {currentSlide === 1 && (
        <div className="slide-wrapper">
          {/* Slide 1 Video Style Moving Background (banner-4.jpg) */}
          <div
            className="slide-bg-banner video-bg-anim"
            style={{ backgroundImage: `url(${bgBanner1})` }}
          />

          <div className="slide-container">
            {/* Floating Text Section */}
            <div className="text-content float-in">
              <h1 className="hero-title">
                Ultimate Forex <br />
                Trading Mastery
              </h1>
              <p className="hero-description">
                Keep your trading costs down with competitive spreads,
                commissions and low margins.
              </p>
              <button className="cta-btn">Create Account</button>
            </div>

            {/* Right Images (3, 4, 5) */}
            <div className="visual-container">
              {/* Image 3: Man with folder (0.5s delay) */}
              <img
                src={imgMan1}
                alt="Trading Professional"
                className="image-man-1 animate-man"
              />

              {/* Image 4: Candlestick chart (1.0s delay) */}
              <div className="glass-card card-chart animate-graph">
                <img src={imgChart1} alt="Candlestick Chart" />
              </div>

              {/* Image 5: USD Spread (1.0s delay) */}
              <div className="glass-card card-spread animate-graph">
                <img src={imgSpread1} alt="USD Spread" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 2 */}
      {currentSlide === 2 && (
        <div className="slide-wrapper">
          {/* Slide 2 Video Style Moving Background (banner-5.jpg) */}
          <div
            className="slide-bg-banner video-bg-anim"
            style={{ backgroundImage: `url(${bgBanner2})` }}
          />

          <div className="slide-container">
            {/* Floating Text Section */}
            <div className="text-content float-in">
              <h1 className="hero-title">
                Ultimate Forex <br />
                Trading Mastery
              </h1>
              <p className="hero-description">
                Keep your trading costs down with competitive spreads,
                commissions and low margins.
              </p>
              <button className="cta-btn">Create Account</button>
            </div>

            {/* Right Images (6, 7, 8) */}
            <div className="visual-container">
              {/* Image 6: Man on phone (1.0s delay) */}
              <img
                src={imgMan2}
                alt="Trader on Phone"
                className="image-man-2 animate-man-float"
              />

              {/* Image 7: Growth Chart overlay (1.5s delay) */}
              <div className="glass-card card-growth animate-card-delay">
                <img src={imgChart2} alt="Growth Chart" />
              </div>

              {/* Image 8: GBP Spread Card (1.5s delay) */}
              <div className="glass-card card-gbp animate-card-delay">
                <img src={imgSpread2} alt="GBP Spread" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Torn Wave Divider */}
      <div className="bottom-wave" />
    </div>
  );
};

export default HomeBreadcrum;