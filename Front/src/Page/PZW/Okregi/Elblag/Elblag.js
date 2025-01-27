import React from 'react';
import '../Okreg.css';

const Elblag = () => {
  const waters = [
    { name: 'Jezioro Balewo (Baleweckie)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Barlewickie', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Białe', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Burgale (Bronowskie)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Dąbrówka Malborska', type: 'Jezioro', fishingBoat: 'tak', district: 'Malbork' },
    { name: 'Jezioro Drużno', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Głębock', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Jerzewo (Brachlewo)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Kaniewo (Koniecwałd)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Kiersyty', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Miejskie w Kisielicach', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Kościeleczki', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Krzykosy', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Kucki – Klecewskie (Jaromierz, Klecewo)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Kuksy', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Licze', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Łukszyty', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Martwe (Jelenia Dolina)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Mareza', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Merynos', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Orneckie (Mieczowe)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Parlety', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Pasłęk', type: 'Jezioro', fishingBoat: 'tak', district: 'Pasłęk' },
    { name: 'Jezioro Pastwa', type: 'Jezioro', fishingBoat: 'tak', district: 'Pasłęk' },
    { name: 'Jezioro Piękne (Bakutil)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Pierzchały', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Plińskie', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Podgórz', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Podzamcze', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Rakowe', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Rakowiec', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Sowica (Mętne)', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Stare', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Sztumskie (Zajezierskie)', type: 'Jezioro', fishingBoat: 'tak', district: 'Sztum' },
    { name: 'Jezioro Szyleny', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Tywęzy', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Jezioro Wandowo', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Kanał Brajtery', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Kanał Cieplicówka', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Kanał Elbląski (od pochylni Całuny do wału czołowego j. Drużno)', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Kanał Jagielłoński', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg' },
    { name: 'Kanał Linawa', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg' },
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Okręg Elbląg</h1>
        <a href="http://www.pzwelblag.pl" target="_blank" rel="noopener noreferrer" className="linkButton">
          Strona główna Okręgu Elbląg
        </a>
        {waters.map((water, index) => (
          <div key={index} className="infoBox">
            <p className="infoText"><strong>Nazwa: </strong>{water.name}</p>
            <p className="infoText"><strong>Typ: </strong>{water.type}</p>
            <p className="infoText"><strong>Wędkowanie z łodzi: </strong>{water.fishingBoat}</p>
            <p className="infoText"><strong>Gmina: </strong>{water.district}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elblag;
