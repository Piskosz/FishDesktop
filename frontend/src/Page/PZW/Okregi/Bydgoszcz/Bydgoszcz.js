import React from 'react';
import '../Okreg.css';

const Bydgoszcz = () => {
  const waters = [
    { name: 'Balaton', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Bydgoszcz', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Będgoskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Więcbork', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Białe', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Tuchola', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Bieleniec', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Tuchola', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Bielskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Jeżewo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Błądziewno', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Warlubie', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Błądzim', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Lniano', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Borówno', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Dobrcz', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Branica', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Kamień Krajeński', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Buszkowo', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Koronowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Chłodne', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Cekcyn', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Gacanek', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Tuchola', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Gardzinowo', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Tuchola', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Gąsiorek Duży', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Sierosławek', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Chmielniki', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Więcbork', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Czarmuńskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Więcbork', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Czarne Diabelskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Kamień Krajeński', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Czarownic', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Świecie', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Deczno', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Nowa Wieś Wlk.', fishingRestrictions: 'N/A', dateRestrictions: '' },
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Okręg Bydgoszcz</h1>
        <a href="http://opzw.bydgoszcz.pl/" className="linkButton">
          Strona główna Okręgu Bydgoszcz
        </a>
        {waters.map((water, index) => (
          <div key={index} className="infoBox">
            <p className="infoText"><strong>Nazwa: </strong>{water.name}</p>
            <p className="infoText"><strong>Opis: </strong>{water.description}</p>
            <p className="infoText"><strong>Typ: </strong>{water.type}</p>
            <p className="infoText"><strong>Wędkowanie z łodzi: </strong>{water.fishingBoat}</p>
            <p className="infoText"><strong>Gmina: </strong>{water.district}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bydgoszcz;
