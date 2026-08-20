import React, { useState } from 'react';
import './Transactions.css';
import { 
  FiSearch, 
  FiDownload, 
  FiRefreshCw, 
  FiArrowUpRight, 
  FiArrowDownLeft, 
  FiFilter,
  FiCheckCircle,
  FiClock,
  FiXCircle
} from 'react-icons/fi';

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Transactions Ledger Data
  const transactionsData = [
    { id: 'TXN-849201', date: '2026-08-20 15:30:45', symbol: 'RELIANCE', type: 'BUY', qty: 10, price: '₹ 2,856.75', totalAmount: '₹ 28,567.50', status: 'Completed', category: 'Equities' },
    { id: 'TXN-849198', date: '2026-08-20 14:15:10', symbol: 'DEPOSIT', type: 'CREDIT', qty: '-', price: '-', totalAmount: '₹ 5,00,000.00', status: 'Completed', category: 'Wallet' },
    { id: 'TXN-849175', date: '2026-08-20 12:45:22', symbol: 'TCS', type: 'SELL', qty: 5, price: '₹ 3,980.00', totalAmount: '₹ 19,900.00', status: 'Pending', category: 'Equities' },
    { id: 'TXN-849150', date: '2026-08-19 16:20:05', symbol: 'INFY', type: 'BUY', qty: 20, price: '₹ 1,487.00', totalAmount: '₹ 29,740.00', status: 'Completed', category: 'Equities' },
    { id: 'TXN-849112', date: '2026-08-19 11:10:33', symbol: 'WITHDRAWAL', type: 'DEBIT', qty: '-', price: '-', totalAmount: '₹ 1,50,000.00', status: 'Completed', category: 'Wallet' },
    { id: 'TXN-849088', date: '2026-08-18 10:05:40', symbol: 'GOLD BEES', type: 'BUY', qty: 150, price: '₹ 58.60', totalAmount: '₹ 8,790.00', status: 'Completed', category: 'Commodities' },
    { id: 'TXN-849045', date: '2026-08-17 15:55:12', symbol: 'SBIN', type: 'SELL', qty: 15, price: '₹ 812.00', totalAmount: '₹ 12,180.00', status: 'Failed', category: 'Equities' },
    { id: 'TXN-849010', date: '2026-08-17 09:30:00', symbol: 'HDFCBANK', type: 'BUY', qty: 25, price: '₹ 1,642.30', totalAmount: '₹ 41,057.50', status: 'Completed', category: 'Equities' },
  ];

  // Filtering Logic
  const filteredTransactions = transactionsData.filter(txn => {
    const matchesSearch = txn.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          txn.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'All' || txn.type === typeFilter;
    const matchesStatus = statusFilter === 'All' || txn.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="Transactions">
      
      {/* Top Header & Actions */}
      <div className="Transactions-header-area">
        <div className="Transactions-title-group">
          <h2>Transaction Ledger</h2>
          <p>Numeric Edge Comprehensive Financial & Trade Settlement History</p>
        </div>
        <div className="Transactions-action-buttons">
          <button className="Transactions-btn-outline" onClick={() => alert('Refreshing ledger feeds...')}>
            <FiRefreshCw /> Refresh
          </button>
          <button className="Transactions-btn-primary" onClick={() => alert('Downloading transaction history CSV...')}>
            <FiDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="Transactions-metrics-grid">
        <div className="Transactions-metric-card">
          <span className="metric-title">Total Volume (30 Days)</span>
          <span className="metric-value">₹ 1,48,50,200</span>
          <span className="metric-sub positive">Across 1,240 trades</span>
        </div>
        <div className="Transactions-metric-card">
          <span className="metric-title">Completed Settlements</span>
          <span className="metric-value">98.4%</span>
          <span className="metric-sub positive">High Execution Reliability</span>
        </div>
        <div className="Transactions-metric-card">
          <span className="metric-title">Pending Settlements</span>
          <span className="metric-value">12 Orders</span>
          <span className="metric-sub warning">Awaiting clearing house</span>
        </div>
        <div className="Transactions-metric-card">
          <span className="metric-title">Failed / Cancelled</span>
          <span className="metric-value">1.6%</span>
          <span className="metric-sub negative">Low rejection rate</span>
        </div>
      </div>

      {/* Main Ledger Table Card */}
      <div className="Transactions-card Transactions-table-container">
        
        {/* Controls Bar: Search & Filters */}
        <div className="Transactions-controls-flex">
          <h3>Transaction History</h3>
          
          <div className="Transactions-filters-group">
            {/* Type Filter */}
            <div className="Transactions-filter-dropdown">
              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="All">All Types</option>
                <option value="BUY">BUY</option>
                <option value="SELL">SELL</option>
                <option value="CREDIT">CREDIT (Deposit)</option>
                <option value="DEBIT">DEBIT (Withdrawal)</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="Transactions-filter-dropdown">
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="All">All Statuses</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>

            {/* Search Bar */}
            <div className="Transactions-search-box">
              <FiSearch />
              <input 
                type="text" 
                placeholder="Search ID or Symbol..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="Transactions-table-responsive">
          <table className="Transactions-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Timestamp</th>
                <th>Symbol / Asset</th>
                <th>Type</th>
                <th>Category</th>
                <th>Qty</th>
                <th>Execution Price</th>
                <th>Total Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((txn, idx) => (
                  <tr key={idx}>
                    <td className="txn-id-cell"><strong>{txn.id}</strong></td>
                    <td className="timestamp-cell">{txn.date}</td>
                    <td className="symbol-cell"><strong>{txn.symbol}</strong></td>
                    <td>
                      <span className={`type-badge ${txn.type.toLowerCase()}`}>
                        {txn.type === 'BUY' || txn.type === 'CREDIT' ? <FiArrowDownLeft /> : <FiArrowUpRight />}
                        {txn.type}
                      </span>
                    </td>
                    <td><span className="category-pill">{txn.category}</span></td>
                    <td>{txn.qty}</td>
                    <td>{txn.price}</td>
                    <td className="amount-cell"><strong>{txn.totalAmount}</strong></td>
                    <td>
                      <span className={`status-badge ${txn.status.toLowerCase()}`}>
                        {txn.status === 'Completed' && <FiCheckCircle />}
                        {txn.status === 'Pending' && <FiClock />}
                        {txn.status === 'Failed' && <FiXCircle />}
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" style={{ textAlign: 'center', padding: '30px', color: '#9ca3af' }}>
                    No transactions found matching your filter criteria.
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

export default Transactions;