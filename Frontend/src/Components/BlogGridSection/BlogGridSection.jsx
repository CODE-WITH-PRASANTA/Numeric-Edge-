import React, { useState } from 'react';
import { FiSearch, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './BlogGridSection.css';

const BlogGridSection = () => {
  // State to manage active pagination dot
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const posts = [
    {
      id: 1,
      tag: 'JPY',
      title: "A Traders' Weekly Playbook: The JPY at work",
      description: 'We closed out what was a strong week for equity indices',
      authorImg: 'https://i.pravatar.cc/100?img=1',
      authorName: 'Robert Henry',
      date: '10 May 2024',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      tag: 'PDC',
      title: "China's Geo-Jade wins bid to develop Iraq's Jabal oil",
      description: 'We closed out what was a strong week for equity indices',
      authorImg: 'https://i.pravatar.cc/100?img=2',
      authorName: 'Haris Gulf',
      date: '09 May 2024',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      tag: 'UJD',
      title: 'Niger PM says oil export blockade violates accords',
      description: 'We closed out what was a strong week for equity indices',
      authorImg: 'https://i.pravatar.cc/100?img=3',
      authorName: 'Jhon Rock',
      date: '08 May 2024',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      tag: 'PBD',
      title: 'Chart Patterns Every Trader Should Know',
      description: 'We closed out what was a strong week for equity indices',
      authorImg: 'https://i.pravatar.cc/100?img=4',
      authorName: 'Adam Smith',
      date: '07 May 2024',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 5,
      tag: 'USD',
      title: 'Federal Reserve Maintains Steady Interest Rates',
      description: 'We closed out what was a strong week for equity indices',
      authorImg: 'https://i.pravatar.cc/100?img=5',
      authorName: 'Sarah Jenkins',
      date: '05 May 2024',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 6,
      tag: 'EUR',
      title: 'European Markets Rally Following ECB Announcement',
      description: 'We closed out what was a strong week for equity indices',
      authorImg: 'https://i.pravatar.cc/100?img=6',
      authorName: 'Michael Vance',
      date: '03 May 2024',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60'
    }
  ];

  const categories = [
    { name: 'Day Trading', count: '(09)' },
    { name: 'Swing Trading', count: '(20)' },
    { name: 'Position Trading', count: '(25)' },
    { name: 'Driven Trading', count: '(06)' },
    { name: 'Economic', count: '(18)' },
    { name: 'Options Trading', count: '(11)' }
  ];

  const latestPosts = [
    {
      id: 1,
      title: 'Traders open and close positions',
      date: '1 May 2024',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=150&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'Traders execute a large number of',
      date: '1 May 2024',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=150&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      title: 'Futures trading can involve various',
      date: '1 May 2024',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=150&auto=format&fit=crop&q=60'
    }
  ];

  const popularTags = ['Account', 'Careers', 'Demo', 'Education', 'Markets', 'MT4', 'Trading', 'MT5'];

  const archives = [
    { date: 'December 20, 2022', count: '(09)' },
    { date: 'December 22, 2022', count: '(20)' },
    { date: 'December 23, 2022', count: '(25)' },
    { date: 'December 28, 2022', count: '(06)' }
  ];

  return (
    <div className="BlogGridSection">
      <div className="BlogGridSection-container">
        
        {/* Left Side: Cards Grid & Pagination */}
        <main className="BlogGridSection-main">
          <div className="BlogGridSection-cards-grid">
            {posts.map((post) => (
              <article key={post.id} className="BlogGridSection-card">
                <div className="BlogGridSection-card-img-wrapper">
                  <img src={post.image} alt={post.title} className="BlogGridSection-card-img" />
                </div>
                
                <div className="BlogGridSection-card-content">
                  <span className="BlogGridSection-card-tag">{post.tag}</span>
                  <h3 className="BlogGridSection-card-title">{post.title}</h3>
                  <p className="BlogGridSection-card-desc">{post.description}</p>
                  
                  <div className="BlogGridSection-card-author">
                    <img src={post.authorImg} alt={post.authorName} className="BlogGridSection-author-avatar" />
                    <span className="BlogGridSection-author-name">{post.authorName}</span>
                    <span className="BlogGridSection-post-date">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Reference Pagination Component */}
          <div className="BlogGridSection-pagination">
            {/* Left Arrow Button */}
            <button className="BlogGridSection-page-arrow" onClick={handlePrev} aria-label="Previous Page">
              <FiArrowLeft />
            </button>

            {/* Pagination Dots */}
            <div className="BlogGridSection-dots-wrapper">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`BlogGridSection-dot ${currentPage === index ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Page ${index + 1}`}
                >
                  <span className="BlogGridSection-dot-inner"></span>
                </button>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button className="BlogGridSection-page-arrow" onClick={handleNext} aria-label="Next Page">
              <FiArrowRight />
            </button>
          </div>
        </main>

        {/* Right Side: Boxed Sidebar */}
        <aside className="BlogGridSection-sidebar">
          
          {/* Search Box */}
          <div className="BlogGridSection-search-box">
            <input type="text" placeholder="Search" className="BlogGridSection-search-input" />
            <FiSearch className="BlogGridSection-search-icon" />
          </div>

          {/* Categories */}
          <div className="BlogGridSection-widget">
            <h2 className="BlogGridSection-widget-title">Categories</h2>
            <ul className="BlogGridSection-category-list">
              {categories.map((cat, idx) => (
                <li key={idx} className="BlogGridSection-category-item">
                  <span>{cat.name}</span>
                  <span className="BlogGridSection-count">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Posts */}
          <div className="BlogGridSection-widget">
            <h2 className="BlogGridSection-widget-title">Latest Posts</h2>
            <div className="BlogGridSection-latest-list">
              {latestPosts.map((item) => (
                <div key={item.id} className="BlogGridSection-latest-item">
                  <div className="BlogGridSection-latest-img-wrapper">
                    <img src={item.image} alt={item.title} className="BlogGridSection-latest-img" />
                  </div>
                  <div className="BlogGridSection-latest-info">
                    <h4 className="BlogGridSection-latest-title">{item.title}</h4>
                    <span className="BlogGridSection-latest-date">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="BlogGridSection-widget">
            <h2 className="BlogGridSection-widget-title">Popular tag</h2>
            <div className="BlogGridSection-tags-container">
              {popularTags.map((tag, idx) => (
                <button key={idx} className="BlogGridSection-tag-btn">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Archives */}
          <div className="BlogGridSection-widget">
            <h2 className="BlogGridSection-widget-title">Archives</h2>
            <ul className="BlogGridSection-archive-list">
              {archives.map((archive, idx) => (
                <li key={idx} className="BlogGridSection-archive-item">
                  <span>{archive.date}</span>
                  <span className="BlogGridSection-count">{archive.count}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default BlogGridSection;