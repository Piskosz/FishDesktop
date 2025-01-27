import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MapsComercial.css';

const MapsCommercial = () => {
  const navigate = useNavigate(); 

  const regions = [
    { name: 'Dolnośląskie', screen: 'DolnoSlaskie' },
    { name: 'Kujawsko-Pomorskie', screen: 'KujawskoPomorskie' },
    { name: 'Lodzkie', screen: 'Lodzkie' },
    { name: 'Lubelskie', screen: 'Lubelskie' },
    { name: 'Lubuskie', screen: 'Lubuskie' },
    { name: 'Malopolskie', screen: 'Malopolskie' },


  ];

  return (
    <div className="maps-commercial">
      <div className="maps-commercial-header-container">
        <h1 className="maps-commercial-header">Wybierz Województwo</h1>
        <p className="maps-commercial-subheader">(Łowiska Komercyjne)</p>
      </div>
      <div className="maps-commercial-grid">
        {regions.map((region) => (
          <div
            key={region.screen}
            className="maps-commercial-card"
            onClick={() => navigate(`/${region.screen}`)}
          >
            <h2 className="maps-commercial-card-title">{region.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapsCommercial;
