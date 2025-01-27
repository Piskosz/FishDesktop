import React from 'react';
import '../../Komercje.css';

const ParadiseCarpLake = () => {
  const regulations = [
    "Łowisko Paradise Carp Lake to stara żwirownia położona w województwie kujawsko-pomorskim, w miejscowości Wielki Głęboczek. Jest to idealne miejsce dla wędkarzy szukających ciszy, spokoju i pięknej przyrody.",
    "Na łowisku występują takie gatunki ryb jak karp, szczupak, leszcz, lin, sandacz, płoć, węgorz, okoń.",
    "Powierzchnia łowiska wynosi 4 ha, a do dyspozycji wędkarzy przygotowano dwa wygrodzone stanowiska, każde z maksymalnie 6 wędkami na stanowisku.",
    "Łowisko jest czynne całodobowo od 1 marca do 30 listopada. Rezerwacji należy dokonywać telefonicznie.",
    "Obowiązuje zasada 'no kill' (złów i wypuść). Wędkarze muszą przestrzegać innych zasad, jak używanie maty, podbieraka karpiowego, odkażacza, pontonu oraz akcesoriów do wyhaczania ryb.",
    "Dopuszczono niewielką ilość mniejszych ryb, w tym wyselekcjonowane „perełki” o niespotykanym wyglądzie, a także ghost karpie.",
    "Najczęściej poławiane karpie osiągają wagę powyżej 14 kg, a rekord łowiska to karp o wadze 27,4 kg.",
    "Woda ma głębokość maksymalną 4,8 m. W łowisku znajdują się powalone drzewa, górki, zatoczki, kamienie oraz miejsca z roślinnością, co sprawia, że łowienie tutaj jest wyzwaniem.",
    "Zakaz rozpalania ogniska oraz parkowanie aut tylko w wyznaczonych miejscach na stanowiskach.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Paradise Carp Lake</h1>

        <a
          href="https://www.facebook.com/profile.php?id=61561784605619"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Facebook Paradise Carp Lake
        </a>

        <p className="subtitle">Województwo: Kujawsko-Pomorskie</p>
        <p className="subtitle">Miejscowość: Wielki Głęboczek</p>

        <h2 className="subtitle">Regulamin łowiska:</h2>
        {regulations.map((rule, index) => (
          <div key={index} className="info-box">
            <p className="info-text">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParadiseCarpLake;
