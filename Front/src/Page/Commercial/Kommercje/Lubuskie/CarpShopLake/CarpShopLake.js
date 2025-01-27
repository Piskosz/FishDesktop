import React from 'react';
import '../../Komercje.css';

const CarpShopLakes = () => {
  const regulations = [
    "Łowisko CarpShop Lakes czynne przez cały rok.",
    "Łowisko składa się z dwóch zbiorników: większy (1,5 ha) i mniejszy (0,7 ha).",
    "Obowiązuje metoda karpiowa na większym zbiorniku, a na mniejszym można łowić na method feeder lub spławik.",
    "Łowisko oferuje 4 stanowiska na większym zbiorniku i 1 stanowisko na mniejszym.",
    "Woda otoczona jest drzewami, co daje cień nawet w upalne dni.",
    "Na wodzie znajdują się dwa półwyspy, sześć wysp i trzy zatoki.",
    "Na większym zbiorniku dostępne są dwa klimatyzowane domki (4-osobowy i 6-osobowy).",
    "Na mniejszym zbiorniku znajduje się camping z przyczepą, z dostępem do prądu.",
    "Wynajem sprzętu wędkarskiego w cenie: kołyska, podbierak, łódka, ponton, stojak do ważenia.",
    "Możliwość podglądania fauny za pomocą kamer podwodnych.",
    "Należy rezerwować pobyt, wynajem całego łowiska również możliwy.",
    "Nie jest wymagana karta wędkarska.",
    "Możliwość łowienia w nocy.",
    "Możliwość rozbicia namiotu oraz przyjazdu z przyczepą campingową.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko CarpShop Lakes</h1>
        <a
          href="https://www.facebook.com/PatlewiczFishFarm"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Facebook Łowisko CarpShop Lakes
        </a>

        <h2 className="subtitle">Województwo: Lubuskie</h2>
        <h2 className="subtitle">Miejscowość: Nowa Sól</h2>

        <h2 className="subtitle">Regulamin łowiska:</h2>
        <ul className="regulationsList">
          {regulations.map((rule, index) => (
            <li key={index} className="infoBox">
              {rule}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default CarpShopLakes;