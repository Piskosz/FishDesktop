import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Wojewodztwo.css';

const Lubelskie = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { name: 'Łowisko Bobrowisko', screen: '/bobrowisko' },
    { name: 'Łowisko Jezow', screen: '/jezow' },
    { name: 'Łowisko Moszczanka', screen: '/moszczanka' },
    { name: 'Łowisko Krzesimow', screen: '/krzesimow' },
  ];

  return (
    <div className="background">
      <div className="container">
        <div className="header-container">
          <h1 className="header-text">Najlepsze Łowiska Komercyjne w Lubelskim</h1>
        </div>

        <div className="button-list">
          {regions.map((region, index) => (
            <Link to={region.screen} key={index} className="button">
              <span className="button-text">{region.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lubelskie;
