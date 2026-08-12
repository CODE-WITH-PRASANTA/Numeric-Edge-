import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

// Match these paths EXACTLY with App.js routes
const navLinks = [
  { label: 'Home', path: '/', end: true },
  { label: 'About Us', path: '/about-us' },
  { label: 'Our Courses', path: '/education' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const NavbarLogo = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="url(#navbarLogoGrad)" />
    <path
      d="M10 25 L17 17 L21 21 L30 11"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M23 11 H30 V18" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="navbarLogoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#25b869" />
        <stop offset="100%" stopColor="#0f7a3d" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const searchInputRef = useRef(null);
  const searchWrapRef = useRef(null);

  // Shadow / condensed state once the page scrolls
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Focus the search input when it opens, close it on outside click
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
    // Hook up real search navigation/query here
  };

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Navbar-container">
        <NavLink to="/" className="Navbar-brand" onClick={closeMobileMenu}>
          <NavbarLogo className="Navbar-brand-logo" />
          <span className="Navbar-brand-text">
            For<strong>Tradex</strong>
          </span>
        </NavLink>

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

      {/* Mobile drawer */}
      <div className={`Navbar-overlay ${isMobileOpen ? 'visible' : ''}`} onClick={closeMobileMenu} />
      <div className={`Navbar-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="Navbar-drawer-header">
          <span className="Navbar-brand-text">
            For<strong>Tradex</strong>
          </span>
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
      </div>
    </header>
  );
};

export default Navbar;