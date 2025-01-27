import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Wojewodztwo.css';

const Malopolskie = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { name: 'Łowisko Fish Zone', path: '/fishzone' },
    { name: 'Łowisko Karp Maslomica', path: '/karpmaslomica' },
    { name: 'Eko Lake Wojcina', path: '/EkoLakeWojcina' },
    { name: 'Łowisko Borowa', path: '/borowa' },
  ];

  return (
    <div className="background">
      <div className="container">
        <div className="headerContainer">
          <h1 className="headerText">Najlepsze Łowiska Komercyjne w Malopolskim</h1>
        </div>

        <div className="buttonList">
          {regions.map((region, index) => (
            <Link
              key={index}
              to={region.path}
              className="button"
            >
              {region.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Malopolskie;
