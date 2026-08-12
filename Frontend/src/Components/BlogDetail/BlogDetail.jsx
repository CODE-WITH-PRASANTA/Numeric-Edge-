import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import './BlogDetail.css';

const BlogDetail = () => {
  // Dummy image URLs for preview
  const mainBlogImg = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop";
  const authorImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";
  const post1Img = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=300&auto=format&fit=crop";
  const post2Img = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop";
  const post3Img = "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=300&auto=format&fit=crop";

  return (
    <div className="BlogDetail">
      <div className="BlogDetail-container">
        
        {/* LEFT SIDE: Main Article Content */}
        <main className="BlogDetail-content">
          <div className="BlogDetail-main-image-wrapper">
            <img 
              src={mainBlogImg} 
              alt="Traders capitalize on market movements" 
              className="BlogDetail-main-image" 
            />
          </div>

          {/* Meta Info */}
          <div className="BlogDetail-meta">
            <span className="BlogDetail-tag">JPY</span>
            <div className="BlogDetail-author">
              <img src={authorImg} alt="Robert Henry" className="BlogDetail-author-img" />
              <span className="BlogDetail-author-name">Robert Henry</span>
            </div>
            <span className="BlogDetail-date">10 May 2024</span>
          </div>

          {/* Article Title */}
          <h1 className="BlogDetail-title">
            Traders capitalize on market movements triggered by specific events
          </h1>

          {/* Body Paragraphs */}
          <p className="BlogDetail-paragraph">
            We closed out what was a strong week for equity indices large number of trades within a short timeframe, aiming to profit from small price movements Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Letraset sheets containing.
          </p>

          <p className="BlogDetail-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
          </p>

          <p className="BlogDetail-paragraph">
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>

          {/* Quote Block */}
          <blockquote className="BlogDetail-quote-block">
            <p className="BlogDetail-quote-text">
              That's why we adhere to strict quality standards and regulations to ensure that all our products meet the highest levels of safety and efficacy.
            </p>
            <div className="BlogDetail-quote-footer">
              <span className="BlogDetail-quote-author">— Brooklyn Simmons</span>
              <FaQuoteRight className="BlogDetail-quote-icon" />
            </div>
          </blockquote>
        </main>

        {/* RIGHT SIDE: Sidebar Widgets */}
        <aside className="BlogDetail-sidebar">
          
          {/* Search Box */}
          <div className="BlogDetail-search-box">
            <input 
              type="text" 
              placeholder="Search" 
              className="BlogDetail-search-input" 
            />
            <button className="BlogDetail-search-btn" aria-label="Search">
              <FiSearch />
            </button>
          </div>

          {/* Categories Widget (Box/Card Style) */}
          <div className="BlogDetail-widget BlogDetail-widget-box">
            <h3 className="BlogDetail-widget-title">Categories</h3>
            <ul className="BlogDetail-category-list">
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">Day Trading</span>
                <span className="BlogDetail-category-count">(09)</span>
              </li>
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">Swing Trading</span>
                <span className="BlogDetail-category-count">(20)</span>
              </li>
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">Position Trading</span>
                <span className="BlogDetail-category-count">(25)</span>
              </li>
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">Driven Trading</span>
                <span className="BlogDetail-category-count">(06)</span>
              </li>
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">Economic</span>
                <span className="BlogDetail-category-count">(18)</span>
              </li>
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">Options Trading</span>
                <span className="BlogDetail-category-count">(11)</span>
              </li>
            </ul>
          </div>

          {/* Latest Posts Widget */}
          <div className="BlogDetail-widget">
            <h3 className="BlogDetail-widget-title">Latest Posts</h3>
            <div className="BlogDetail-latest-posts">
              
              <div className="BlogDetail-post-item">
                <img src={post1Img} alt="Latest post 1" className="BlogDetail-post-thumb" />
                <div className="BlogDetail-post-info">
                  <h4 className="BlogDetail-post-title">Traders open and close positions</h4>
                  <span className="BlogDetail-post-date">1 May 2024</span>
                </div>
              </div>

              <div className="BlogDetail-post-item">
                <img src={post2Img} alt="Latest post 2" className="BlogDetail-post-thumb" />
                <div className="BlogDetail-post-info">
                  <h4 className="BlogDetail-post-title">Traders execute a large number of</h4>
                  <span className="BlogDetail-post-date">1 May 2024</span>
                </div>
              </div>

              <div className="BlogDetail-post-item">
                <img src={post3Img} alt="Latest post 3" className="BlogDetail-post-thumb" />
                <div className="BlogDetail-post-info">
                  <h4 className="BlogDetail-post-title">Futures trading can involve various</h4>
                  <span className="BlogDetail-post-date">1 May 2024</span>
                </div>
              </div>

            </div>
          </div>

          {/* Popular Tag Widget */}
          <div className="BlogDetail-widget">
            <h3 className="BlogDetail-widget-title">Popular tag</h3>
            <div className="BlogDetail-tags">
              <span className="BlogDetail-tag-item">Account</span>
              <span className="BlogDetail-tag-item">Careers</span>
              <span className="BlogDetail-tag-item">Demo</span>
              <span className="BlogDetail-tag-item">Education</span>
              <span className="BlogDetail-tag-item">Markets</span>
              <span className="BlogDetail-tag-item">MT4</span>
              <span className="BlogDetail-tag-item">Trading</span>
              <span className="BlogDetail-tag-item">MT5</span>
            </div>
          </div>

          {/* Archives Widget (Box/Card Style) */}
          <div className="BlogDetail-widget BlogDetail-widget-box">
            <h3 className="BlogDetail-widget-title">Archives</h3>
            <ul className="BlogDetail-category-list">
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">December 20, 2022</span>
                <span className="BlogDetail-category-count">(09)</span>
              </li>
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">December 22, 2022</span>
                <span className="BlogDetail-category-count">(20)</span>
              </li>
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">December 23, 2022</span>
                <span className="BlogDetail-category-count">(25)</span>
              </li>
              <li className="BlogDetail-category-item">
                <span className="BlogDetail-category-name">December 28, 2022</span>
                <span className="BlogDetail-category-count">(06)</span>
              </li>
            </ul>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default BlogDetail;