import React from 'react';
import './Globallyawarded.css';

// Import award logo images from your local assets folder
import AwardLogo1 from '../../assets/award-1.png';
import AwardLogo2 from '../../assets/award-2.png';
import AwardLogo3 from '../../assets/award-3.png';
import AwardLogo4 from '../../assets/award-4.png';
import AwardLogo5 from '../../assets/award-5.png';

const awardsData = [
  {
    id: '01',
    title: 'The Best Trading Platform, UK',
    count: 'x1',
    logo: AwardLogo1,
    year: '2023',
  },
  {
    id: '02',
    title: 'Awards Interior Excellence',
    count: 'x3',
    logo: AwardLogo2,
    year: '2017',
  },
  {
    id: '03',
    title: 'The Best Trading Platform, UK',
    count: 'x4',
    logo: AwardLogo3,
    year: '2022',
  },
  {
    id: '04',
    title: 'Advance HighTechnology Trade',
    count: 'x3',
    logo: AwardLogo4,
    year: '2014',
  },
  {
    id: '05',
    title: 'The Best Trading Platform, London',
    count: 'x4',
    logo: AwardLogo5,
    year: '2018',
  },
];

const Globallyawarded = () => {
  return (
    <section className="globally-awarded-section">
      <div className="globally-awarded-container">
        {/* Header Badge & Title */}
        <div className="awarded-header">
          <span className="badge-pill">AWARDED BY THE BEST</span>
          <h1 className="main-title">Globally Awarded</h1>
        </div>

        {/* Awards Table / List */}
        <div className="awards-list">
          {awardsData.map((item) => (
            <div key={item.id} className="award-row">
              <span className="award-id">{item.id}</span>
              <h3 className="award-title">{item.title}</h3>
              <span className="award-count">{item.count}</span>
              <div className="award-logo-wrapper">
                <img src={item.logo} alt={item.title} className="award-logo" />
              </div>
              <span className="award-year">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Globallyawarded;