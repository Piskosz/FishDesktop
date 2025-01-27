import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MapsPZW.css';


const MapsPZW = () => {
  const navigate = useNavigate();

  const regions = [
    { name: 'BialaPodlaska', screen: 'BialaPodlaska' },
    { name: 'Bialystok', screen: 'Bialystok' },
    { name: 'Bydgoszcz', screen: 'Bydgoszcz' },
    { name: 'Chelm', screen: 'Chelm' },
    { name: 'Ciechanow', screen: 'Ciechanow' },
    { name: 'Czestochowa', screen: 'Czestochowa' },
    { name: 'Elblag', screen: 'Elblag' },
    { name: 'Gdansk', screen: 'Gdansk' },

  ];

  return (
    <div className="maps-pzw">
      <div className="maps-pzw-header-container">
        <h1 className="maps-pzw-header">Wybierz Okręg</h1>
        <p className="maps-pzw-subheader">(Łowiska PZW)</p>
      </div>
      <div className="maps-pzw-grid">
        {regions.map((region) => (
          <div
            key={region.screen}
            className="maps-pzw-card"
            onClick={() => navigate(`/${region.screen}`)}
          >
            <h2 className="maps-pzw-card-title">{region.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapsPZW;