import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';
import './Footer.css';

import logo from '../../assets/numeric.jpeg';

const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Our Courses', href: '/education' },
      { name: 'Mentorship Program', href: '/education' },
      { name: 'Student Reviews', href: '/faqs' },
      { name: 'Blog & Market Insights', href: '/blog' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Trading Courses',
    links: [
      { name: 'Stock Market Basics', href: '/education' },
      { name: 'Technical Analysis', href: '/education' },
      { name: 'Options Trading', href: '/education' },
      { name: 'Forex & Commodity', href: '/education' },
      { name: 'Price Action Trading', href: '/education' },
      { name: 'Risk Management', href: '/education' },
    ],
  },
  {
    title: 'Student Support',
    links: [
      { name: "FAQ's", href: '/faqs' },
      { name: 'Terms & Conditions', href: '/faqs' },
      { name: 'Privacy Policy', href: '/faqs' },
      { name: 'Risk Disclaimer', href: '/faqs' },
      { name: 'Refund Policy', href: '/faqs' },
    ],
  },
];

const paymentMethods = [
  { label: 'UPI', className: 'upi' },
  { label: 'VISA', className: 'visa' },
  { label: 'Mastercard', className: 'mastercard', isDots: true },
  { label: 'Razorpay', className: 'razorpay' },
  { label: 'G Pay', className: 'gpay' },
  { label: 'Paytm', className: 'paytm' },
];

const socialLinks = [
  { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: <FaTwitter />, label: 'Twitter', href: 'https://twitter.com' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="Footer" itemScope itemType="https://schema.org/EducationalOrganization">
      <div className="Footer-glow" aria-hidden="true" />

      <div className="Footer-container">
        {/* Top Section */}
        <div className="Footer-top">
          {/* Columns */}
          <div className="Footer-columns">
            {footerColumns.map((col) => (
              <div className="Footer-col" key={col.title}>
                <h3 className="Footer-col-title">{col.title}</h3>
                <ul className="Footer-col-list">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="Footer-link" title={link.name}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Bar Below Columns */}
          <div className="Footer-contactBar">
            <div className="Footer-contactItem" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <FaMapMarkerAlt className="Footer-contactIcon" />
              <div>
                <strong>Head Office:</strong>
                <span itemProp="streetAddress"> 511A, Grand Bazar, Bamphakuda, Phulnakhara</span>,{' '}
                <span itemProp="addressLocality">Bhubaneswar</span>, <span itemProp="addressRegion">Odisha</span>{' '}
                <span itemProp="postalCode">754001</span>
              </div>
            </div>

            <div className="Footer-contactItem">
              <FaPhoneAlt className="Footer-contactIcon" />
              <div>
                <strong>Call Us:</strong>{' '}
                <a href="tel:+919938702775" itemProp="telephone" className="Footer-contactLink">
                  +91 9938702775
                </a>
              </div>
            </div>

            <div className="Footer-contactItem">
              <FaEnvelope className="Footer-contactIcon" />
              <div>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@numericedge.in" itemProp="email" className="Footer-contactLink">
                  info@numericedge.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mid Section - Brand Info & Payment Options */}
        <div className="Footer-mid">
          <div className="Footer-brand">
            <img src={logo} alt="Numeric Edge Trading Academy" className="Footer-brand-logoImg" />
            <span className="Footer-brand-text" itemProp="name">
              Numeric Edge <strong>Trading Academy</strong>
            </span>
          </div>

          <div className="Footer-payments">
            <span className="Footer-payments-label">Supported Payment Modes:</span>
            <div className="Footer-payments-icons">
              {paymentMethods.map((method) => (
                <span key={method.label} className={`Footer-paymentBadge Footer-paymentBadge--${method.className}`}>
                  {method.isDots && (
                    <span className="Footer-paymentBadge-dots" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  )}
                  {method.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="Footer-bottomBar">
        <div className="Footer-container Footer-bottomBar-inner">
          <p className="Footer-copyright">
            © {year} Developed By{' '}
            <a
              href="https://prwebstock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer-brand-name"
              itemProp="legalName"
              style={{ textDecoration: 'none' }}
            >
              PR Webstock
            </a>
            . All Rights Reserved.
          </p>

          <div className="Footer-social">
            <span className="Footer-social-label">Follow Us:</span>
            <div className="Footer-social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="Footer-social-icon"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        type="button"
        className="Footer-scrollTop"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;