import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        {/* Left Side Heading */}
        <h2 className="subscribe-heading">Subscribe for latest update</h2>

        {/* Right Side Input Form */}
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              className="subscribe-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="subscribe-btn">
            <span>Subscribe</span>
            <span className="arrow-icon">&rarr;</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;