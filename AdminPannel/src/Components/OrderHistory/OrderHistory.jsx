import React, { useState } from 'react';
import './OrderHistory.css';
import { 
  FiSearch, 
  FiDownload, 
  FiRefreshCw, 
  FiCheckCircle, 
  FiClock, 
  FiXCircle, 
  FiLayers,
  FiFilter
} from 'react-icons/fi';

const OrderHistory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sideFilter, setSideFilter] = useState('All');

  // Order History Mock Data
  const ordersData = [
    { orderId: 'ORD-938210', time: '2026-08-20 15:28:10', symbol: 'RELIANCE', side: 'BUY', orderType: 'LIMIT', qty: 250, filledQty: 250, price: '2,850.00', status: 'Executed' },
    { orderId: 'ORD-938195', time: '2026-08-20 14:10:45', symbol: 'TCS', side: 'SELL', orderType: 'MARKET', qty: 150, filledQty: 150, price: '3,981.20', status: 'Executed' },
    { orderId: 'ORD-938160', time: '2026-08-20 11:45:00', symbol: 'HDFCBANK', side: 'BUY', orderType: 'SL-M', qty: 400, filledQty: 0, price: '1,575.00', status: 'Cancelled' },
    { orderId: 'ORD-938122', time: '2026-08-19 15:55:30', symbol: 'INFY', side: 'BUY', orderType: 'LIMIT', qty: 300, filledQty: 300, price: '1,420.00', status: 'Executed' },
    { orderId: 'ORD-938090', time: '2026-08-19 10:20:12', symbol: 'ICICIBANK', side: 'SELL', orderType: 'LIMIT', qty: 200, filledQty: 100, price: '1,250.00', status: 'Partially Filled' },
    { orderId: 'ORD-938044', time: '2026-08-18 14:05:55', symbol: 'SBIN', side: 'BUY', orderType: 'MARKET', qty: 500, filledQty: 500, price: '812.60', status: 'Executed' },
    { orderId: 'ORD-938011', time: '2026-08-18 09:35:20', symbol: 'GOVT 7.26%', side: 'BUY', orderType: 'LIMIT', qty: 1000, filledQty: 0, price: '98.00', status: 'Rejected' },
  ];

  // Filtering Logic
  const filteredOrders = ordersData.filter(order => {
    const matchesSearch = order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          order.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    const matchesSide = sideFilter === 'All' || order.side === sideFilter;
    return matchesSearch && matchesStatus && matchesSide;
  });

  return (
    <div className="OrderHistory">
      
      {/* Top Header & Actions */}
      <div className="OrderHistory-header-area">
        <div className="OrderHistory-title-group">
          <h2>Order History Management</h2>
          <p>Numeric Edge Execution Log & Active Order Tracking</p>
        </div>
        <div className="OrderHistory-action-buttons">
          <button className="OrderHistory-btn-outline" onClick={() => alert('Syncing order feeds...')}>
            <FiRefreshCw /> Sync Orders
          </button>
          <button className="OrderHistory-btn-primary" onClick={() => alert('Exporting order audit logs...')}>
            <FiDownload /> Export Audit Log
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="OrderHistory-metrics-grid">
        <div className="OrderHistory-metric-card">
          <span className="metric-title">Total Orders Today</span>
          <span className="metric-value">148</span>
          <span className="metric-sub positive">High routing throughput</span>
        </div>
        <div className="OrderHistory-metric-card">
          <span className="metric-title">Successfully Executed</span>
          <span className="metric-value">132</span>
          <span className="metric-sub positive">89.1% execution rate</span>
        </div>
        <div className="OrderHistory-metric-card">
          <span className="metric-title">Partially Filled</span>
          <span className="metric-value">10</span>
          <span className="metric-sub warning">Pending remaining blocks</span>
        </div>
        <div className="OrderHistory-metric-card">
          <span className="metric-title">Rejected / Cancelled</span>
          <span className="metric-value">6</span>
          <span className="metric-sub negative">Slippage limits reached</span>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="OrderHistory-card OrderHistory-table-container">
        
        {/* Controls Bar */}
        <div className="OrderHistory-controls-flex">
          <h3>Order Audit Trail</h3>
          
          <div className="OrderHistory-filters-group">
            {/* Side Filter */}
            <div className="OrderHistory-filter-dropdown">
              <select value={sideFilter} onChange={(e) => setSideFilter(e.target.value)}>
                <option value="All">All Sides</option>
                <option value="BUY">BUY</option>
                <option value="SELL">SELL</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="OrderHistory-filter-dropdown">
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="All">All Statuses</option>
                <option value="Executed">Executed</option>
                <option value="Partially Filled">Partially Filled</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Search Box */}
            <div className="OrderHistory-search-box">
              <FiSearch />
              <input 
                type="text" 
                placeholder="Search Order ID or Symbol..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="OrderHistory-table-responsive">
          <table className="OrderHistory-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Timestamp</th>
                <th>Symbol</th>
                <th>Side</th>
                <th>Type</th>
                <th>Qty (Req/Fill)</th>
                <th>Price (₹)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((ord, idx) => (
                  <tr key={idx}>
                    <td className="order-id-cell"><strong>{ord.orderId}</strong></td>
                    <td className="timestamp-cell">{ord.time}</td>
                    <td className="symbol-cell"><strong>{ord.symbol}</strong></td>
                    <td>
                      <span className={`side-badge ${ord.side.toLowerCase()}`}>
                        {ord.side}
                      </span>
                    </td>
                    <td><span className="type-pill">{ord.orderType}</span></td>
                    <td>{ord.filledQty} / {ord.qty}</td>
                    <td>{ord.price}</td>
                    <td>
                      <span className={`status-badge ${ord.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {ord.status === 'Executed' && <FiCheckCircle />}
                        {ord.status === 'Partially Filled' && <FiClock />}
                        {ord.status === 'Cancelled' && <FiXCircle />}
                        {ord.status === 'Rejected' && <FiXCircle />}
                        {ord.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', padding: '30px', color: '#9ca3af' }}>
                    No order records found matching your filters.
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

export default OrderHistory;