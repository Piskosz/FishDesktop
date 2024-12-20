import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WaterType.css';

const WaterType = () => {
  const navigate = useNavigate(); // Hook do nawigacji

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
