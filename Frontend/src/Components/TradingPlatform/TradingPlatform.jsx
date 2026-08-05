import React, { useState } from 'react';
import './TradingPlatform.css';

const platformData = [
  {
    id: 'fxt',
    title: 'FXT Application',
    heading: 'FXT App',
    description: "Navigate the financial waves with FXT's premier trading app, designed to put the power of the markets in your palm."
  },
  {
    id: 'mt4',
    title: 'Meta Trader 4',
    heading: 'Meta Trader 4',
    description: "Experience seamless trading execution with Meta Trader 4, providing advanced charting and real-time market insights."
  },
  {
    id: 'fbs',
    title: 'FBS Personal Area',
    heading: 'FBS Personal Area',
    description: "Manage your accounts, deposits, and financial operations securely with the customized FBS Personal Area dashboard."
  },
  {
    id: 'mt5',
    title: 'Meta Trader 5',
    heading: 'Meta Trader 5',
    description: "Unlock powerful multi-asset trading with Meta Trader 5, offering comprehensive technical tools and automated trading systems."
  }
];

const TradingPlatform = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="platforms-section">
      {/* Top Header Badge & Title */}
      <div className="header-badge">PLATFORMS</div>
      <h2 className="main-title">Trading Platforms</h2>

      {/* Main Container */}
      <div className="platform-card-container">
        
        {/* Left Dark Sidebar Navigation */}
        <div className="sidebar-menu">
          {platformData.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                className={`menu-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="btn-text">{item.title}</span>
                {isActive && (
                  <div className="arrow-circle">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#181818"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Light Content Panel */}
        <div className="content-panel">
          <div key={activeTab} className="content-inner fade-in-smooth">
            <h3 className="content-heading">{platformData[activeTab].heading}</h3>
            <p className="content-desc">{platformData[activeTab].description}</p>

            {/* Embedded Chart Graphic */}
            <div className="chart-wrapper">
              <div className="chart-header">
                <div className="chart-title-group">
                  <span className="chart-title">Market Update</span>
                  <div className="chart-legend">
                    <span className="legend-item"><span className="dot green"></span> Something</span>
                    <span className="legend-item"><span className="dot red"></span> Romania</span>
                  </div>
                </div>
                <button className="export-btn">Export</button>
              </div>

              {/* Candlestick Chart SVG Representation */}
              <div className="chart-svg-container">
                <svg viewBox="0 0 700 200" className="candlestick-svg">
                  {/* Grid Lines */}
                  <line x1="40" y1="30" x2="680" y2="30" stroke="#f0f0f0" strokeDasharray="3 3" />
                  <line x1="40" y1="70" x2="680" y2="70" stroke="#f0f0f0" strokeDasharray="3 3" />
                  <line x1="40" y1="110" x2="680" y2="110" stroke="#f0f0f0" strokeDasharray="3 3" />
                  <line x1="40" y1="150" x2="680" y2="150" stroke="#f0f0f0" strokeDasharray="3 3" />

                  {/* Y Axis Labels */}
                  <text x="25" y="35" className="chart-axis-text">5k</text>
                  <text x="25" y="75" className="chart-axis-text">4k</text>
                  <text x="25" y="115" className="chart-axis-text">3k</text>
                  <text x="25" y="155" className="chart-axis-text">2k</text>
                  <text x="25" y="190" className="chart-axis-text">1k</text>

                  {/* Candlestick Bars */}
                  {/* Group 1 */}
                  <line x1="60" y1="140" x2="60" y2="180" stroke="#22c55e" strokeWidth="2" />
                  <rect x="56" y="150" width="8" height="20" fill="#22c55e" rx="1" />

                  <line x1="80" y1="120" x2="80" y2="160" stroke="#ef4444" strokeWidth="2" />
                  <rect x="76" y="130" width="8" height="25" fill="#ef4444" rx="1" />

                  <line x1="100" y1="110" x2="100" y2="150" stroke="#22c55e" strokeWidth="2" />
                  <rect x="96" y="115" width="8" height="20" fill="#22c55e" rx="1" />

                  <line x1="120" y1="140" x2="120" y2="185" stroke="#ef4444" strokeWidth="2" />
                  <rect x="116" y="150" width="8" height="30" fill="#ef4444" rx="1" />

                  {/* Group 2 */}
                  <line x1="150" y1="150" x2="150" y2="190" stroke="#ef4444" strokeWidth="2" />
                  <rect x="146" y="160" width="8" height="25" fill="#ef4444" rx="1" />

                  <line x1="180" y1="130" x2="180" y2="170" stroke="#22c55e" strokeWidth="2" />
                  <rect x="176" y="135" width="8" height="25" fill="#22c55e" rx="1" />

                  <line x1="210" y1="110" x2="210" y2="150" stroke="#ef4444" strokeWidth="2" />
                  <rect x="206" y="120" width="8" height="20" fill="#ef4444" rx="1" />

                  {/* Group 3 */}
                  <line x1="240" y1="100" x2="240" y2="140" stroke="#22c55e" strokeWidth="2" />
                  <rect x="236" y="105" width="8" height="25" fill="#22c55e" rx="1" />

                  <line x1="260" y1="80" x2="260" y2="130" stroke="#22c55e" strokeWidth="2" />
                  <rect x="256" y="90" width="8" height="30" fill="#22c55e" rx="1" />

                  <line x1="280" y1="60" x2="280" y2="120" stroke="#ef4444" strokeWidth="2" />
                  <rect x="276" y="70" width="8" height="35" fill="#ef4444" rx="1" />

                  <line x1="300" y1="75" x2="300" y2="135" stroke="#22c55e" strokeWidth="2" />
                  <rect x="296" y="80" width="8" height="40" fill="#22c55e" rx="1" />

                  {/* Group 4 */}
                  <line x1="330" y1="130" x2="330" y2="180" stroke="#eab308" strokeWidth="2" />
                  <rect x="326" y="140" width="8" height="30" fill="#eab308" rx="1" />

                  <line x1="360" y1="100" x2="360" y2="160" stroke="#22c55e" strokeWidth="2" />
                  <rect x="356" y="110" width="8" height="35" fill="#22c55e" rx="1" />

                  <line x1="390" y1="90" x2="390" y2="140" stroke="#ef4444" strokeWidth="2" />
                  <rect x="386" y="95" width="8" height="30" fill="#ef4444" rx="1" />

                  {/* Group 5 */}
                  <line x1="430" y1="60" x2="430" y2="110" stroke="#22c55e" strokeWidth="2" />
                  <rect x="426" y="65" width="8" height="30" fill="#22c55e" rx="1" />

                  <line x1="450" y1="50" x2="450" y2="100" stroke="#ef4444" strokeWidth="2" />
                  <rect x="446" y="55" width="8" height="35" fill="#ef4444" rx="1" />

                  <line x1="470" y1="40" x2="470" y2="90" stroke="#22c55e" strokeWidth="2" />
                  <rect x="466" y="45" width="8" height="25" fill="#22c55e" rx="1" />

                  <line x1="500" y1="80" x2="500" y2="120" stroke="#ef4444" strokeWidth="2" />
                  <rect x="496" y="85" width="8" height="25" fill="#ef4444" rx="1" />

                  {/* Group 6 */}
                  <line x1="540" y1="100" x2="540" y2="150" stroke="#22c55e" strokeWidth="2" />
                  <rect x="536" y="110" width="8" height="30" fill="#22c55e" rx="1" />

                  <line x1="570" y1="80" x2="570" y2="130" stroke="#ef4444" strokeWidth="2" />
                  <rect x="566" y="90" width="8" height="25" fill="#ef4444" rx="1" />

                  <line x1="600" y1="60" x2="600" y2="110" stroke="#22c55e" strokeWidth="2" />
                  <rect x="596" y="70" width="8" height="25" fill="#22c55e" rx="1" />

                  <line x1="620" y1="50" x2="620" y2="90" stroke="#ef4444" strokeWidth="2" />
                  <rect x="616" y="55" width="8" height="20" fill="#ef4444" rx="1" />

                  {/* X Axis Labels */}
                  <text x="60" y="200" className="chart-axis-text">1k</text>
                  <text x="110" y="200" className="chart-axis-text">2k</text>
                  <text x="160" y="200" className="chart-axis-text">3k</text>
                  <text x="210" y="200" className="chart-axis-text">4k</text>
                  <text x="260" y="200" className="chart-axis-text">5k</text>
                  <text x="310" y="200" className="chart-axis-text">6k</text>
                  <text x="360" y="200" className="chart-axis-text">7k</text>
                  <text x="410" y="200" className="chart-axis-text">8k</text>
                  <text x="460" y="200" className="chart-axis-text">9k</text>
                  <text x="510" y="200" className="chart-axis-text">10k</text>
                  <text x="560" y="200" className="chart-axis-text">11k</text>
                  <text x="610" y="200" className="chart-axis-text">12k</text>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TradingPlatform;