import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Wojewodztwo.css';

const Lodzkie = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { name: 'Łowisko Strong Carp Lake', screen: '/strongcarplake' },
    { name: 'Łowisko Karper Lake', screen: '/karperlake' },
    { name: 'Łowisko Mlynek Tuszyn', screen: '/mlynektuszyn' },
    { name: 'Łowisko Makary', screen: '/makary' },
  ];

  return (
    <div className="background">
      <div className="container">
        <div className="header-container">
          <h1 className="header-text">Najlepsze Łowiska Komercyjne w Łódzkim</h1>
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

export default Lodzkie;
