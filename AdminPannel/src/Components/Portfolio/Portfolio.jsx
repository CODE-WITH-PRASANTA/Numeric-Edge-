import React, { useState } from 'react';
import './Portfolio.css';
import { 
  FiSearch, 
  FiPieChart, 
  FiTrendingUp, 
  FiTrendingDown, 
  FiArrowUp, 
  FiArrowDown, 
  FiRefreshCw, 
  FiDownload,
  FiFilter,
  FiMoreVertical
} from 'react-icons/fi';
import { BiWallet, BiShieldQuarter } from 'react-icons/bi';

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [assetFilter, setAssetFilter] = useState('All');

  // Portfolio Summary Metrics
  const portfolioSummary = {
    totalValue: '₹ 45,82,450.60',
    investedAmount: '₹ 38,50,000.00',
    totalReturns: '+ ₹ 7,32,450.60 (+19.02%)',
    dayReturn: '+ ₹ 45,620.10 (+1.01%)'
  };

  // Holdings Data
  const holdingsData = [
    { symbol: 'RELIANCE', category: 'Equities', qty: 250, avgPrice: '2,650.00', ltp: '2,856.75', currentVal: '7,14,187.50', pnl: '+51,687.50', pnlPct: '+7.80%', positive: true },
    { symbol: 'TCS', category: 'Equities', qty: 150, avgPrice: '3,720.00', ltp: '3,981.20', currentVal: '5,97,180.00', pnl: '+39,180.00', pnlPct: '+7.02%', positive: true },
    { symbol: 'HDFCBANK', category: 'Equities', qty: 400, avgPrice: '1,580.00', ltp: '1,642.30', currentVal: '6,56,920.00', pnl: '+24,920.00', pnlPct: '+3.94%', positive: true },
    { symbol: 'INFY', category: 'Equities', qty: 300, avgPrice: '1,420.00', ltp: '1,486.90', currentVal: '4,46,070.00', pnl: '+20,070.00', pnlPct: '+4.71%', positive: true },
    { symbol: 'ICICIBANK', category: 'Equities', qty: 350, avgPrice: '1,190.00', ltp: '1,248.55', currentVal: '4,36,992.50', pnl: '+20,492.50', pnlPct: '+4.92%', positive: true },
    { symbol: 'GOVT 7.26% GS 2033', category: 'Bonds', qty: 1000, avgPrice: '98.50', ltp: '101.20', currentVal: '1,01,200.00', pnl: '+2,700.00', pnlPct: '+2.74%', positive: true },
    { symbol: 'GOLD BEES', category: 'Commodities', qty: 1500, avgPrice: '52.40', ltp: '58.60', currentVal: '87,900.00', pnl: '+9,300.00', pnlPct: '+11.83%', positive: true },
    { symbol: 'SBIN', category: 'Equities', qty: 500, avgPrice: '780.00', ltp: '812.60', currentVal: '4,06,300.00', pnl: '+16,300.00', pnlPct: '+4.18%', positive: true },
  ];

  // Allocation Breakdown
  const allocations = [
    { name: 'Equities', percentage: '68.5%', value: '₹ 31,38,950.00', color: '#10b981' },
    { name: 'Bonds & Debt', percentage: '18.2%', value: '₹ 8,34,000.00', color: '#3b82f6' },
    { name: 'Commodities', percentage: '8.3%', value: '₹ 3,80,340.60', color: '#f59e0b' },
    { name: 'Liquid Cash', percentage: '5.0%', value: '₹ 2,29,160.00', color: '#8b5cf6' },
  ];

  // Filter Holdings based on search and category
  const filteredHoldings = holdingsData.filter(item => {
    const matchesSearch = item.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = assetFilter === 'All' || item.category === assetFilter;
    return matchesSearch && matchesCategory;
  });

  const handleActionClick = (actionName, symbol) => {
    alert(`${actionName} order flow initialized for ${symbol}`);
  };

  return (
    <div className="Portfolio">
      
      {/* Top Header & Actions */}
      <div className="Portfolio-header-area">
        <div className="Portfolio-title-group">
          <h2>Portfolio Management</h2>
          <p>Numeric Edge Asset Distribution & Performance Overview</p>
        </div>
        <div className="Portfolio-action-buttons">
          <button className="Portfolio-btn-outline" onClick={() => alert('Portfolio synchronized with exchange feeds.')}>
            <FiRefreshCw /> Sync Data
          </button>
          <button className="Portfolio-btn-primary" onClick={() => alert('Exporting portfolio statement report...')}>
            <FiDownload /> Export Report
          </button>
        </div>
      </div>

      {/* Summary Metrics Row */}
      <div className="Portfolio-metrics-grid">
        <div className="Portfolio-metric-card">
          <span className="metric-title">Total Portfolio Value</span>
          <span className="metric-value">{portfolioSummary.totalValue}</span>
          <span className="metric-sub positive"><FiArrowUp /> {portfolioSummary.dayReturn} today</span>
        </div>
        <div className="Portfolio-metric-card">
          <span className="metric-title">Total Invested Amount</span>
          <span className="metric-value">{portfolioSummary.investedAmount}</span>
          <span className="metric-sub neutral">Initial Capital Deployed</span>
        </div>
        <div className="Portfolio-metric-card">
          <span className="metric-title">Overall Returns (P&L)</span>
          <span className="metric-value positive">{portfolioSummary.totalReturns}</span>
          <span className="metric-sub positive">Lifetime Capital Gains</span>
        </div>
        <div className="Portfolio-metric-card">
          <span className="metric-title">Active Assets Count</span>
          <span className="metric-value">28 Holdings</span>
          <span className="metric-sub neutral">Across 4 asset classes</span>
        </div>
      </div>

      {/* Mid Section: Asset Allocation Cards */}
      <div className="Portfolio-mid-section">
        
        {/* Asset Distribution Breakdown */}
        <div className="Portfolio-card Portfolio-allocation-card">
          <div className="Portfolio-card-header">
            <h3>Asset Allocation</h3>
            <FiPieChart className="card-header-icon" />
          </div>
          <div className="allocation-items-list">
            {allocations.map((alloc, idx) => (
              <div className="allocation-row" key={idx}>
                <div className="alloc-info">
                  <span className="alloc-bullet" style={{ backgroundColor: alloc.color }}></span>
                  <span className="alloc-name">{alloc.name}</span>
                </div>
                <div className="alloc-numbers">
                  <span className="alloc-val">{alloc.value}</span>
                  <span className="alloc-pct">{alloc.percentage}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="allocation-progress-bar">
            {allocations.map((alloc, idx) => (
              <div 
                key={idx} 
                className="progress-segment" 
                style={{ width: alloc.percentage, backgroundColor: alloc.color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Portfolio Risk & Margin Status */}
        <div className="Portfolio-card Portfolio-risk-card">
          <div className="Portfolio-card-header">
            <h3>Portfolio Risk & Margin Health</h3>
            <BiShieldQuarter className="card-header-icon positive" />
          </div>
          <div className="risk-metrics-container">
            <div className="risk-row">
              <span>Sharpe Ratio</span>
              <strong>2.14 (Low Risk Profile)</strong>
            </div>
            <div className="risk-row">
              <span>Beta vs NIFTY 50</span>
              <strong>0.92</strong>
            </div>
            <div className="risk-row">
              <span>Collateral Margin Used</span>
              <strong>₹ 14,50,000.00</strong>
            </div>
            <div className="risk-row">
              <span>Available Margin Buffer</span>
              <strong>₹ 5,50,000.00</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Holdings Table Section */}
      <div className="Portfolio-card Portfolio-holdings-container">
        
        <div className="Portfolio-table-header-flex">
          <h3>Current Holdings</h3>
          
          <div className="Portfolio-controls-group">
            {/* Category Filter Pills */}
            <div className="Portfolio-filter-tabs">
              {['All', 'Equities', 'Bonds', 'Commodities'].map((cat) => (
                <button 
                  key={cat} 
                  className={assetFilter === cat ? 'active' : ''}
                  onClick={() => setAssetFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="Portfolio-search-box">
              <FiSearch />
              <input 
                type="text" 
                placeholder="Search symbol..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="Portfolio-table-responsive">
          <table className="Portfolio-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Category</th>
                <th>Qty</th>
                <th>Avg. Price (₹)</th>
                <th>LTP (₹)</th>
                <th>Current Value (₹)</th>
                <th>P&L</th>
                <th>P&L %</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredHoldings.length > 0 ? (
                filteredHoldings.map((stock, idx) => (
                  <tr key={idx}>
                    <td className="symbol-cell"><strong>{stock.symbol}</strong></td>
                    <td><span className="category-tag">{stock.category}</span></td>
                    <td>{stock.qty}</td>
                    <td>{stock.avgPrice}</td>
                    <td>{stock.ltp}</td>
                    <td>{stock.currentVal}</td>
                    <td className={stock.positive ? 'positive' : 'negative'}>{stock.pnl}</td>
                    <td className={stock.positive ? 'positive' : 'negative'}>{stock.pnlPct}</td>
                    <td className="action-cell">
                      <button className="buy-action-btn" onClick={() => handleActionClick('Buy', stock.symbol)}>Buy</button>
                      <button className="sell-action-btn" onClick={() => handleActionClick('Sell', stock.symbol)}>Sell</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" style={{ textAlign: 'center', padding: '24px', color: '#9ca3af' }}>
                    No matching holdings found for your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default Portfolio;