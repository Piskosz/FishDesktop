import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Wojewodztwo.css';

const KujawskoPomorskie = () => {
  const navigate = useNavigate();

  const regions = [
    { name: 'Łowisko Niewiescin', screen: '/Niewiescin' },
    { name: 'Łowisko Paradise Carp Lake', screen: '/ParadiseCarpLake' },
    { name: 'Łowisko StawyDylewskie', screen: '/StawyDylewskie' },
  ];

  return (
    <div className="background">
      <div className="container">
        <div className="header-container">
          <h1 className="header-text">Najlepsze Łowiska Komercyjne w Kujawsko Pomorskim</h1>
        </div>

        <div className="button-list">
          {regions.map((region, index) => (
            <button
              key={index}
              className="button"
              onClick={() => navigate(region.screen)}
            >
              <span className="button-text">{region.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KujawskoPomorskie;
