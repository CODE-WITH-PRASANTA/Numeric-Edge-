import React, { useState } from 'react';
import './LiveMarkets.css';
import { 
  FiSearch, 
  FiStar, 
  FiMoreVertical, 
  FiTrendingUp, 
  FiTrendingDown, 
  FiActivity, 
  FiGlobe, 
  FiArrowUp, 
  FiArrowDown,
  FiChevronRight
} from 'react-icons/fi';
import { BiLineChart } from 'react-icons/bi';
import { RiShieldCheckLine, RiBuildingLine } from 'react-icons/ri';

const LiveMarkets = () => {
  const [activeTab, setActiveTab] = useState('NSE');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState('RELIANCE');
  const [chartTimeframe, setChartTimeframe] = useState('1D');

  // Market Indices Data
  const indices = [
    { name: 'NIFTY 50', value: '24,823.50', change: '+256.30 (+1.04%)', isPositive: true },
    { name: 'BANK NIFTY', value: '50,234.10', change: '+412.75 (+0.83%)', isPositive: true },
    { name: 'SENSEX', value: '81,450.22', change: '+702.18 (+0.87%)', isPositive: true },
    { name: 'FINNIFTY', value: '22,416.30', change: '+198.45 (+0.89%)', isPositive: true },
    { name: 'INDIA VIX', value: '12.34', change: '-0.82 (-6.23%)', isPositive: false },
  ];

  // Market Watch Stocks Data
  const stocksData = [
    { symbol: 'RELIANCE', ltp: '2,856.75', change: '+32.40', changePct: '+1.15%', high: '2,872.00', low: '2,810.20', volume: '12.4M', positive: true },
    { symbol: 'TCS', ltp: '3,981.20', change: '+45.60', changePct: '+1.16%', high: '4,002.50', low: '3,920.10', volume: '8.2M', positive: true },
    { symbol: 'HDFCBANK', ltp: '1,642.30', change: '+18.75', changePct: '+1.16%', high: '1,650.00', low: '1,620.10', volume: '15.6M', positive: true },
    { symbol: 'INFY', ltp: '1,486.90', change: '+12.30', changePct: '+0.84%', high: '1,492.40', low: '1,470.00', volume: '10.1M', positive: true },
    { symbol: 'ICICIBANK', ltp: '1,248.55', change: '+14.20', changePct: '+1.15%', high: '1,255.40', low: '1,230.10', volume: '18.9M', positive: true },
    { symbol: 'HINDUNILVR', ltp: '2,674.10', change: '-8.45', changePct: '-0.32%', high: '2,690.00', low: '2,660.20', volume: '5.3M', positive: false },
    { symbol: 'ITC', ltp: '472.35', change: '+3.20', changePct: '+0.68%', high: '474.80', low: '468.10', volume: '22.4M', positive: true },
    { symbol: 'SBIN', ltp: '812.60', change: '+9.15', changePct: '+1.14%', high: '816.00', low: '800.10', volume: '28.7M', positive: true },
    { symbol: 'BAJFINANCE', ltp: '7,124.80', change: '+86.30', changePct: '+1.23%', high: '7,180.00', low: '6,980.50', volume: '4.1M', positive: true },
    { symbol: 'LT', ltp: '3,621.15', change: '+40.75', changePct: '+1.14%', high: '3,640.00', low: '3,580.10', volume: '6.8M', positive: true },
  ];

  // Filter stocks based on search query
  const filteredStocks = stocksData.filter(stock => 
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Bottom cards data
  const topGainers = [
    { name: 'TATAMOTORS', change: '+4.25%' },
    { name: 'ADANIPORTS', change: '+3.92%' },
    { name: 'M&M', change: '+3.56%' },
  ];

  const topLosers = [
    { name: 'BHARTIARTL', change: '-2.14%' },
    { name: 'ULTRACEMCO', change: '-1.86%' },
    { name: 'NESTLEIND', change: '-1.42%' },
  ];

  const mostActive = [
    { name: 'RELIANCE', volume: '12.4M' },
    { name: 'SBIN', volume: '28.7M' },
    { name: 'ITC', volume: '22.4M' },
  ];

  const globalMarkets = [
    { name: 'Dow Jones', value: '38,686.32', change: '+0.62%' },
    { name: 'NASDAQ', value: '15,832.14', change: '+0.78%' },
    { name: 'S&P 500', value: '5,487.21', change: '+0.71%' },
  ];

  const marketNews = [
    { time: '5m', text: 'Nifty climbs 1% led by banking and IT stocks' },
    { time: '15m', text: 'RBI keeps repo rate unchanged at 6.50%' },
    { time: '32m', text: 'Reliance shares gain after strong quarterly results' },
    { time: '1h', text: 'Global markets trade higher amid positive economic data' },
    { time: '2h', text: 'FII inflows continue for third straight session' },
  ];

  return (
    <div className="LiveMarkets">
      
      {/* Top Indices Bar */}
      <div className="LiveMarkets-indices-container">
        {indices.map((item, idx) => (
          <div className="LiveMarkets-index-card" key={idx}>
            <div className="LiveMarkets-index-header">
              <span className="LiveMarkets-index-name">{item.name}</span>
              <span className={`LiveMarkets-index-icon ${item.isPositive ? 'positive' : 'negative'}`}>
                {item.isPositive ? <FiTrendingUp /> : <FiTrendingDown />}
              </span>
            </div>
            <div className="LiveMarkets-index-value">{item.value}</div>
            <div className={`LiveMarkets-index-change ${item.isPositive ? 'positive' : 'negative'}`}>
              {item.isPositive ? <FiArrowUp /> : <FiArrowDown />}
              {item.change}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="LiveMarkets-main-grid">
        
        {/* Left Section: Market Watch Table */}
        <div className="LiveMarkets-watch-section">
          <div className="LiveMarkets-watch-header">
            <h2>Market Watch</h2>
            <div className="LiveMarkets-watch-controls">
              <div className="LiveMarkets-search-box">
                <FiSearch className="LiveMarkets-search-icon" />
                <input 
                  type="text" 
                  placeholder="Search symbol..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="LiveMarkets-watchlist-btn">
                <FiStar /> Watchlist
              </button>
              <button className="LiveMarkets-more-btn">
                <FiMoreVertical />
              </button>
            </div>
          </div>

          {/* Exchange Tabs */}
          <div className="LiveMarkets-tabs">
            {['NSE', 'BSE', 'Forex', 'Commodities', 'Crypto'].map((tab) => (
              <button 
                key={tab} 
                className={`LiveMarkets-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="LiveMarkets-table-responsive">
            <table className="LiveMarkets-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>LTP (₹)</th>
                  <th>Change</th>
                  <th>Change %</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Volume</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStocks.length > 0 ? (
                  filteredStocks.map((stock, index) => (
                    <tr key={index} onClick={() => setSelectedStock(stock.symbol)} className={selectedStock === stock.symbol ? 'selected-row' : ''}>
                      <td className="LiveMarkets-symbol-cell"><strong>{stock.symbol}</strong></td>
                      <td>{stock.ltp}</td>
                      <td className={stock.positive ? 'positive' : 'negative'}>{stock.change}</td>
                      <td className={stock.positive ? 'positive' : 'negative'}>{stock.changePct}</td>
                      <td>{stock.high}</td>
                      <td>{stock.low}</td>
                      <td>{stock.volume}</td>
                      <td className="LiveMarkets-action-cell" onClick={(e) => e.stopPropagation()}>
                        <button className="LiveMarkets-buy-btn" onClick={() => alert(`Buy order placed for ${stock.symbol}`)}>Buy</button>
                        <button className="LiveMarkets-sell-btn" onClick={() => alert(`Sell order placed for ${stock.symbol}`)}>Sell</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: 'center', padding: '20px' }}>No stocks found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section: Chart & News */}
        <div className="LiveMarkets-sidebar-section">
          
          {/* Chart Card */}
          <div className="LiveMarkets-card LiveMarkets-chart-card">
            <div className="LiveMarkets-card-header">
              <h3>{selectedStock} Chart</h3>
              <div className="LiveMarkets-timeframe-btns">
                {['1D', '1W', '1M', '3M', '1Y'].map((tf) => (
                  <button 
                    key={tf} 
                    className={chartTimeframe === tf ? 'active' : ''}
                    onClick={() => setChartTimeframe(tf)}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
            <div className="LiveMarkets-chart-price-info">
              <span className="LiveMarkets-chart-val">24,823.50</span>
              <span className="LiveMarkets-chart-chg positive">+256.30 (+1.04%)</span>
            </div>
            <div className="LiveMarkets-chart-mock">
              <div className="LiveMarkets-chart-line"></div>
            </div>
            <div className="LiveMarkets-chart-axis">
              <span>09:15</span>
              <span>10:30</span>
              <span>11:45</span>
              <span>13:00</span>
              <span>14:15</span>
              <span>15:30</span>
            </div>
          </div>

          {/* Market News Card */}
          <div className="LiveMarkets-card LiveMarkets-news-card">
            <div className="LiveMarkets-card-header">
              <h3>Market News</h3>
              <span className="LiveMarkets-view-all">View All</span>
            </div>
            <div className="LiveMarkets-news-list">
              {marketNews.map((news, idx) => (
                <div className="LiveMarkets-news-item" key={idx}>
                  <span className="LiveMarkets-news-badge">{news.time}</span>
                  <p>{news.text}</p>
                  <FiChevronRight className="LiveMarkets-news-arrow" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Grid Section */}
      <div className="LiveMarkets-bottom-grid">
        
        {/* Top Gainers */}
        <div className="LiveMarkets-card LiveMarkets-bottom-card">
          <div className="LiveMarkets-bottom-header green-header">
            <div className="LiveMarkets-title-flex">
              <FiArrowUp className="positive" />
              <h4>Top Gainers</h4>
            </div>
            <span className="LiveMarkets-view-all">View All</span>
          </div>
          <div className="LiveMarkets-bottom-items">
            {topGainers.map((item, idx) => (
              <div className="LiveMarkets-bottom-row" key={idx}>
                <span>{item.name}</span>
                <span className="positive">{item.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Losers */}
        <div className="LiveMarkets-card LiveMarkets-bottom-card">
          <div className="LiveMarkets-bottom-header red-header">
            <div className="LiveMarkets-title-flex">
              <FiArrowDown className="negative" />
              <h4>Top Losers</h4>
            </div>
            <span className="LiveMarkets-view-all">View All</span>
          </div>
          <div className="LiveMarkets-bottom-items">
            {topLosers.map((item, idx) => (
              <div className="LiveMarkets-bottom-row" key={idx}>
                <span>{item.name}</span>
                <span className="negative">{item.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Most Active */}
        <div className="LiveMarkets-card LiveMarkets-bottom-card">
          <div className="LiveMarkets-bottom-header blue-header">
            <div className="LiveMarkets-title-flex">
              <FiActivity className="active-blue" />
              <h4>Most Active</h4>
            </div>
            <span className="LiveMarkets-view-all">View All</span>
          </div>
          <div className="LiveMarkets-bottom-items">
            {mostActive.map((item, idx) => (
              <div className="LiveMarkets-bottom-row" key={idx}>
                <span>{item.name}</span>
                <span>{item.volume}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Markets */}
        <div className="LiveMarkets-card LiveMarkets-bottom-card">
          <div className="LiveMarkets-bottom-header green-header">
            <div className="LiveMarkets-title-flex">
              <FiGlobe className="positive" />
              <h4>Global Markets</h4>
            </div>
            <span className="LiveMarkets-view-all">View All</span>
          </div>
          <div className="LiveMarkets-bottom-items">
            {globalMarkets.map((item, idx) => (
              <div className="LiveMarkets-bottom-row global-row" key={idx}>
                <span>{item.name}</span>
                <div className="LiveMarkets-global-vals">
                  <span className="global-val">{item.value}</span>
                  <span className="positive">{item.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default LiveMarkets;