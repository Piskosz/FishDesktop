import React from 'react';
import '../../Komercje.css';

const CastleLakes = () => {
  const regulations = [
    "Łowisko Castle Lakes to zbiornik wędkarstwa no kill położony w województwie dolnośląskim, w miejscowości Miłkowice. Jest to idealne miejsce dla wędkarzy poszukujących spokojnej okolicy i świetnych warunków do połowu.",
    "Na łowisku występują takie gatunki ryb jak karp, lin, amur, szczupak, okoń.",
    "Powierzchnia łowiska wynosi 11 ha, a do dyspozycji wędkarzy są stanowiska karpiowe oraz możliwość łowienia spinningowego.",
    "Na terenie łowiska znajduje się także możliwość wynajęcia apartamentów w zamku. Pokoje oferują pełny komfort z telewizorem, zmywarką i innymi udogodnieniami. Planowany jest także plac zabaw dla dzieci.",
    "Łowisko będzie otwarte w 2025 roku dla szerszego grona wędkarzy, a obecnie jest testowane przez zaprzyjaźnionych wędkarzy.",
    "Połów karpiowy na Castle Lakes dozwolony jest przy użyciu dwóch wędek przez jednego karpiarza, z obowiązkowym użyciem żyłki min. 0,35 mm i haków bezzadziorowych.",
    "Na łowisku obowiązuje zasada 'no kill' (złów i wypuść). Wędkarze muszą również przestrzegać innych zasad, jak używanie maty z bokami, podbieraka karpiowego, odkażacza i zakaz stosowania niektórych markerów oraz sprzętu.",
  ];

  const openMap = () => {
    window.open('https://www.google.com/maps?q=51.2314,16.2483', '_blank');
  };

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Castle Lakes</h1>
        <a
          href="https://www.facebook.com/profile.php?id=100083498164869"
          className="linkButton"
        >
          Facebook Castle Lakes
        </a>

        <h2 className="subtitle">Województwo: Dolnośląskie</h2>
        <h2 className="subtitle">Miejscowość: Miłkowice</h2>

        <h2 className="subtitle">Regulamin łowiska:</h2>
        {regulations.map((rule, index) => (
          <div key={index} className="infoBox">
            <p className="infoText">{rule}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default CastleLakes;
