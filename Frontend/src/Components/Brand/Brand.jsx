import React from "react";
import "./Brand.css";

const brandsList = [
  {
    name: "HITACHI",
    logo: "https://cdn.simpleicons.org/hitachi",
  },
  {
    name: "HUAWEI",
    logo: "https://cdn.simpleicons.org/huawei",
  },
  {
    name: "NOKIA",
    logo: "https://cdn.simpleicons.org/nokia",
  },
  {
    name: "VERIZON",
    logo: "https://cdn.simpleicons.org/verizon",
  },
  {
    name: "BÖHLER",
    logo: "https://cdn.simpleicons.org/bohler",
  },
  {
    name: "LENOVO",
    logo: "https://cdn.simpleicons.org/lenovo",
  },
  {
    name: "NVIDIA",
    logo: "https://cdn.simpleicons.org/nvidia",
  },
];

const Brand = () => {
  // Duplicate the brands to create a seamless infinite marquee
  const marqueeBrands = [...brandsList, ...brandsList];

  return (
    <section className="brand-section">
      <div className="brand-marquee-container">
        <div className="brand-track">
          {marqueeBrands.map((brand, index) => (
            <div
              className="brand-item"
              key={`${brand.name}-${index}`}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="brand-logo"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Brand name appears if image doesn't load */}
              <span className="brand-name">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;