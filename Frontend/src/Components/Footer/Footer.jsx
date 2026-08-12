import React from 'react';
import {
  FaApple,
  FaAndroid,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaQrcode,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';
import './Footer.css';

// Logo Image Import (अपनी फाइल की लोकेशन के अनुसार पथ बदलें)
import logo from '../../assets/numeric.jpeg';

const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Courses', href: '/courses' },
      { name: 'Mentorship Program', href: '/mentorship' },
      { name: 'Student Reviews', href: '/reviews' },
      { name: 'Blog & Market Insights', href: '/blog' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Trading Courses',
    links: [
      { name: 'Stock Market Basics', href: '/courses/basics' },
      { name: 'Technical Analysis', href: '/courses/technical-analysis' },
      { name: 'Options Trading', href: '/courses/options' },
      { name: 'Forex & Commodity', href: '/courses/forex' },
      { name: 'Price Action Trading', href: '/courses/price-action' },
      { name: 'Risk Management', href: '/courses/risk-management' },
    ],
  },
  {
    title: 'Student Support',
    links: [
      { name: "FAQ's", href: '/faqs' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Risk Disclaimer', href: '/disclaimer' },
      { name: 'Refund Policy', href: '/refund-policy' },
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

const storeBadges = [
  { icon: <FaApple />, eyebrow: 'Download on the', title: 'App Store', modifier: 'apple', href: '#' },
  { icon: <FaAndroid />, eyebrow: 'Get it on', title: 'Google Play', modifier: 'android', href: '#' },
];

// QR code pattern data
const qrCells = (() => {
  const size = 9;
  const seedRow = (r) => [1, 0, 1, 1, 0, 1, 0, 1, 1].map((v, i) => v ^ ((r + i) % 3 === 0 ? 1 : 0));
  const cells = [];
  for (let r = 0; r < size; r++) {
    const row = seedRow(r);
    row.forEach((v, c) => {
      const isFinder = (r < 3 && c < 3) || (r < 3 && c > size - 4) || (r > size - 4 && c < 3);
      if (v || isFinder) cells.push({ r, c, on: isFinder ? (r === 1 && c === 1 ? 0 : 1) : !!v });
    });
  }
  return cells;
})();

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="Footer" itemScope itemType="https://schema.org/EducationalOrganization">
      <div className="Footer-glow" aria-hidden="true" />

      <div className="Footer-container">
        {/* Contact Bar (SEO Local Business Data) */}
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

        <div className="Footer-top">
          {/* Footer Columns */}
          <div className="Footer-columns">
            {footerColumns.map((col) => (
              <div className="Footer-col" key={col.title}>
                <h3 className="Footer-col-title">{col.title}</h3>
                <ul className="Footer-col-list">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="Footer-link" title={link.name}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* App Promo Card */}
          <div className="Footer-promo">
            <div className="Footer-promo-inner">
              <div className="Footer-promo-brand">
                <img
                  src={logo}
                  alt="Numeric Edge Trading Academy Logo"
                  className="Footer-promo-logoImg"
                  itemProp="logo"
                />
              </div>

              <p className="Footer-promo-tagline">Learn Stock Market & Trading on Our App.</p>

              <div className="Footer-promo-qrFrame">
                <span className="Footer-promo-qrFrame-corner tl" />
                <span className="Footer-promo-qrFrame-corner tr" />
                <span className="Footer-promo-qrFrame-corner bl" />
                <span className="Footer-promo-qrFrame-corner br" />

                <div className="Footer-promo-qr" role="img" aria-label="QR Code to download Numeric Edge Mobile App">
                  <svg viewBox="0 0 9 9" className="Footer-promo-qr-svg">
                    {qrCells.map(({ r, c, on }, i) =>
                      on ? <rect key={i} x={c} y={r} width="1" height="1" className="Footer-promo-qr-cell" /> : null
                    )}
                  </svg>
                  <span className="Footer-promo-qr-scanLine" aria-hidden="true" />
                </div>
              </div>

              <span className="Footer-promo-qrCaption">
                <FaQrcode /> Scan to Download App
              </span>

              <div className="Footer-promo-stores">
                {storeBadges.map((store) => (
                  <a
                    key={store.title}
                    href={store.href}
                    className={`Footer-storeBadge Footer-storeBadge--${store.modifier}`}
                    aria-label={`${store.eyebrow} ${store.title}`}
                  >
                    <span className="Footer-storeBadge-icon">{store.icon}</span>
                    <span className="Footer-storeBadge-text">
                      <small>{store.eyebrow}</small>
                      <strong>{store.title}</strong>
                    </span>
                  </a>
                ))}
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
            Copyright &copy; {year} <span className="Footer-brand-name" itemProp="legalName">Numeric Edge Trading Academy</span>. All Rights Reserved.
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

          <button type="button" className="Footer-scrollTop" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;