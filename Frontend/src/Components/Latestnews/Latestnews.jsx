import React from 'react';
import './Latestnews.css';

// Local assets folder se images import karein
import NewsImg1 from '../../assets/news-1.jpg';
import NewsImg2 from '../../assets/news-2.jpg';
import NewsImg3 from '../../assets/news-3.jpg';

import Author1 from '../../assets/testimonial-1.png';
import Author2 from '../../assets/testimonial-2.png';
import Author3 from '../../assets/testimonial-3.png';

const newsData = [
  {
    id: 1,
    tag: 'JPY',
    title: "A Traders' Weekly Playbook: The JPY at work",
    description:
      "We closed out what was a strong week for equity indices, and for the first time in three week's we went into the weekend not overly concerned",
    authorName: 'Robert Henry',
    authorImg: Author1,
    newsImg: NewsImg1,
  },
  {
    id: 2,
    tag: 'PDC',
    title: "China's Geo-Jade wins bid to develop Iraq's Jabal oil",
    description:
      "We closed out what was a strong week for equity indices, and for the first time in three week's we went into the weekend not overly concerned",
    authorName: 'Haris Gulf',
    authorImg: Author2,
    newsImg: NewsImg2,
  },
  {
    id: 3,
    tag: 'UJD',
    title: 'Niger PM says oil export blockade violates accords',
    description:
      "We closed out what was a strong week for equity indices, and for the first time in three week's we went into the weekend not overly concerned",
    authorName: 'Jhon Rock',
    authorImg: Author3,
    newsImg: NewsImg3,
  },
];

const Latestnews = () => {
  return (
    <section className="latest-news-section">
      <div className="latest-news-container">
        {/* Header Badge & Title */}
        <div className="news-header">
          <span className="media-badge">MEDIA CENTER</span>
          <h1 className="news-main-title">Latest News Update</h1>
        </div>

        {/* News Cards Grid */}
        <div className="news-grid">
          {newsData.map((item) => (
            <article key={item.id} className="news-card">
              {/* Image Container with Blur to Clear Effect */}
              <div className="news-image-wrapper">
                <img src={item.newsImg} alt={item.title} className="news-image" />
              </div>

              {/* Card Body Details */}
              <div className="news-card-body">
                <span className="news-tag">{item.tag}</span>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>

                {/* Author Footer */}
                <div className="news-author">
                  <img src={item.authorImg} alt={item.authorName} className="author-img" />
                  <span className="author-name">{item.authorName}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latestnews;