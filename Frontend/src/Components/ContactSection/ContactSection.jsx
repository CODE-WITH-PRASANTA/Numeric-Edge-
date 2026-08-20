import React, { useState } from 'react';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="ContactSection">
      <div className="ContactSection-container">
        
        {/* Contact Info Header Cards */}
        <div className="ContactSection-info-grid">
          <div className="ContactSection-info-card">
            <div className="ContactSection-icon-wrapper">
              <HiOutlineLocationMarker />
            </div>
            <div className="ContactSection-info-content">
              <h3>Corporate Office</h3>
              <p>Grand Bazar, Phulnakhara,</p>
              <p>Cuttack, Odisha 754001</p>
            </div>
          </div>

          <div className="ContactSection-info-card">
            <div className="ContactSection-icon-wrapper">
              <HiOutlineLocationMarker />
            </div>
            <div className="ContactSection-info-content">
              <h3>Main Warehouse</h3>
              <p>Phulnakhara Square,</p>
              <p>Cuttack, Odisha</p>
            </div>
          </div>

          <div className="ContactSection-info-card">
            <div className="ContactSection-icon-wrapper">
              <HiOutlineMail />
            </div>
            <div className="ContactSection-info-content">
              <h3>Email Address</h3>
              <p>support@example.com</p>
              <p>contact@example.com</p>
            </div>
          </div>

          <div className="ContactSection-info-card">
            <div className="ContactSection-icon-wrapper">
              <HiOutlinePhone />
            </div>
            <div className="ContactSection-info-content">
              <h3>Phone Number</h3>
              <p>+(208) 555-0141</p>
              <p>+(208) 555-0142</p>
            </div>
          </div>
        </div>

        {/* Contact Form Area */}
        <form className="ContactSection-form" onSubmit={handleSubmit}>
          <div className="ContactSection-form-row">
            <div className="ContactSection-form-group">
              <label htmlFor="name">Your Name <span>*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="ContactSection-form-group">
              <label htmlFor="phone">Phone <span>*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="ContactSection-form-group full-width">
            <label htmlFor="email">Email Address <span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ContactSection-form-group full-width">
            <label htmlFor="subject">Subject <span>*</span></label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ContactSection-form-group full-width">
            <label htmlFor="message">Write Message <span>*</span></label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="ContactSection-submit-btn">
            <span>Send Message</span>
          </button>
        </form>

        {/* Map Section */}
        <div className="ContactSection-map-wrapper">
          <iframe
            title="Location Map - Grand Bazar, Phulnakhara, Cuttack"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14972.356230673322!2d85.881021!3d20.338211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a73be953eb1%3A0x6b78f8ad7e14d10f!2sPhulnakhara%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Floating Enquiry Widget (WhatsApp & Call) */}
      <div className="floating-enquiry-widget">
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn whatsapp-btn"
          title="Chat on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        <a 
          href="tel:+919876543210" 
          className="floating-btn call-btn"
          title="Call for Enquiry"
        >
          <HiOutlinePhone />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;