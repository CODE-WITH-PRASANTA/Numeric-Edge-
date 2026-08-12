import React, { useState } from 'react';
import './Homefaq.css';

const faqData = [
  {
    question: "How can I start trading For tradex?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
  },
  {
    question: "How much money do I need to start?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
  },
  {
    question: "Can I lose more than I invest in For tradex?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
  },
  {
    question: "How much money do I need to start?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
  }
];

const Homefaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        {/* Header Section */}
        <div className="faq-header">
          <span className="faq-badge">FAQS</span>
          <h2 className="faq-title">General FAQ's</h2>
        </div>

        {/* FAQ Items */}
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleAccordion(index)}
                className={`faq-button ${isOpen ? 'active' : ''}`}
              >
                <span className="faq-question">{item.question}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
                  &#10095;
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homefaq;