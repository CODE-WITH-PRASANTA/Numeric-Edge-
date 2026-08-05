import React, { useState, useEffect, useRef } from 'react';
import './Counting.css';

const statsData = [
  { target: 10, suffix: 'K', label: 'Client World Wide' },
  { target: 99, suffix: '%', label: 'Satisfied Clients' },
  { target: 150, suffix: 'M+', label: 'Money Invested' },
  { target: 800, suffix: '+', label: 'Expert Traders' },
];

// Reusable Counter Component with smooth fast animation
const AnimatedCounter = ({ target, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth deceleration at the end
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * target);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return <span>{count}</span>;
};

const Counting = () => {
  return (
    <div className="counting-container">
      <div className="counting-grid">
        {statsData.map((item, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card-inner">
              <h2 className="stat-number">
                <AnimatedCounter target={item.target} />
                {item.suffix}
              </h2>
              <p className="stat-label">{item.label}</p>
            </div>
            {/* Dotted accent line matching the reference layout */}
            <div className="dotted-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counting;