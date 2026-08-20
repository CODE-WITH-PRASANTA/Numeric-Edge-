import React, { useState } from 'react';
import './TradeTerminal.css';
import { 
  FiSearch, 
  FiStar, 
  FiMoreVertical, 
  FiTrendingUp, 
  FiTrendingDown, 
  FiArrowUp, 
  FiArrowDown,
  FiChevronRight,
  FiPlus,
  FiMinus,
  FiSettings,
  FiMaximize2,
  FiBarChart2,
  FiSliders
} from 'react-icons/fi';
import { 
  BiCrosshair, 
  BiLineChart, 
  BiTrendingUp, 
  BiPencil, 
  BiRectangle, 
  BiShapePolygon 
} from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

const TradeTerminal = () => {
  // State variables for interactivity
  const [activeMarketType, setActiveMarketType] = useState('Cash Market');
  const [orderType, setOrderType] = useState('Buy');
  const [productType, setProductType] = useState('Limit');
  const [deliveryType, setDeliveryType] = useState('Intraday');
  const [quantity, setQuantity] = useState(10);
  const [selectedSymbol, setSelectedSymbol] = useState('RELIANCE');
  const [timeframe, setTimeframe] = useState('15m');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Tabs for bottom tables
  const [positionsTab, setPositionsTab] = useState('Open Positions');

  // Watchlist & Search Data
  const watchlistStocks = [
    { symbol: 'RELIANCE', ltp: '2,856.75', change: '+32.40', changePct: '+1.15%', positive: true },
    { symbol: 'TCS', ltp: '3,981.20', change: '+45.60', changePct: '+1.16%', positive: true },
    { symbol: 'HDFCBANK', ltp: '1,642.30', change: '+18.75', changePct: '+1.16%', positive: true },
    { symbol: 'INFY', ltp: '1,486.90', change: '+12.30', changePct: '+0.84%', positive: true },
    { symbol: 'ICICIBANK', ltp: '1,248.55', change: '+14.20', changePct: '+1.15%', positive: true },
    { symbol: 'SBIN', ltp: '812.60', change: '+9.15', changePct: '+1.14%', positive: true },
    { symbol: 'LT', ltp: '3,621.15', change: '+40.75', changePct: '+1.14%', positive: true },
    { symbol: 'ITC', ltp: '472.35', change: '+3.20', changePct: '+0.68%', positive: true },
  ];

  const filteredWatchlist = watchlistStocks.filter(item => 
    item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Positions Data
  const positionsData = [
    { symbol: 'RELIANCE', product: 'INTRADAY', qty: 10, avgPrice: '2,845.50', ltp: '2,856.75', pnl: '+112.50', pnlPct: '+0.40%', positive: true },
    { symbol: 'TCS', product: 'DELIVERY', qty: 5, avgPrice: '3,950.00', ltp: '3,981.20', pnl: '+156.00', pnlPct: '+0.79%', positive: true },
    { symbol: 'HDFCBANK', product: 'INTRADAY', qty: 15, avgPrice: '1,635.00', ltp: '1,642.30', pnl: '+109.50', pnlPct: '+0.45%', positive: true },
  ];

  // Recent Trades Data
  const recentTrades = [
    { price: '2,856.75', qty: 10, time: '15:30:45', positive: true },
    { price: '2,857.20', qty: 25, time: '15:30:42', positive: true },
    { price: '2,856.80', qty: 15, time: '15:30:40', positive: true },
    { price: '2,856.75', qty: 50, time: '15:30:38', positive: true },
    { price: '2,856.60', qty: 10, time: '15:30:35', positive: true },
    { price: '2,856.65', qty: 30, time: '15:30:30', positive: true },
    { price: '2,856.70', qty: 5, time: '15:30:33', positive: true },
  ];

  // Order Status Data
  const orderStatusData = [
    { time: '15:30:45', symbol: 'RELIANCE', type: 'BUY', qty: 10, price: '2,856.75', status: 'Executed' },
    { time: '15:30:12', symbol: 'TCS', type: 'SELL', qty: 5, price: '3,980.00', status: 'Pending' },
    { time: '15:29:58', symbol: 'INFY', type: 'BUY', qty: 10, price: '1,487.00', status: 'Executed' },
    { time: '15:29:30', symbol: 'ICICIBANK', type: 'BUY', qty: 20, price: '1,249.00', status: 'Cancelled' },
    { time: '15:28:45', symbol: 'SBIN', type: 'SELL', qty: 15, price: '812.00', status: 'Executed' },
  ];

  const handlePlaceOrder = () => {
    alert(`${orderType} order submitted for ${quantity} shares of ${selectedSymbol} via ${productType} (${deliveryType}).`);
  };

  return (
    <div className="TradeTerminal">
      
      {/* Top Header Bar */}
      <div className="TradeTerminal-top-bar">
        <div className="TradeTerminal-title-area">
          <h2>Trade Terminal</h2>
          <p>Advanced trading interface for professional traders</p>
        </div>
        <div className="TradeTerminal-top-metrics">
          <div className="TradeTerminal-metric-box">
            <span className="metric-label">Buying Power</span>
            <span className="metric-val">₹ 12,45,678.90</span>
          </div>
          <div className="TradeTerminal-metric-box">
            <span className="metric-label">Day's P&L</span>
            <span className="metric-val positive">+ ₹ 24,567.80 (1.98%)</span>
          </div>
          <div className="TradeTerminal-metric-box">
            <span className="metric-label">Total P&L</span>
            <span className="metric-val positive">+ ₹ 1,24,567.30 (12.45%)</span>
          </div>
        </div>
      </div>

      {/* Market Segment Navigation Filter */}
      <div className="TradeTerminal-segments-bar">
        {['Cash Market', 'F&O', 'Currency', 'Commodity'].map((seg) => (
          <button 
            key={seg} 
            className={`TradeTerminal-segment-btn ${activeMarketType === seg ? 'active' : ''}`}
            onClick={() => setActiveMarketType(seg)}
          >
            <span className={`segment-dot ${activeMarketType === seg ? 'active' : ''}`}></span>
            {seg}
          </button>
        ))}
      </div>

      {/* Main Grid Workstation */}
      <div className="TradeTerminal-workspace-grid">
        
        {/* Left Column: Chart & Interactive Tools */}
        <div className="TradeTerminal-chart-column">
          <div className="TradeTerminal-card TradeTerminal-chart-container">
            
            {/* Chart Toolbar Top */}
            <div className="TradeTerminal-chart-header">
              <div className="chart-symbol-info">
                <h3>{selectedSymbol}</h3>
                <span className="exchange-badge">NSE</span>
                <span className="chart-price">2,856.75</span>
                <span className="chart-change positive">+32.40 (1.15%)</span>
              </div>
              <div className="chart-tools-actions">
                <FiSettings />
                <FiMaximize2 />
              </div>
            </div>

            {/* TradingView-style Tool Sidebar + Main Canvas */}
            <div className="TradeTerminal-chart-body-wrapper">
              
              {/* Left Toolbar */}
              <div className="TradeTerminal-drawing-tools">
                <BiCrosshair title="Crosshair" />
                <BiLineChart title="Trend Line" />
                <BiPencil title="Brush" />
                <BiRectangle title="Rectangle" />
                <FiBarChart2 title="Indicators" />
                <BiShapePolygon title="Fibonacci" />
                <FiPlus title="Add" />
                <FiMinus title="Subtract" />
              </div>

              {/* Chart Main Display */}
              <div className="TradeTerminal-main-chart-view">
                <div className="chart-timeframes-bar">
                  {['1m', '5m', '15m', '1H', '1D', '1W'].map((tf) => (
                    <button 
                      key={tf} 
                      className={timeframe === tf ? 'active' : ''}
                      onClick={() => setTimeframe(tf)}
                    >
                      {tf}
                    </button>
                  ))}
                  <div className="indicator-select-badge">
                    <FiSliders /> Indicators
                  </div>
                </div>

                <div className="chart-ohlc-legend">
                  <span>O 2,853.20</span>
                  <span>H 2,859.40</span>
                  <span>L 2,851.10</span>
                  <span>C 2,856.75</span>
                  <span className="positive">+3.55 (+0.12%)</span>
                </div>

                {/* Mock Candlestick Visual Area */}
                <div className="TradeTerminal-candlestick-canvas">
                  <div className="candlestick-grid-lines"></div>
                  <div className="candlestick-render-bars"></div>
                  <div className="volume-histogram-bars"></div>
                </div>

                {/* X-Axis Time Marks */}
                <div className="TradeTerminal-chart-xaxis">
                  <span>12:00</span>
                  <span>14:00</span>
                  <span>21 May</span>
                  <span>12:00</span>
                  <span>14:00</span>
                  <span>22 May</span>
                  <span>12:00</span>
                  <span>14:00</span>
                  <span>23 May</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Table Section for Positions/Orders */}
          <div className="TradeTerminal-card TradeTerminal-bottom-table-card">
            <div className="TradeTerminal-table-tabs">
              {['Open Positions (3)', 'Open Orders (5)', 'Order History', 'Trade History', 'Funds'].map((tab) => (
                <button 
                  key={tab} 
                  className={positionsTab === tab ? 'active' : ''}
                  onClick={() => setPositionsTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="TradeTerminal-table-responsive">
              <table className="TradeTerminal-data-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Avg Price</th>
                    <th>LTP</th>
                    <th>P&L</th>
                    <th>P&L %</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {positionsData.map((row, index) => (
                    <tr key={index}>
                      <td><strong>{row.symbol}</strong></td>
                      <td>{row.product}</td>
                      <td>{row.qty}</td>
                      <td>{row.avgPrice}</td>
                      <td>{row.ltp}</td>
                      <td className={row.positive ? 'positive' : 'negative'}>{row.pnl}</td>
                      <td className={row.positive ? 'positive' : 'negative'}>{row.pnlPtr || row.pnlPct}</td>
                      <td>
                        <button className="square-off-btn" onClick={() => alert(`Square off order triggered for ${row.symbol}`)}>
                          Square Off
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Center Column: Order Placement Ticket */}
        <div className="TradeTerminal-order-column">
          <div className="TradeTerminal-card TradeTerminal-place-order-card">
            <div className="order-card-top-title">
              <h3>Place Order</h3>
              <div className="buy-sell-switch-tabs">
                <button 
                  className={`switch-buy ${orderType === 'Buy' ? 'active' : ''}`}
                  onClick={() => setOrderType('Buy')}
                >
                  Buy
                </button>
                <button 
                  className={`switch-sell ${orderType === 'Sell' ? 'active' : ''}`}
                  onClick={() => setOrderType('Sell')}
                >
                  Sell
                </button>
              </div>
            </div>

            {/* Product Sub-options */}
            <div className="order-sub-tabs">
              {['Limit', 'Market', 'SL', 'SL-M'].map((pt) => (
                <button 
                  key={pt} 
                  className={productType === pt ? 'active' : ''}
                  onClick={() => setProductType(pt)}
                >
                  {pt}
                </button>
              ))}
            </div>

            <div className="order-form-group">
              <label>Symbol</label>
              <select 
                value={selectedSymbol} 
                onChange={(e) => setSelectedSymbol(e.target.value)}
              >
                <option value="RELIANCE">RELIANCE</option>
                <option value="TCS">TCS</option>
                <option value="HDFCBANK">HDFCBANK</option>
                <option value="INFY">INFY</option>
              </select>
            </div>

            <div className="order-form-group">
              <label>Price</label>
              <div className="price-input-stepper">
                <input type="text" value="2856.75" readOnly />
                <button onClick={() => {}}><FiMinus /></button>
                <button onClick={() => {}}><FiPlus /></button>
              </div>
            </div>

            <div className="order-form-group">
              <label>Quantity <span className="lot-label">Lot: 1</span></label>
              <div className="price-input-stepper">
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(e.target.value)} 
                />
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><FiMinus /></button>
                <button onClick={() => setQuantity(Number(quantity) + 1)}><FiPlus /></button>
              </div>
            </div>

            <div className="order-form-group">
              <label>Product</label>
              <div className="segmented-delivery-picker">
                <button 
                  className={deliveryType === 'Intraday' ? 'active' : ''}
                  onClick={() => setDeliveryType('Intraday')}
                >
                  Intraday
                </button>
                <button 
                  className={deliveryType === 'Delivery' ? 'active' : ''}
                  onClick={() => setDeliveryType('Delivery')}
                >
                  Delivery
                </button>
              </div>
            </div>

            <div className="order-form-group">
              <label>Validity</label>
              <select>
                <option>Day</option>
                <option>IOC</option>
              </select>
            </div>

            <div className="margin-calculation-box">
              <div className="margin-row">
                <span>Margin Required</span>
                <span>₹ 28,567.50</span>
              </div>
              <div className="margin-row">
                <span>Available</span>
                <span>₹ 12,45,678.90</span>
              </div>
            </div>

            <button 
              className={`execute-order-btn ${orderType === 'Buy' ? 'buy-bg' : 'sell-bg'}`}
              onClick={handlePlaceOrder}
            >
              {orderType.toUpperCase()} {selectedSymbol}
            </button>
          </div>
        </div>

        {/* Right Column: Order Book, Recent Trades, Watchlist & Order Status */}
        <div className="TradeTerminal-right-column">
          
          {/* Order Book Depth Card */}
          <div className="TradeTerminal-card TradeTerminal-depth-card">
            <div className="card-header-slim">
              <h4>Order Book ({selectedSymbol})</h4>
            </div>
            <div className="depth-table-split">
              <div className="depth-headers">
                <span>Price (₹)</span>
                <span>Qty</span>
                <span>Total</span>
              </div>
              {/* Bids & Asks visualization bars */}
              <div className="depth-rows-container">
                <div className="depth-row bid-row"><span>2,857.40</span><span>1,200</span><span>6,240</span></div>
                <div className="depth-row bid-row"><span>2,857.20</span><span>800</span><span>5,040</span></div>
                <div className="depth-row bid-row"><span>2,857.00</span><span>1,500</span><span>4,240</span></div>
                <div className="depth-row bid-row"><span>2,856.80</span><span>900</span><span>2,740</span></div>
                <div className="depth-row bid-row"><span>2,856.75</span><span>600</span><span>1,840</span></div>
              </div>
              <div className="spread-price-indicator">
                <span className="positive">2,856.75</span>
                <span className="positive">+32.40 (1.15%)</span>
              </div>
              <div className="depth-rows-container">
                <div className="depth-row ask-row"><span>2,856.70</span><span>700</span><span>700</span></div>
                <div className="depth-row ask-row"><span>2,856.50</span><span>1,000</span><span>1,700</span></div>
                <div className="depth-row ask-row"><span>2,856.30</span><span>1,200</span><span>2,900</span></div>
                <div className="depth-row ask-row"><span>2,856.10</span><span>900</span><span>3,800</span></div>
                <div className="depth-row ask-row"><span>2,855.90</span><span>1,400</span><span>5,200</span></div>
              </div>
              <div className="depth-totals-bar">
                <span>Bid Total <strong>8,200</strong></span>
                <span>Ask Total <strong>20,100</strong></span>
              </div>
            </div>
          </div>

          {/* Recent Trades Card */}
          <div className="TradeTerminal-card TradeTerminal-recent-card">
            <div className="card-header-slim">
              <h4>Recent Trades</h4>
            </div>
            <div className="recent-trades-table">
              <div className="recent-head">
                <span>Price (₹)</span>
                <span>Qty</span>
                <span>Time</span>
              </div>
              {recentTrades.slice(0, 5).map((t, idx) => (
                <div className="recent-row" key={idx}>
                  <span className={t.positive ? 'positive' : 'negative'}>{t.price}</span>
                  <span>{t.qty}</span>
                  <span>{t.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Watchlist Card */}
          <div className="TradeTerminal-card TradeTerminal-watchlist-card">
            <div className="card-header-slim watchlist-header-action">
              <h4>Watchlist</h4>
              <div className="watchlist-search-inline">
                <FiSearch />
                <input 
                  type="text" 
                  placeholder="Search symbol..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="watchlist-mini-table">
              <table>
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>LTP</th>
                    <th>Change</th>
                    <th>% Change</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWatchlist.map((st, idx) => (
                    <tr key={idx} onClick={() => setSelectedSymbol(st.symbol)}>
                      <td><strong>{st.symbol}</strong></td>
                      <td>{st.ltp}</td>
                      <td className={st.positive ? 'positive' : 'negative'}>{st.change}</td>
                      <td className={st.positive ? 'positive' : 'negative'}>{st.changePct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order Status Card */}
          <div className="TradeTerminal-card TradeTerminal-status-card">
            <div className="card-header-slim">
              <h4>Order Status</h4>
            </div>
            <div className="order-status-list">
              {orderStatusData.map((os, idx) => (
                <div className="order-status-row" key={idx}>
                  <span className="os-time">{os.time}</span>
                  <span className="os-sym"><strong>{os.symbol}</strong></span>
                  <span className={`os-type ${os.type === 'BUY' ? 'positive' : 'negative'}`}>{os.type}</span>
                  <span className="os-qty">{os.qty}</span>
                  <span className="os-price">{os.price}</span>
                  <span className={`os-status ${os.status.toLowerCase()}`}>{os.status}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default TradeTerminal;