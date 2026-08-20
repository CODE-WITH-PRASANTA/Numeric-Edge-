import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');

  // Profile Form State
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@numericedge.com',
    role: 'Senior Trader',
    timezone: '(UTC+00:00) London',
    theme: 'Dark'
  });

  // Platform Preferences State
  const [platform, setPlatform] = useState({
    language: 'English',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24 Hours',
    defaultDashboard: 'Dashboard',
    marketRefresh: '5 Seconds'
  });

  // Trading Toggles State
  const [toggles, setToggles] = useState({
    confirmOrder: true,
    soundNotifications: true,
    showConfirmation: true,
    autoSync: true,
    emailAlerts: true,
    pushAlerts: true,
    tradeExecution: true,
    priceAlerts: false,
    marginCalls: true,
    twoFactor: true,
    loginAlerts: true,
    withdrawalWhitelist: true
  });

  // Trading Dropdowns State
  const [tradingParams, setTradingParams] = useState({
    orderType: 'Limit',
    timeInForce: 'GTC',
    leverage: '5x',
    positionMode: 'Hedged'
  });

  // API Keys Dummy Data
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Binance Live Bot', key: 'api_key_live_9948293xxxx', created: '2026-02-15', status: 'Active' },
    { id: 2, name: 'Bybit Auto-Rebalancer', key: 'api_key_read_1104882xxxx', created: '2026-04-10', status: 'Read Only' }
  ]);

  // Users Dummy Data
  const [users, setUsers] = useState([
    { id: 1, name: 'Alex Morgan', email: 'alex.morgan@numericedge.com', role: 'Super Admin', status: 'Active' },
    { id: 2, name: 'Sarah Connor', email: 's.connor@numericedge.com', role: 'Trader', status: 'Active' },
    { id: 3, name: 'David Miller', email: 'd.miller@numericedge.com', role: 'Risk Analyst', status: 'Inactive' }
  ]);

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const tabs = ['General', 'Security', 'Trading', 'Notifications', 'API Management', 'Users', 'System'];

  return (
    <div className="Settings">
      {/* Top Header */}
      <div className="SettingsTopHeader">
        <div>
          <h1 className="SettingsTitle">Settings</h1>
          <p className="SettingsSubtitle">Manage your trading preferences, security and system configurations.</p>
        </div>
        <button className="SettingsPrimaryBtn" onClick={() => alert('Settings saved successfully!')}>
          <span className="SettingsBtnIcon">💾</span> Save Changes
        </button>
      </div>

      {/* Tabs Navigation */}
      <div className="SettingsTabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`SettingsTabItem ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT: GENERAL (REFERENCE DESIGN) */}
      {activeTab === 'General' && (
        <div className="SettingsGrid">
          {/* Profile Information Card */}
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">👤</div>
              <div>
                <h2 className="SettingsCardTitle">Profile Information</h2>
                <p className="SettingsCardSubtitle">Update your profile information and preferences.</p>
              </div>
            </div>
            <div className="SettingsProfileBody">
              <div className="SettingsAvatarContainer">
                <img src={avatar} alt="Profile Avatar" className="SettingsAvatarImg" />
                <label htmlFor="avatar-upload" className="SettingsAvatarUploadBadge" title="Upload Photo">
                  📷
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
              <div className="SettingsFormFields">
                <div className="SettingsFormRow">
                  <div className="SettingsFormGroup">
                    <label className="SettingsLabel">Full Name</label>
                    <input
                      type="text"
                      className="SettingsInput"
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    />
                  </div>
                  <div className="SettingsFormGroup">
                    <label className="SettingsLabel">Email Address</label>
                    <input
                      type="email"
                      className="SettingsInput"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="SettingsFormRow">
                  <div className="SettingsFormGroup">
                    <label className="SettingsLabel">Role</label>
                    <select
                      className="SettingsSelect"
                      value={profile.role}
                      onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    >
                      <option value="Senior Trader">Senior Trader</option>
                      <option value="Junior Trader">Junior Trader</option>
                      <option value="Risk Manager">Risk Manager</option>
                    </select>
                  </div>
                  <div className="SettingsFormGroup">
                    <label className="SettingsLabel">Timezone</label>
                    <select
                      className="SettingsSelect"
                      value={profile.timezone}
                      onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                    >
                      <option value="(UTC+00:00) London">(UTC+00:00) London</option>
                      <option value="(UTC+05:30) Mumbai">(UTC+05:30) Mumbai</option>
                      <option value="(UTC-05:00) New York">(UTC-05:00) New York</option>
                    </select>
                  </div>
                </div>

                <div className="SettingsFormRow">
                  <div className="SettingsFormGroup">
                    <label className="SettingsLabel">Theme Preference</label>
                    <select
                      className="SettingsSelect"
                      value={profile.theme}
                      onChange={(e) => setProfile({ ...profile, theme: e.target.value })}
                    >
                      <option value="Dark">Dark</option>
                      <option value="Light">Light</option>
                      <option value="System">System</option>
                    </select>
                  </div>
                </div>

                <div className="SettingsCardActionRight">
                  <button className="SettingsUpdateBtn">Update Profile</button>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Preferences Card */}
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">⚙️</div>
              <div>
                <h2 className="SettingsCardTitle">Platform Preferences</h2>
                <p className="SettingsCardSubtitle">Customize your platform experience.</p>
              </div>
            </div>
            <div className="SettingsList">
              <div className="SettingsListItem">
                <div className="SettingsListText">
                  <span className="SettingsItemName">Language</span>
                  <span className="SettingsItemDesc">Select your preferred language</span>
                </div>
                <select
                  className="SettingsInlineSelect"
                  value={platform.language}
                  onChange={(e) => setPlatform({ ...platform, language: e.target.value })}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="German">German</option>
                </select>
              </div>

              <div className="SettingsListItem">
                <div className="SettingsListText">
                  <span className="SettingsItemName">Date Format</span>
                  <span className="SettingsItemDesc">Choose your date display format</span>
                </div>
                <select
                  className="SettingsInlineSelect"
                  value={platform.dateFormat}
                  onChange={(e) => setPlatform({ ...platform, dateFormat: e.target.value })}
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>

              <div className="SettingsListItem">
                <div className="SettingsListText">
                  <span className="SettingsItemName">Time Format</span>
                  <span className="SettingsItemDesc">Choose your time display format</span>
                </div>
                <select
                  className="SettingsInlineSelect"
                  value={platform.timeFormat}
                  onChange={(e) => setPlatform({ ...platform, timeFormat: e.target.value })}
                >
                  <option value="24 Hours">24 Hours</option>
                  <option value="12 Hours">12 Hours</option>
                </select>
              </div>

              <div className="SettingsListItem">
                <div className="SettingsListText">
                  <span className="SettingsItemName">Default Dashboard</span>
                  <span className="SettingsItemDesc">Select default landing page</span>
                </div>
                <select
                  className="SettingsInlineSelect"
                  value={platform.defaultDashboard}
                  onChange={(e) => setPlatform({ ...platform, defaultDashboard: e.target.value })}
                >
                  <option value="Dashboard">Dashboard</option>
                  <option value="Live Markets">Live Markets</option>
                  <option value="Trade Terminal">Trade Terminal</option>
                </select>
              </div>

              <div className="SettingsListItem">
                <div className="SettingsListText">
                  <span className="SettingsItemName">Market Data Refresh</span>
                  <span className="SettingsItemDesc">Auto refresh market data</span>
                </div>
                <select
                  className="SettingsInlineSelect"
                  value={platform.marketRefresh}
                  onChange={(e) => setPlatform({ ...platform, marketRefresh: e.target.value })}
                >
                  <option value="1 Second">1 Second</option>
                  <option value="5 Seconds">5 Seconds</option>
                  <option value="10 Seconds">10 Seconds</option>
                </select>
              </div>
            </div>
          </div>

          {/* System Status Card */}
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">📊</div>
              <div>
                <h2 className="SettingsCardTitle">System Status</h2>
                <p className="SettingsCardSubtitle">Monitor system performance and status.</p>
              </div>
            </div>
            <div className="SettingsList">
              <div className="SettingsListItem">
                <span className="SettingsItemName">System Uptime</span>
                <span className="SettingsStatusSuccess">99.99% &rsaquo;</span>
              </div>
              <div className="SettingsListItem">
                <span className="SettingsItemName">Server Status</span>
                <span className="SettingsStatusSuccess">Operational &rsaquo;</span>
              </div>
              <div className="SettingsListItem">
                <span className="SettingsItemName">Database</span>
                <span className="SettingsStatusSuccess">Operational &rsaquo;</span>
              </div>
              <div className="SettingsListItem">
                <span className="SettingsItemName">API Status</span>
                <span className="SettingsStatusSuccess">Operational &rsaquo;</span>
              </div>
              <div className="SettingsListItem">
                <span className="SettingsItemName">Last Backup</span>
                <span className="SettingsStatusMuted">2 hours ago</span>
              </div>
            </div>
            <button className="SettingsFullWidthBtn" onClick={() => setActiveTab('System')}>View System Logs &rarr;</button>
          </div>

          {/* Trading Preferences Card */}
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">🎛️</div>
              <div>
                <h2 className="SettingsCardTitle">Trading Preferences</h2>
                <p className="SettingsCardSubtitle">Configure your trading interface and default settings.</p>
              </div>
            </div>
            <div className="SettingsTradingGrid">
              <div className="SettingsTradingCol">
                <div className="SettingsToggleItem">
                  <div>
                    <div className="SettingsItemName">Confirm Order Placement</div>
                    <div className="SettingsItemDesc">Show confirmation before placing orders</div>
                  </div>
                  <div
                    className={`SettingsSwitch ${toggles.confirmOrder ? 'active' : ''}`}
                    onClick={() => handleToggle('confirmOrder')}
                  >
                    <div className="SettingsSwitchHandle" />
                  </div>
                </div>

                <div className="SettingsToggleItem">
                  <div>
                    <div className="SettingsItemName">Sound Notifications</div>
                    <div className="SettingsItemDesc">Play sound for order fills and alerts</div>
                  </div>
                  <div
                    className={`SettingsSwitch ${toggles.soundNotifications ? 'active' : ''}`}
                    onClick={() => handleToggle('soundNotifications')}
                  >
                    <div className="SettingsSwitchHandle" />
                  </div>
                </div>

                <div className="SettingsToggleItem">
                  <div>
                    <div className="SettingsItemName">Show Order Confirmation</div>
                    <div className="SettingsItemDesc">Display order confirmation popups</div>
                  </div>
                  <div
                    className={`SettingsSwitch ${toggles.showConfirmation ? 'active' : ''}`}
                    onClick={() => handleToggle('showConfirmation')}
                  >
                    <div className="SettingsSwitchHandle" />
                  </div>
                </div>

                <div className="SettingsToggleItem">
                  <div>
                    <div className="SettingsItemName">Auto-Sync Positions</div>
                    <div className="SettingsItemDesc">Automatically sync positions</div>
                  </div>
                  <div
                    className={`SettingsSwitch ${toggles.autoSync ? 'active' : ''}`}
                    onClick={() => handleToggle('autoSync')}
                  >
                    <div className="SettingsSwitchHandle" />
                  </div>
                </div>
              </div>

              <div className="SettingsTradingCol">
                <div className="SettingsListItem">
                  <div className="SettingsListText">
                    <span className="SettingsItemName">Default Order Type</span>
                    <span className="SettingsItemDesc">Select default order type</span>
                  </div>
                  <select
                    className="SettingsInlineSelect"
                    value={tradingParams.orderType}
                    onChange={(e) => setTradingParams({ ...tradingParams, orderType: e.target.value })}
                  >
                    <option value="Limit">Limit</option>
                    <option value="Market">Market</option>
                    <option value="Stop-Limit">Stop-Limit</option>
                  </select>
                </div>

                <div className="SettingsListItem">
                  <div className="SettingsListText">
                    <span className="SettingsItemName">Default Time in Force</span>
                    <span className="SettingsItemDesc">Select default time in force</span>
                  </div>
                  <select
                    className="SettingsInlineSelect"
                    value={tradingParams.timeInForce}
                    onChange={(e) => setTradingParams({ ...tradingParams, timeInForce: e.target.value })}
                  >
                    <option value="GTC">GTC</option>
                    <option value="IOC">IOC</option>
                    <option value="FOK">FOK</option>
                  </select>
                </div>

                <div className="SettingsListItem">
                  <div className="SettingsListText">
                    <span className="SettingsItemName">Default Leverage</span>
                    <span className="SettingsItemDesc">Select default leverage</span>
                  </div>
                  <select
                    className="SettingsInlineSelect"
                    value={tradingParams.leverage}
                    onChange={(e) => setTradingParams({ ...tradingParams, leverage: e.target.value })}
                  >
                    <option value="1x">1x</option>
                    <option value="5x">5x</option>
                    <option value="10x">10x</option>
                    <option value="20x">20x</option>
                  </select>
                </div>

                <div className="SettingsListItem">
                  <div className="SettingsListText">
                    <span className="SettingsItemName">Default Position Mode</span>
                    <span className="SettingsItemDesc">Select default position mode</span>
                  </div>
                  <select
                    className="SettingsInlineSelect"
                    value={tradingParams.positionMode}
                    onChange={(e) => setTradingParams({ ...tradingParams, positionMode: e.target.value })}
                  >
                    <option value="Hedged">Hedged</option>
                    <option value="One-Way">One-Way</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings Card */}
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">🔒</div>
              <div>
                <h2 className="SettingsCardTitle">Security Settings</h2>
                <p className="SettingsCardSubtitle">Manage your account security and access.</p>
              </div>
            </div>
            <div className="SettingsList">
              <div className="SettingsListItem clickable" onClick={() => setActiveTab('Security')}>
                <div className="SettingsListText">
                  <span className="SettingsItemName">Two-Factor Authentication</span>
                  <span className="SettingsItemDesc">Add an extra layer of security</span>
                </div>
                <span className="SettingsBadgeSuccess">Enabled &rsaquo;</span>
              </div>

              <div className="SettingsListItem clickable" onClick={() => setActiveTab('Security')}>
                <div className="SettingsListText">
                  <span className="SettingsItemName">Login Alerts</span>
                  <span className="SettingsItemDesc">Get notified of new login attempts</span>
                </div>
                <span className="SettingsBadgeSuccess">Enabled &rsaquo;</span>
              </div>

              <div className="SettingsListItem clickable" onClick={() => setActiveTab('Security')}>
                <div className="SettingsListText">
                  <span className="SettingsItemName">Withdrawal Whitelist</span>
                  <span className="SettingsItemDesc">Restrict withdrawals to approved addresses</span>
                </div>
                <span className="SettingsBadgeSuccess">Enabled &rsaquo;</span>
              </div>

              <div className="SettingsListItem clickable" onClick={() => setActiveTab('Security')}>
                <div className="SettingsListText">
                  <span className="SettingsItemName">Session Management</span>
                  <span className="SettingsItemDesc">Manage active sessions</span>
                </div>
                <span className="SettingsItemArrow">&rsaquo;</span>
              </div>
            </div>
            <button className="SettingsFullWidthBtn" onClick={() => setActiveTab('Security')}>🔒 Change Password</button>
          </div>

          {/* Quick Actions Card */}
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">⚡</div>
              <div>
                <h2 className="SettingsCardTitle">Quick Actions</h2>
                <p className="SettingsCardSubtitle">Quick access to important settings.</p>
              </div>
            </div>
            <div className="SettingsList">
              <button className="SettingsActionRowBtn" onClick={() => alert('Account Statement Downloaded')}>
                <span>📥 Download Account Statement</span>
                <span>&rsaquo;</span>
              </button>
              <button className="SettingsActionRowBtn" onClick={() => alert('Trade History Exported')}>
                <span>📄 Export Trade History</span>
                <span>&rsaquo;</span>
              </button>
              <button className="SettingsActionRowBtn" onClick={() => setActiveTab('API Management')}>
                <span>🔑 Manage API Keys</span>
                <span>&rsaquo;</span>
              </button>
              <button className="SettingsActionRowBtn" onClick={() => setActiveTab('System')}>
                <span>🛠️ System Maintenance</span>
                <span>&rsaquo;</span>
              </button>
              <button className="SettingsActionRowBtn SettingsActionDanger" onClick={() => alert('Settings Reset!')}>
                <span>🔄 Reset All Settings</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: SECURITY */}
      {activeTab === 'Security' && (
        <div className="SettingsGrid SettingsSingleCol">
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">🔒</div>
              <div>
                <h2 className="SettingsCardTitle">Authentication & Security Rules</h2>
                <p className="SettingsCardSubtitle">Protect your account with multi-layer verification and session policies.</p>
              </div>
            </div>
            <div className="SettingsList">
              <div className="SettingsToggleItem">
                <div>
                  <div className="SettingsItemName">Two-Factor Authentication (2FA)</div>
                  <div className="SettingsItemDesc">Require Google Authenticator code on login</div>
                </div>
                <div className={`SettingsSwitch ${toggles.twoFactor ? 'active' : ''}`} onClick={() => handleToggle('twoFactor')}>
                  <div className="SettingsSwitchHandle" />
                </div>
              </div>

              <div className="SettingsToggleItem">
                <div>
                  <div className="SettingsItemName">Login Alerts</div>
                  <div className="SettingsItemDesc">Receive email warnings for unrecognized IP addresses</div>
                </div>
                <div className={`SettingsSwitch ${toggles.loginAlerts ? 'active' : ''}`} onClick={() => handleToggle('loginAlerts')}>
                  <div className="SettingsSwitchHandle" />
                </div>
              </div>

              <div className="SettingsToggleItem">
                <div>
                  <div className="SettingsItemName">Withdrawal Whitelist</div>
                  <div className="SettingsItemDesc">Only permit withdrawals to pre-approved crypto wallets</div>
                </div>
                <div className={`SettingsSwitch ${toggles.withdrawalWhitelist ? 'active' : ''}`} onClick={() => handleToggle('withdrawalWhitelist')}>
                  <div className="SettingsSwitchHandle" />
                </div>
              </div>
            </div>
          </div>

          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">🔑</div>
              <div>
                <h2 className="SettingsCardTitle">Change Password</h2>
                <p className="SettingsCardSubtitle">Ensure you use a strong password with at least 8 characters.</p>
              </div>
            </div>
            <div className="SettingsFormFields">
              <div className="SettingsFormGroup">
                <label className="SettingsLabel">Current Password</label>
                <input type="password" placeholder="••••••••" className="SettingsInput" />
              </div>
              <div className="SettingsFormRow">
                <div className="SettingsFormGroup">
                  <label className="SettingsLabel">New Password</label>
                  <input type="password" placeholder="••••••••" className="SettingsInput" />
                </div>
                <div className="SettingsFormGroup">
                  <label className="SettingsLabel">Confirm New Password</label>
                  <input type="password" placeholder="••••••••" className="SettingsInput" />
                </div>
              </div>
              <div className="SettingsCardActionRight">
                <button className="SettingsUpdateBtn">Update Password</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: TRADING */}
      {activeTab === 'Trading' && (
        <div className="SettingsGrid SettingsSingleCol">
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">📈</div>
              <div>
                <h2 className="SettingsCardTitle">Advanced Order Defaults</h2>
                <p className="SettingsCardSubtitle">Configure risk metrics and terminal execution logic.</p>
              </div>
            </div>
            <div className="SettingsTradingGrid">
              <div className="SettingsTradingCol">
                <div className="SettingsListItem">
                  <div className="SettingsListText">
                    <span className="SettingsItemName">Max Open Positions</span>
                    <span className="SettingsItemDesc">Maximum concurrent active trades</span>
                  </div>
                  <input type="number" defaultValue={10} className="SettingsInlineSelect" style={{ width: '80px' }} />
                </div>
                <div className="SettingsListItem">
                  <div className="SettingsListText">
                    <span className="SettingsItemName">Default Slippage Tolerance</span>
                    <span className="SettingsItemDesc">Allowable percentage variance</span>
                  </div>
                  <select className="SettingsInlineSelect">
                    <option>0.1%</option>
                    <option>0.5%</option>
                    <option>1.0%</option>
                  </select>
                </div>
              </div>

              <div className="SettingsTradingCol">
                <div className="SettingsListItem">
                  <div className="SettingsListText">
                    <span className="SettingsItemName">Stop-Loss Execution</span>
                    <span className="SettingsItemDesc">Trigger mechanism</span>
                  </div>
                  <select className="SettingsInlineSelect">
                    <option>Market Order</option>
                    <option>Limit Order</option>
                  </select>
                </div>
                <div className="SettingsListItem">
                  <div className="SettingsListText">
                    <span className="SettingsItemName">Default Margin Mode</span>
                    <span className="SettingsItemDesc">Isolated or Cross margin</span>
                  </div>
                  <select className="SettingsInlineSelect">
                    <option>Cross Margin</option>
                    <option>Isolated Margin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: NOTIFICATIONS */}
      {activeTab === 'Notifications' && (
        <div className="SettingsGrid SettingsSingleCol">
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">🔔</div>
              <div>
                <h2 className="SettingsCardTitle">Notification Preferences</h2>
                <p className="SettingsCardSubtitle">Choose what updates and channels you want to be alerted on.</p>
              </div>
            </div>
            <div className="SettingsList">
              <div className="SettingsToggleItem">
                <div>
                  <div className="SettingsItemName">Trade Execution Alerts</div>
                  <div className="SettingsItemDesc">Get notified when a limit or stop order fills</div>
                </div>
                <div className={`SettingsSwitch ${toggles.tradeExecution ? 'active' : ''}`} onClick={() => handleToggle('tradeExecution')}>
                  <div className="SettingsSwitchHandle" />
                </div>
              </div>

              <div className="SettingsToggleItem">
                <div>
                  <div className="SettingsItemName">Price Alert Triggers</div>
                  <div className="SettingsItemDesc">Receive push notifications when high volatility spikes occur</div>
                </div>
                <div className={`SettingsSwitch ${toggles.priceAlerts ? 'active' : ''}`} onClick={() => handleToggle('priceAlerts')}>
                  <div className="SettingsSwitchHandle" />
                </div>
              </div>

              <div className="SettingsToggleItem">
                <div>
                  <div className="SettingsItemName">Margin Call Warnings</div>
                  <div className="SettingsItemDesc">Immediate alert when maintenance margin drops below 80%</div>
                </div>
                <div className={`SettingsSwitch ${toggles.marginCalls ? 'active' : ''}`} onClick={() => handleToggle('marginCalls')}>
                  <div className="SettingsSwitchHandle" />
                </div>
              </div>

              <div className="SettingsToggleItem">
                <div>
                  <div className="SettingsItemName">Weekly Performance Summary</div>
                  <div className="SettingsItemDesc">Get email digests of PnL and trade analytics</div>
                </div>
                <div className={`SettingsSwitch ${toggles.emailAlerts ? 'active' : ''}`} onClick={() => handleToggle('emailAlerts')}>
                  <div className="SettingsSwitchHandle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: API MANAGEMENT */}
      {activeTab === 'API Management' && (
        <div className="SettingsGrid SettingsSingleCol">
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">🔑</div>
              <div>
                <h2 className="SettingsCardTitle">Active API Keys</h2>
                <p className="SettingsCardSubtitle">Manage programmatic access tokens for bots and terminal plugins.</p>
              </div>
            </div>

            <div className="SettingsTableWrapper">
              <table className="SettingsTable">
                <thead>
                  <tr>
                    <th>Key Name</th>
                    <th>API Key</th>
                    <th>Created On</th>
                    <th>Permission</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {apiKeys.map((item) => (
                    <tr key={item.id}>
                      <td className="SettingsTableMain">{item.name}</td>
                      <td className="SettingsTableCode">{item.key}</td>
                      <td>{item.created}</td>
                      <td><span className="SettingsBadgeSuccess">{item.status}</span></td>
                      <td>
                        <button
                          className="SettingsTableActionBtn"
                          onClick={() => setApiKeys(apiKeys.filter((k) => k.id !== item.id))}
                        >
                          Revoke
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="SettingsCardActionRight">
              <button
                className="SettingsPrimaryBtn"
                onClick={() =>
                  setApiKeys([
                    ...apiKeys,
                    {
                      id: Date.now(),
                      name: 'New Custom Key',
                      key: `api_key_custom_${Math.floor(Math.random() * 90000)}xxxx`,
                      created: '2026-08-20',
                      status: 'Active'
                    }
                  ])
                }
              >
                + Generate New API Key
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: USERS */}
      {activeTab === 'Users' && (
        <div className="SettingsGrid SettingsSingleCol">
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">👥</div>
              <div>
                <h2 className="SettingsCardTitle">Team & User Management</h2>
                <p className="SettingsCardSubtitle">Control workspace permissions and add team members.</p>
              </div>
            </div>

            <div className="SettingsTableWrapper">
              <table className="SettingsTable">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Email</th>
                    <th>Assigned Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id}>
                      <td className="SettingsTableMain">{u.name}</td>
                      <td>{u.email}</td>
                      <td>{u.role}</td>
                      <td>
                        <span className={u.status === 'Active' ? 'SettingsBadgeSuccess' : 'SettingsStatusMuted'}>
                          {u.status}
                        </span>
                      </td>
                      <td>
                        <button className="SettingsTableActionBtn" onClick={() => alert(`Editing permissions for ${u.name}`)}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="SettingsCardActionRight">
              <button
                className="SettingsPrimaryBtn"
                onClick={() =>
                  setUsers([
                    ...users,
                    {
                      id: Date.now(),
                      name: 'New Trader',
                      email: 'new.trader@numericedge.com',
                      role: 'Trader',
                      status: 'Active'
                    }
                  ])
                }
              >
                + Invite User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: SYSTEM */}
      {activeTab === 'System' && (
        <div className="SettingsGrid">
          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">🖥️</div>
              <div>
                <h2 className="SettingsCardTitle">Server Health</h2>
                <p className="SettingsCardSubtitle">Infrastructure diagnostic overview.</p>
              </div>
            </div>
            <div className="SettingsList">
              <div className="SettingsListItem">
                <span className="SettingsItemName">Primary Gateway</span>
                <span className="SettingsStatusSuccess">Online (12ms)</span>
              </div>
              <div className="SettingsListItem">
                <span className="SettingsItemName">Redis Cache Hit Rate</span>
                <span className="SettingsStatusSuccess">98.4%</span>
              </div>
              <div className="SettingsListItem">
                <span className="SettingsItemName">Memory Utilization</span>
                <span className="SettingsStatusSuccess">41% of 64GB</span>
              </div>
            </div>
          </div>

          <div className="SettingsCard">
            <div className="SettingsCardHeader">
              <div className="SettingsCardIcon">📜</div>
              <div>
                <h2 className="SettingsCardTitle">Recent Audit Logs</h2>
                <p className="SettingsCardSubtitle">Latest system triggers & errors.</p>
              </div>
            </div>
            <div className="SettingsList">
              <div className="SettingsListItem">
                <span className="SettingsItemName">[INFO] Order Router Synchronized</span>
                <span className="SettingsStatusMuted">2m ago</span>
              </div>
              <div className="SettingsListItem">
                <span className="SettingsItemName">[AUTH] Token refresh for Alex Morgan</span>
                <span className="SettingsStatusMuted">14m ago</span>
              </div>
              <div className="SettingsListItem">
                <span className="SettingsItemName">[SUCCESS] Automated DB snapshot saved</span>
                <span className="SettingsStatusMuted">1h ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="SettingsFooter">
        © 2024 Numeric Edge. All rights reserved.
      </div>
    </div>
  );
};

export default Settings;