import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/numeric.jpeg'; // अपनी लोगो इमेज का सही Path यहाँ सेट करें
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/', end: true },
   { label: 'About Us', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Our Mentors', path: '/mentors' },
  { label: 'Market Insights', path: '/market-insights' },
  { label: 'Trading', path: '/trading' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const searchInputRef = useRef(null);
  const searchWrapRef = useRef(null);

  // Scroll handle for dynamic styles
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll during mobile drawer state
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Handle Search Input Focus & Outside Click
  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }

    const handleClickOutside = (e) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Navbar-container">
        
        {/* Brand Logo Only (Without Text) */}
        <NavLink to="/" className="Navbar-brand" onClick={closeMobileMenu}>
          <img src={logo} alt="Trading Academy Logo" className="Navbar-logo-img" />
        </NavLink>

        {/* Navigation Links */}
        <nav className="Navbar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={({ isActive }) => `Navbar-pill ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="Navbar-actions">
          <div className={`Navbar-search ${isSearchOpen ? 'open' : ''}`} ref={searchWrapRef}>
            <form onSubmit={handleSearchSubmit} className="Navbar-search-form">
              <input
                ref={searchInputRef}
                type="text"
                className="Navbar-search-input"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
            <button
              type="button"
              className="Navbar-searchToggle"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              aria-label="Toggle search"
            >
              <FaSearch />
            </button>
          </div>

          <NavLink to="/courses" className="Navbar-cta">
            Start Learning
          </NavLink>

          <button
            type="button"
            className="Navbar-burger"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Overlay & Drawer */}
      <div className={`Navbar-overlay ${isMobileOpen ? 'visible' : ''}`} onClick={closeMobileMenu} />
      <div className={`Navbar-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="Navbar-drawer-header">
          <NavLink to="/" className="Navbar-brand" onClick={closeMobileMenu}>
            <img src={logo} alt="Trading Academy Logo" className="Navbar-logo-img drawer-logo" />
          </NavLink>
          <button type="button" className="Navbar-drawer-close" onClick={closeMobileMenu} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        <nav className="Navbar-drawer-links" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              onClick={closeMobileMenu}
              className={({ isActive }) => `Navbar-drawer-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="Navbar-drawer-cta-wrap">
          <NavLink to="/courses" className="Navbar-cta Navbar-drawer-cta" onClick={closeMobileMenu}>
            Start Learning
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;