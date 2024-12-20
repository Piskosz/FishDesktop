import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importuj useNavigate
import './MapsComercial.css';

const MapsCommercial = () => {
  const navigate = useNavigate();  // Inicjalizacja useNavigate

  const regions = [
    { name: 'Dolnośląskie', screen: 'DolnośląskieCom' },
    { name: 'Kujawsko-Pomorskie', screen: 'Kujawsko-PomorskieCom' },
    { name: 'Lubelskie', screen: 'LubelskieCom' },
    { name: 'Lubuskie', screen: 'LubuskieCom' },
    { name: 'Łódzkie', screen: 'ŁódzkieCom' },
    { name: 'Małopolskie', screen: 'MałopolskieCom' },
    { name: 'Mazowieckie', screen: 'MazowieckieCom' },
    { name: 'Opolskie', screen: 'OpolskieCom' },
    { name: 'Podkarpackie', screen: 'ComPod' },
    { name: 'Podlaskie', screen: 'PodlaskieCom' },
    { name: 'Pomorskie', screen: 'PomorskieCom' },
    { name: 'Śląskie', screen: 'ŚląskieCom' },
    { name: 'Świętokrzyskie', screen: 'ŚwiętokrzyskieCom' },
    { name: 'Warmińsko-Mazurskie', screen: 'Warmińsko-MazurskieCom' },
    { name: 'Wielkopolskie', screen: 'WielkopolskieCom' },
    { name: 'Zachodniopomorskie', screen: 'ZachodniopomorskieCom' },
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
            onClick={() => navigate(`/${region.screen}`)}  // Użyj navigate do przekierowania
          >
            <h2 className="maps-commercial-card-title">{region.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapsCommercial;
