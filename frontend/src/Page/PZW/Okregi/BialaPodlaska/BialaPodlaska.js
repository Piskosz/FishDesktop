import React from 'react';
import '../Okreg.css';

const BialaPodlaska = () => {
  const waters = [
    { name: 'Zbiornik Mosty', district: 'parczewski', area: '403,5 ha' },
    { name: 'Zbiornik Podedwórze', district: 'parczewski', area: '289,9 ha' },
    { name: 'Zbiornik Żelizna', district: 'radzyński', area: '364,8 ha' },
    { name: 'Zbiornik Horodyszcze', district: 'bialski', area: '9,0 ha' },
    { name: 'Zb. Terespol „Aleja Marzeń"', district: 'bialski', area: '1,0 ha' },
    { name: 'Zb. Terespol „Między Torami”', district: 'bialski', area: '1,0 ha' },
    { name: 'Zb. Parczew „Relaks”', district: 'parczewski', area: '4,6 ha' },
    { name: 'Zbiornik Jabłoń', district: 'parczewski', area: '3,9 ha' },
    { name: 'Radzyń Podl. - Cegielnia', district: 'radzyński', area: '2,9 ha' },
    { name: 'Radzyń Podl. - Stawy', district: 'radzyński', area: '1,8 ha' },
    { name: 'Starorzecze - Hołyna 1-2', district: 'włodawski', area: '9,0 ha' },
    { name: 'Starorzecze – Kuzawka', district: 'bialski', area: '2,2 ha' },
    { name: 'Starorzecze - Sołodownia', district: 'bialski', area: '0,5 ha' },
    { name: 'Starorzecze Łęgi - Krzyczew', district: 'bialski', area: '6,6 ha' },
    { name: 'Starorzecze Liszna-Nowosiółki', district: 'bialski', area: '1,2 ha' },
    { name: 'Zbiornik Wyczółki', district: 'bialski', area: '5,0 ha' },
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Wody Pozaobwodowe - Biała Podlaska</h1>
        <a
          href="https://bialapodlaska.pzw.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Strona główna Okręgu Biała Podlaska
        </a>
        {waters.map((water, index) => (
          <div key={index} className="infoBox">
            <p className="infoText">
              <span className="bold">Nazwa: </span>
              {water.name}
            </p>
            <p className="infoText">
              <span className="bold">Powiat: </span>
              {water.district}
            </p>
            <p className="infoText">
              <span className="bold">Powierzchnia: </span>
              {water.area}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BialaPodlaska;
