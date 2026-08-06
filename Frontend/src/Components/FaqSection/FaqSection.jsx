import React, { useState } from 'react';
import './FaqSection.css';

// Background shape asset
import education from '../../assets/education.webp';

const FaqSection = () => {
  // Accordion state - default second item opened to match referral image
  const [openIndex, setOpenIndex] = useState(1);
  const [email, setEmail] = useState('');

  const faqData = [
    {
      id: 0,
      question: 'How can I start trading For tradex?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
    {
      id: 1,
      question: 'How much money do I need to start?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
    {
      id: 2,
      question: 'Can I lose more than I invest in For tradex?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
    {
      id: 3,
      question: 'How much money do I need to start?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="FaqSection-container">
      {/* Top Page Header with 20s Clockwise Rotating Shape */}
      <div className="FaqSection-header">
        <img
          src={education}
          alt="Background Shape"
          className="FaqSection-header-bg-shape"
        />
        <h1 className="FaqSection-header-title">Frequently asked question</h1>
        <p className="FaqSection-breadcrumb">
          <span>Home</span> - <span className="FaqSection-breadcrumb-active">Frequently asked question</span>
        </p>
      </div>

      {/* Main Content Area */}
      <div className="FaqSection-content">
        <div className="FaqSection-badge-container">
          <span className="FaqSection-badge">FAQS</span>
        </div>
        <h2 className="FaqSection-section-heading">General FAQ’s</h2>

        {/* FAQ Accordion Items */}
        <div className="FaqSection-accordion">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`FaqSection-accordion-item ${
                  isOpen ? 'FaqSection-accordion-item-open' : ''
                }`}
              >
                <button
                  className="FaqSection-accordion-header"
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  aria-expanded={isOpen}
                >
                  <span className="FaqSection-accordion-question">
                    {item.question}
                  </span>
                  <span className="FaqSection-accordion-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <div className="FaqSection-accordion-collapse">
                  <div className="FaqSection-accordion-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Demo Trading / Newsletter Banner */}
      <div className="FaqSection-subscribe-banner">
        <h2 className="FaqSection-subscribe-title">
          Subscribe for latest update
        </h2>
        <form className="FaqSection-subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Email Address"
            className="FaqSection-subscribe-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="FaqSection-subscribe-btn">
            <span>Subscribe &rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqSection;