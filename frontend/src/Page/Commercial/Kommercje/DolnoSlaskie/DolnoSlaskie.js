import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Wojewodztwo.css';

const DolnoSlaskie = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const navigate = useNavigate();

  const regions = [
    { name: 'Łowisko Castle Lakes', screen: '/CastleLake' },
    { name: 'Łowisko Pod Silosami', screen: '/PodSilosami' },
    { name: 'Łowisko Rekreacyjne Przemkow', screen: '/RekreacyjnePrzemkow' },
    { name: 'Łowisko Bobrowa Przystan', screen: '/BobrowaPrzystan' },
  ];

  return (
    <div className="background">
      <div className="container">
        <div className="headerContainer">
          <h1 className="headerText">Najlepsze Łowiska Komercyjne na Dolnym Śląsku</h1>
        </div>

        <div className="buttonList">
          {regions.map((region, index) => (
            <button
              key={index}
              className="button"
              onClick={() => navigate(region.screen)}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DolnoSlaskie;
