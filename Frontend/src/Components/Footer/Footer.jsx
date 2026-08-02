import React from 'react';
import {
  FaApple,
  FaWindows,
  FaAndroid,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSkype,
  FaArrowUp,
  FaQrcode,
} from 'react-icons/fa';
import "./Footer.css";

const footerColumns = [
  {
    title: 'About Us',
    links: ['About Us', "Faq's", 'Our Team', 'Markets Place', 'Platform', 'Blog Grid', 'Contact Us'],
  },
  {
    title: 'Platforms',
    links: ['Forex', 'Crypto CFDs', 'Share CFDs', 'Commodities', 'Spot Metals', 'Energies', 'MetaTrader 5'],
  },
  {
    title: 'Trading Tools',
    links: ['FXT Navigator', 'Trading Central', 'Economic Calendar', 'Market Sentiment', 'API Trading', 'VPS', 'CDF Rollover'],
  },
  {
    title: 'Support',
    links: ['Legal Information', 'Privacy Policy', 'Regulations', 'Risk Disclaimer', 'Complaints Procedure', 'Company News', 'Trading Videos'],
  },
];

const paymentMethods = [
  { label: 'AMEX', className: 'amex' },
  { label: 'VISA', className: 'visa' },
  { label: 'PayPal', className: 'paypal' },
  { label: 'Mastercard', className: 'mastercard', isDots: true },
  { label: 'DISCOVER', className: 'discover' },
  { label: 'G Pay', className: 'gpay' },
];

const socialLinks = [
  { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
  { icon: <FaTwitter />, label: 'Twitter', href: '#' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
  { icon: <FaSkype />, label: 'Skype', href: '#' },
];

const storeBadges = [
  { icon: <FaApple />, eyebrow: 'Download on the', title: 'App Store', modifier: 'apple' },
  { icon: <FaWindows />, eyebrow: 'Get it from', title: 'Microsoft Store', modifier: 'windows' },
  { icon: <FaAndroid />, eyebrow: 'Get it on', title: 'Google Play', modifier: 'android' },
];

// Deterministic pseudo-QR pattern — decorative only, not a scannable code.
const qrCells = (() => {
  const size = 9;
  const seedRow = (r) => [1, 0, 1, 1, 0, 1, 0, 1, 1].map((v, i) => (v ^ ((r + i) % 3 === 0 ? 1 : 0)));
  const cells = [];
  for (let r = 0; r < size; r++) {
    const row = seedRow(r);
    row.forEach((v, c) => {
      const isFinder =
        (r < 3 && c < 3) || (r < 3 && c > size - 4) || (r > size - 4 && c < 3);
      if (v || isFinder) cells.push({ r, c, on: isFinder ? (r === 1 && c === 1 ? 0 : 1) || true : !!v });
    });
  }
  return cells;
})();

const FooterLogo = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="url(#footerLogoGrad)" />
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
      <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#25b869" />
        <stop offset="100%" stopColor="#0f7a3d" />
      </linearGradient>
    </defs>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="Footer">
      <div className="Footer-glow" aria-hidden="true" />

      <div className="Footer-container">
        <div className="Footer-top">
          <div className="Footer-columns">
            {footerColumns.map((col) => (
              <div className="Footer-col" key={col.title}>
                <h4 className="Footer-col-title">{col.title}</h4>
                <ul className="Footer-col-list">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="Footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="Footer-promo">
            <div className="Footer-promo-inner">
              <div className="Footer-promo-brand">
                <FooterLogo className="Footer-promo-logoMark" />
                <span className="Footer-promo-logoText">
                  For<strong>Tradex</strong>
                </span>
              </div>

              <p className="Footer-promo-tagline">Trade multipliers on our app.</p>

              <div className="Footer-promo-qrFrame">
                <span className="Footer-promo-qrFrame-corner tl" />
                <span className="Footer-promo-qrFrame-corner tr" />
                <span className="Footer-promo-qrFrame-corner bl" />
                <span className="Footer-promo-qrFrame-corner br" />

                <div className="Footer-promo-qr" role="img" aria-label="QR code to download the app">
                  <svg viewBox="0 0 9 9" className="Footer-promo-qr-svg">
                    {qrCells.map(({ r, c, on }, i) =>
                      on ? <rect key={i} x={c} y={r} width="1" height="1" className="Footer-promo-qr-cell" /> : null
                    )}
                  </svg>
                  <span className="Footer-promo-qr-scanLine" aria-hidden="true" />
                </div>
              </div>

              <span className="Footer-promo-qrCaption">
                <FaQrcode /> Scan to download
              </span>

              <div className="Footer-promo-stores">
                {storeBadges.map((store) => (
                  <a
                    key={store.title}
                    href="#"
                    className={`Footer-storeBadge Footer-storeBadge--${store.modifier}`}
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

        <div className="Footer-mid">
          <div className="Footer-brand">
            <FooterLogo className="Footer-brand-logoMark" />
            <span className="Footer-brand-text">
              For<strong>Tradex</strong>
            </span>
          </div>

          <div className="Footer-payments">
            <span className="Footer-payments-label">We Accept:</span>
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

      <div className="Footer-bottomBar">
        <div className="Footer-container Footer-bottomBar-inner">
          <p className="Footer-copyright">
            Copyright &copy; 2007-{year}
            <span className="Footer-brand-name"> ForTradex</span>. All rights reserved.
          </p>

          <div className="Footer-social">
            <span className="Footer-social-label">Follow Us On:</span>
            <div className="Footer-social-icons">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="Footer-social-icon" aria-label={social.label}>
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