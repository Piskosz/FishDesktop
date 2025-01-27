import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ComPod.css';

const ComPod = () => {
  const navigate = useNavigate();

  const regions = [
    { name: 'Łowisko Czarna Sędziszowska', screen: '/czarna-sedziszowska' },
    { name: 'Łowisko Stary San w Dynowie', screen: '/stary-san-dynow' },
    { name: 'Łowisko Bobrowa Dolina', screen: '/bobrowa-dolina' },
    { name: 'Łowisko Rybackie Krzemienna', screen: '/krzemienna' },
    { name: 'Łowisko Rzemień', screen: '/rzemien' },
    { name: 'Łowisko Łopuszka Wielka', screen: '/lopuszka-wielka' },
    { name: 'Łowisko Sieniawa', screen: '/sieniawa' },
    { name: 'Łowisko Przeworsk', screen: '/przeworsk' },
  ];

  return (
    <div className="maps-commercial">
      <div className="maps-commercial-header-container">
        <h1 className="maps-commercial-header">Najlepsze Łowiska Komercyjne na Podkarpaciu</h1>
      </div>

      <div className="maps-commercial-grid">
        {regions.map((region) => (
          <div
            key={region.screen}
            className="maps-commercial-card"
            onClick={() => navigate(region.screen)}
          >
            <h2 className="maps-commercial-card-title">{region.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComPod;
