import React from 'react';
import './Newsline.css'; // Don't forget to create this CSS file

// Mock data based on your reference image
const tradeData = [
  { pair: 'USDJPY', values: '3125.71 / 3117.68', trend: 'up' },
  { pair: 'GBPJPY', values: '3125.71 / 3117.68', trend: 'up' },
  { pair: 'GBPUSD', values: '3125.71 / 3117.68', trend: 'up' },
  { pair: '#US30', values: '3125.71 / 3117.68', trend: 'up' },
  { pair: 'Gold', values: '3125.71 / 3117.68', trend: 'down' },
  { pair: 'BTCUSD', values: '3125.71 / 3117.68', trend: 'up' },
  { pair: 'USDJPY', values: '3125.71 / 3117.68', trend: 'down' },
  // Add more items here if you want a longer, less-repetitive scroll
];

// Re-using the data to create a seamless looping effect
const loopedData = [...tradeData, ...tradeData, ...tradeData]; 

const TrendArrow = ({ trend }) => {
  if (trend === 'up') {
    return (
      <svg className="trend-icon trend-up" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V20M12 4L5 11M12 4L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg className="trend-icon trend-down" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20V4M12 20L5 13M12 20L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const Newsline = () => {
  return (
    <div className="newsline-ticker-container">
      {/* Set a light grey topo-map background if needed on the body */}
      <div className="newsline-wrapper">
        <div className="newsline-track">
          {loopedData.map((item, index) => (
            <div className="trade-card" key={index}>
              <div className="trade-details">
                <p className="trade-pair">{item.pair}</p>
                <p className="trade-values">{item.values}</p>
              </div>
              <TrendArrow trend={item.trend} />
              <button className="trade-button">Trade</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsline;