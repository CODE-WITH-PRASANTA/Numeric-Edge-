import React, { useState } from 'react';
import './Testimonial.css';

const initialData = [
  {
    id: 1,
    name: 'James Carter',
    role: 'Swing Trader',
    category: 'Traders',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Numeric Edge has completely transformed my trading journey. The real-time data and insights helped me make confident decisions and grow my account consistently.',
    growth: '+78.42%',
    period: 'in 6 Months'
  },
  {
    id: 2,
    name: 'Sophia Bennett',
    role: 'Day Trader',
    category: 'Traders',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'The trade terminal is lightning fast and incredibly intuitive. I love the advanced charts and risk management tools that keep me ahead of the market.',
    growth: '+62.35%',
    period: 'in 3 Months'
  },
  {
    id: 3,
    name: 'Michael Anderson',
    role: 'Crypto Investor',
    category: 'Investors',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'As a crypto investor, I need accurate data and security. Numeric Edge delivers both with a seamless experience and top-notch customer support.',
    growth: '+104.21%',
    period: 'in 4 Months'
  }
];

const defaultAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80';

const Testimonial = () => {
  const [testimonialsData, setTestimonialsData] = useState(initialData);
  const [editingId, setEditingId] = useState(null);
  const [viewProfile, setViewProfile] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    category: 'Traders',
    rating: 5,
    growth: '',
    period: '',
    comment: '',
    avatar: ''
  });

  const formCategories = ['Traders', 'Investors', 'Algo Traders', 'Long Term Investors'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveReview = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    if (editingId) {
      setTestimonialsData((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                name: formData.name,
                role: formData.role || 'Trader',
                category: formData.category,
                avatar: formData.avatar || item.avatar || defaultAvatar,
                rating: Number(formData.rating),
                growth: formData.growth
                  ? formData.growth.startsWith('+')
                    ? formData.growth
                    : `+${formData.growth}`
                  : item.growth,
                period: formData.period
                  ? formData.period.startsWith('in ')
                    ? formData.period
                    : `in ${formData.period}`
                  : item.period,
                comment: formData.comment
              }
            : item
        )
      );
      setEditingId(null);
    } else {
      const newEntry = {
        id: Date.now(),
        name: formData.name,
        role: formData.role || 'Trader',
        category: formData.category,
        avatar: formData.avatar || defaultAvatar,
        rating: Number(formData.rating),
        comment: formData.comment,
        growth: formData.growth
          ? formData.growth.startsWith('+')
            ? formData.growth
            : `+${formData.growth}`
          : '+50.00%',
        period: formData.period
          ? formData.period.startsWith('in ')
            ? formData.period
            : `in ${formData.period}`
          : 'in 1 Month'
      };
      setTestimonialsData((prev) => [newEntry, ...prev]);
    }

    setFormData({
      name: '',
      role: '',
      category: 'Traders',
      rating: 5,
      growth: '',
      period: '',
      comment: '',
      avatar: ''
    });
  };

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      role: item.role,
      category: item.category,
      rating: item.rating,
      growth: item.growth,
      period: item.period,
      comment: item.comment,
      avatar: item.avatar
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      name: '',
      role: '',
      category: 'Traders',
      rating: 5,
      growth: '',
      period: '',
      comment: '',
      avatar: ''
    });
  };

  const handleDeleteReview = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this review?');
    if (confirmDelete) {
      setTestimonialsData((prev) => prev.filter((item) => item.id !== id));
      if (editingId === id) {
        handleCancelEdit();
      }
      if (viewProfile && viewProfile.id === id) {
        setViewProfile(null);
      }
    }
  };

  const handleStartTrading = () => {
    window.location.href = '/trade';
  };

  return (
    <div className="tm-container">
      {/* Header */}
      <header className="tm-header">
        <div className="tm-header-left">
          <h1 className="tm-title">Testimonials</h1>
          <p className="tm-subtitle">
            Hear from traders and investors who have achieved success with{' '}
            <span className="tm-brand-highlight">Numeric Edge</span>.
          </p>
        </div>

        <div className="tm-header-right">
          <div className="tm-rating-box">
            <div className="tm-rating-score-group">
              <span className="tm-rating-num">4.9</span>
              <div className="tm-stars">{'★'.repeat(5)}</div>
            </div>
            <span className="tm-rating-count">Based on {testimonialsData.length + 245}+ reviews</span>
          </div>

          <div className="tm-trust-card">
            <div className="tm-quote-icon">❝</div>
            <div className="tm-trust-text">
              <strong>Trusted by traders</strong>
              <span>across the world</span>
            </div>
          </div>
        </div>
      </header>

      {/* Add / Edit Form */}
      <section className="tm-form-wrapper">
        <div className="tm-form-header">
          <h2 className="tm-section-heading">
            {editingId ? 'Edit Trader Review' : 'Add a New Review'}
          </h2>
          {editingId && (
            <button type="button" className="tm-cancel-btn" onClick={handleCancelEdit}>
              ✕ Cancel Editing
            </button>
          )}
        </div>

        <form className="tm-add-form" onSubmit={handleSaveReview}>
          <div className="tm-form-grid">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="role"
              placeholder="Role (e.g., Swing Trader)"
              value={formData.role}
              onChange={handleInputChange}
            />
            <select name="category" value={formData.category} onChange={handleInputChange}>
              {formCategories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select name="rating" value={formData.rating} onChange={handleInputChange}>
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>{r} Stars</option>
              ))}
            </select>
            <input
              type="text"
              name="growth"
              placeholder="Growth % (e.g. +75.20%)"
              value={formData.growth}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="period"
              placeholder="Period (e.g. in 6 Months)"
              value={formData.period}
              onChange={handleInputChange}
            />

            <div className="tm-upload-container tm-grid-full">
              <label htmlFor="tm-file-input" className="tm-upload-label">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span>{formData.avatar ? 'Change Avatar Image' : 'Upload Avatar Image'}</span>
              </label>
              <input
                id="tm-file-input"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />

              {formData.avatar && (
                <div className="tm-upload-preview">
                  <img src={formData.avatar} alt="Preview" />
                  <button
                    type="button"
                    className="tm-remove-avatar-btn"
                    onClick={() => setFormData((prev) => ({ ...prev, avatar: '' }))}
                  >
                    ✕ Remove
                  </button>
                </div>
              )}
            </div>

            <textarea
              name="comment"
              placeholder="Write your review / feedback here... *"
              rows="3"
              value={formData.comment}
              onChange={handleInputChange}
              className="tm-grid-full"
              required
            ></textarea>
          </div>
          <button type="submit" className="tm-submit-btn">
            {editingId ? 'Update Review' : 'Publish Review'}
          </button>
        </form>
      </section>

      {/* Table Section */}
      <section className="tm-table-container">
        <h2 className="tm-section-heading">All Reviews & Growth Data Table</h2>
        <div className="tm-table-responsive">
          <table className="tm-table">
            <thead>
              <tr>
                <th>Trader</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Portfolio Growth</th>
                <th>Period</th>
                <th>Feedback</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonialsData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="tm-tbl-user">
                      <img src={item.avatar} alt={item.name} className="tm-tbl-avatar" />
                      <div>
                        <div className="tm-tbl-name">{item.name}</div>
                        <div className="tm-tbl-role">{item.role}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="tm-tbl-badge">{item.category}</span>
                  </td>
                  <td className="tm-stars">{'★'.repeat(item.rating)}</td>
                  <td className="tm-tbl-growth">{item.growth}</td>
                  <td>{item.period}</td>
                  <td className="tm-tbl-comment">{item.comment}</td>
                  <td>
                    <div className="tm-action-btns">
                      {/* View Profile Button */}
                      <button
                        className="tm-action-btn tm-view-btn"
                        title="View Profile"
                        onClick={() => setViewProfile(item)}
                      >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>

                      {/* Edit Button */}
                      <button
                        className="tm-action-btn tm-edit-btn"
                        title="Edit Review"
                        onClick={() => handleEditClick(item)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>

                      {/* Remove / Delete Button */}
                      <button
                        className="tm-action-btn tm-delete-btn"
                        title="Delete Review"
                        onClick={() => handleDeleteReview(item.id)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* View Profile Modal Popup */}
      {viewProfile && (
        <div className="tm-modal-backdrop" onClick={() => setViewProfile(null)}>
          <div className="tm-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="tm-modal-close" onClick={() => setViewProfile(null)}>✕</button>
            <div className="tm-modal-header">
              <img src={viewProfile.avatar} alt={viewProfile.name} className="tm-modal-avatar" />
              <div>
                <h3 className="tm-modal-name">{viewProfile.name}</h3>
                <p className="tm-modal-role">{viewProfile.role}</p>
                <span className="tm-tbl-badge">{viewProfile.category}</span>
              </div>
            </div>

            <div className="tm-modal-stats">
              <div className="tm-modal-stat-box">
                <span className="tm-stat-title">Growth</span>
                <strong className="tm-stat-val tm-tbl-growth">{viewProfile.growth}</strong>
              </div>
              <div className="tm-modal-stat-box">
                <span className="tm-stat-title">Timeline</span>
                <strong className="tm-stat-val">{viewProfile.period}</strong>
              </div>
              <div className="tm-modal-stat-box">
                <span className="tm-stat-title">Rating</span>
                <strong className="tm-stat-val tm-stars">{'★'.repeat(viewProfile.rating)}</strong>
              </div>
            </div>

            <div className="tm-modal-comment-box">
              <strong>Feedback:</strong>
              <p>"{viewProfile.comment}"</p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="tm-cta-banner">
        <div className="tm-cta-left">
          <div className="tm-trophy-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7.5c-.28 0-.5.22-.5.5v1.5h10v-1.5c0-.28-.22-.5-.5-.5H15c-.55 0-1-.45-1-1v-2.34"></path>
              <path d="M18 4H6v7a6 6 0 0 0 12 0V4z"></path>
            </svg>
          </div>
          <div className="tm-cta-text">
            <h3>Join thousands of successful traders</h3>
            <p>Start your trading journey with Numeric Edge today.</p>
          </div>
        </div>
        <button className="tm-cta-btn" onClick={handleStartTrading}>
          Start Trading Now <span className="tm-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;