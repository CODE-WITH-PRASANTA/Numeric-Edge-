import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { FaMoneyBillWave } from 'react-icons/fa';
import './Blogdetailsbreadcurm.css';

const Blogdetailsbreadcurm = () => {
  return (
    <div className="Blogdetailsbreadcurm">
      <div className="Blogdetailsbreadcurm-wrapper">

        {/* Title area with decorative rotating money background */}
        <div className="Blogdetailsbreadcurm-title-area">

          {/* Decorative background money icon (rotating) */}
          <span className="Blogdetailsbreadcurm-bg-icon">
            <FaMoneyBillWave />
          </span>

          <h1 className="Blogdetailsbreadcurm-title">Blog Details</h1>
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="Blogdetailsbreadcurm-nav">
          <a href="/" className="Blogdetailsbreadcurm-home">Home</a>

          <span className="Blogdetailsbreadcurm-separator">
            <HiOutlineMinus />
          </span>

          <span className="Blogdetailsbreadcurm-current">Blog Details</span>
        </nav>

      </div>
    </div>
  );
};

export default Blogdetailsbreadcurm;