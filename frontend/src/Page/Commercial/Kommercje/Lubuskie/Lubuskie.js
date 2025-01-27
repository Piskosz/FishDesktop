import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Wojewodztwo.css';

const LubuskieCom = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { name: 'Łowisko Dabie', screen: 'dabie' },
    { name: 'Łowisko Carp Shop Lakes', screen: 'CarpShopLake' },
    { name: 'Łowisko Natan Lake', screen: 'NatanLake' },
    { name: 'Łowisko Zacisze', screen: 'ZaciszeLake' },
  ];

  return (
    <div className="background">
      <div className="container">
        <div className="header-container">
          <h1 className="header-text">Najlepsze Łowiska Komercyjne w Lubuskim</h1>
        </div>
        <div className="button-list">
          {regions.map((region, index) => (
            <button
              key={index}
              className="button"
              onClick={() => navigate(`/${region.screen}`)}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LubuskieCom;
