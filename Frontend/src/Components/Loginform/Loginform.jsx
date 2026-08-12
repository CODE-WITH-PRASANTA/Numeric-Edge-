import React, { useState } from 'react';
import './Loginform.css';
import logo from '../../assets/numeric.jpeg'; // Make sure logo.png is present in the same folder

const Loginform = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('numericedge');
  const [password, setPassword] = useState('12345');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      if (rememberMe) {
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        sessionStorage.setItem('isAuthenticated', 'true');
      }

      setIsSuccess(true);

      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      }, 2200);
    }
  };
  
  return (
    <div className="Loginform-container">
      <div className="Loginform-bg-glow"></div>
      <div className="Loginform-bg-glow-2"></div>

      <div className="Loginform-card">
        {/* Logo & Branding */}
        <div className="Loginform-logo-section">
          <img src={logo} alt="Numeric Edge Logo" className="Loginform-logo-img" />
          <h1 className="Loginform-title-brand">NUMERIC EDGE</h1>
          <p className="Loginform-subtitle-brand">SMART TRADES. SHARPER RESULTS. 📈</p>
        </div>

        <div className="Loginform-divider-glow"></div>

        {/* Welcome Text */}
        <div className="Loginform-header">
          <h2 className="Loginform-welcome-title">Welcome Back</h2>
          <p className="Loginform-welcome-sub">Login to your trading account</p>
        </div>

        {/* Form Fields */}
        <form className="Loginform-form" onSubmit={handleSubmit}>
          <div className="Loginform-input-box">
            <span className="Loginform-input-icon">👤</span>
            <input
              type="text"
              className="Loginform-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="Loginform-input-box">
            <span className="Loginform-input-icon">🔒</span>
            <input
              type={showPassword ? 'text' : 'password'}
              className="Loginform-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="Loginform-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '🔒'}
            </button>
          </div>

          <div className="Loginform-options">
            <label className="Loginform-checkbox">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <a href="#forgot" className="Loginform-forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="Loginform-submit-btn">
            🔒 LOGIN
          </button>
        </form>

        <div className="Loginform-footer-tags">
          <span>Secure</span>
          <span className="Loginform-dot">•</span>
          <span>Reliable</span>
          <span className="Loginform-dot">•</span>
          <span>Trusted</span>
        </div>
      </div>

      {/* Full-Page 3D Animated Success Overlay */}
      {isSuccess && (
        <div className="Loginform-success-overlay">
          <div className="Loginform-success-card">
            <div className="Loginform-success-icon">✓</div>
            <h2 className="Loginform-success-title">LOGIN SUCCESSFUL</h2>
            <p className="Loginform-success-subtext">Access Granted. Redirecting to Trading Dashboard...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loginform;