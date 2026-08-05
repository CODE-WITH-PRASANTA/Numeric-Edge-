import React from 'react';
import './Brand.css';

const brandsList = [
  { name: 'HITACHI', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Hitachi_logo.svg' },
  { name: 'HUAWEI', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Huawei_Logo.svg' },
  { name: 'NOKIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg' },
  { name: 'verizon', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Verizon_2015_logo.svg' },
  { name: 'BÖHLER', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Bohler_Logo.svg' },
  { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
  { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' }
];

const Brand = () => {
  return (
    <div className="brand-section">
      <div className="brand-marquee-container">
        {/* Infinite Back to Back Loop के लिए ट्रैक */}
        <div className="brand-track">
          {[...brandsList, ...brandsList].map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;