import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { FaMoneyBillWave } from 'react-icons/fa';
import './ContactUsBreadcrumb.css';

const ContactUsBreadcrumb = () => {
  return (
    <div className="ContactUsBreadcrumb">
      <div className="ContactUsBreadcrumb-container">

        {/* Title area with decorative rotating background icon */}
        <div className="ContactUsBreadcrumb-title-area">
          <span className="ContactUsBreadcrumb-bg-icon" aria-hidden="true">
            <FaMoneyBillWave />
          </span>

          <h1 className="ContactUsBreadcrumb-title">Contact Us</h1>
        </div>

        {/* Breadcrumb Links */}
        <nav className="ContactUsBreadcrumb-nav">
          <a href="/" className="ContactUsBreadcrumb-home">Home</a>

          <span className="ContactUsBreadcrumb-separator">
            <HiOutlineMinus />
          </span>

          <span className="ContactUsBreadcrumb-current">Contact Us</span>
        </nav>

      </div>
    </div>
  );
};

export default ContactUsBreadcrumb;