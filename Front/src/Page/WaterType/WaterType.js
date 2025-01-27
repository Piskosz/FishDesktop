import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaterType.css';

const WaterType = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="background">
      <div className="container">
        <div className="headerContainer">
          <h1 className="headerText">WYBIERZ RODZAJ WODY</h1>
        </div>
        <div className="buttonContainer">
          <button 
            className="button" 
            onClick={() => navigate('/MapsCommercial')}
          >
            Łowisko Komercyjne
          </button>
          <button 
            className="button" 
            onClick={() => navigate('/MapsPZW')}
          >
            Woda PZW
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterType;
