import React from 'react';
import './Exprerience.css';

// 1. Apne local assets folder me images save karke import karein
import ExperienceImg from '../../assets/history-1.png';
import FastReliableImg from '../../assets/history-2.png';

const cardsData = [
  {
    id: 1,
    title: '25 Years Experience',
    description: 'Traders with 25 years of experience often develop refined trading',
    buttonText: 'Learn More',
    image: ExperienceImg,
    alt: '25 Years Experience Trading Mobile Mockup',
  },
  {
    id: 2,
    title: 'Fast & Reliable',
    description: 'Reliability is another crucial aspect of trading. Modern trading platforms',
    buttonText: 'Learn More',
    image: FastReliableImg,
    alt: 'Fast and Reliable Laptop Trading Platform',
  },
];

const Exprerience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        {cardsData.map((card) => (
          <div key={card.id} className="experience-card">
            {/* Left Content Column */}
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
              <button className="learn-more-btn">{card.buttonText}</button>
            </div>

            {/* Right Graphic/Image Column */}
            <div className="card-image-wrapper">
              <img src={card.image} alt={card.alt} className="card-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exprerience;