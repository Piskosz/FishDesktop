import React from 'react';
import './MapsPZW.css'; // Plik CSS dla stylów

const MapsPZW = ({ navigate }) => {
  const regions = [
    { name: 'Dolnośląskie', screen: 'DolnośląskiePZW' },
    { name: 'Kujawsko-Pomorskie', screen: 'Kujawsko-PomorskiePZW' },
    { name: 'Lubelskie', screen: 'LubelskiePZW' },
    { name: 'Lubuskie', screen: 'LubuskiePZW' },
    { name: 'Łódzkie', screen: 'ŁódzkiePZW' },
    { name: 'Małopolskie', screen: 'MałopolskiePZW' },
    { name: 'Mazowieckie', screen: 'MazowieckiePZW' },
    { name: 'Opolskie', screen: 'OpolskiePZW' },
    { name: 'Podkarpackie', screen: 'PodkarpackiePZW' },
    { name: 'Podlaskie', screen: 'PodlaskiePZW' },
    { name: 'Pomorskie', screen: 'PomorskiePZW' },
    { name: 'Śląskie', screen: 'ŚląskiePZW' },
    { name: 'Świętokrzyskie', screen: 'ŚwiętokrzyskiePZW' },
    { name: 'Warmińsko-Mazurskie', screen: 'Warmińsko-MazurskiePZW' },
    { name: 'Wielkopolskie', screen: 'WielkopolskiePZW' },
    { name: 'Zachodniopomorskie', screen: 'ZachodniopomorskiePZW' },
  ];

  return (
    <div className="maps-pzw">
      <div className="maps-pzw-header-container">
        <h1 className="maps-pzw-header">Wybierz Województwo</h1>
        <p className="maps-pzw-subheader">(Łowiska PZW)</p>
      </div>
      <div className="maps-pzw-grid">
        {regions.map((region) => (
          <div
            key={region.screen}
            className="maps-pzw-card"
            onClick={() => navigate(region.screen)}
          >
            <h2 className="maps-pzw-card-title">{region.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapsPZW;
