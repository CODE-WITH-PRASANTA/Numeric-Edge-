import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { FaMoneyBillWave } from 'react-icons/fa';
import './Blogbreadcurm.css';

const Blogbreadcurm = () => {
  return (
    <div className="Blogbreadcurm">
      <div className="Blogbreadcurm-wrapper">

        {/* Title area with decorative rotating money background */}
        <div className="Blogbreadcurm-title-area">

          {/* Decorative background money icon (rotating) */}
          <span className="Blogbreadcurm-bg-icon">
            <FaMoneyBillWave />
          </span>

          <h1 className="Blogbreadcurm-title">Blog Grid</h1>
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="Blogbreadcurm-nav">
          <a href="/" className="Blogbreadcurm-home">Home</a>

          <span className="Blogbreadcurm-separator">
            <HiOutlineMinus />
          </span>

          <span className="Blogbreadcurm-current">Blog Grid</span>
        </nav>

      </div>
    </div>
  );
};

export default Blogbreadcurm;