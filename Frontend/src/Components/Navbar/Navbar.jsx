// Navbar.jsx
import React, { useState } from 'react';
import { FiSearch, FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

// Import your logo image asset here
import logoImg from "../../assets/numeric.jpeg";

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Courses', href: '#' },
  { name: 'Trading', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Our Courses', href: '#' },
  { name: 'Our Team', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'FAQs', href: '#' },
  { name: 'Contact', href: '#' },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (name) => {
    setActiveItem(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="Navbar">
      <div className="Navbar__container">
        {/* Brand / Logo */}
        <a href="#" className="Navbar__logo-wrapper">
          <img src={logoImg} alt="NumericEdge Trading Academy" className="Navbar__logo-img" />
          <div className="Navbar__brand-text">
           
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="Navbar__nav">
          <ul className="Navbar__nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="Navbar__nav-item">
                <a
                  href={link.href}
                  className={`Navbar__nav-link ${activeItem === link.name ? 'Navbar__nav-link--active' : ''}`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="Navbar__actions">
          <button type="button" className="Navbar__search-btn" aria-label="Search">
            <FiSearch className="Navbar__search-icon" />
          </button>

          <a href="#login" className="Navbar__login-link">
            Log in
          </a>

          <a href="#start-learning" className="Navbar__cta-btn">
            <span>Start Learning</span>
            <FiArrowRight className="Navbar__cta-icon" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="Navbar__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`Navbar__mobile-drawer ${isMobileMenuOpen ? 'Navbar__mobile-drawer--open' : ''}`}>
        <ul className="Navbar__mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`Navbar__mobile-nav-link ${activeItem === link.name ? 'Navbar__mobile-nav-link--active' : ''}`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="Navbar__mobile-actions">
          <a href="#login" className="Navbar__mobile-login-link" onClick={() => setIsMobileMenuOpen(false)}>
            Log in
          </a>
          <a href="#start-learning" className="Navbar__mobile-cta-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Start Learning</span>
            <FiArrowRight />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;