import React from 'react';
import '../../Komercje.css';

const ZaciszeLake = () => {
  const regulations = [
    "Łowisko „Zacisze Lgiń” czynne od 01.07.2023.",
    "Łowisko znajduje się w miejscowości Lgiń, województwo Lubuskie.",
    "Występujące gatunki ryb: Karp, Amur, Szczupak, Płoć.",
    "Powierzchnia łowiska: 2 ha.",
    "Łowisko czynne od poniedziałku do piątku w godzinach 7:00 - 19:00, a w weekendy oraz święta całą dobę.",
    "Na łowisku obowiązuje zasada „no kill” (złów i wypuść) dla wszystkich gatunków ryb.",
    "Na łowisku dostępnych jest 30 stanowisk wędkarskich.",
    "Wędkarze muszą posiadać: podbierak o rozstawie ramion ~ 1 metr, kołyskę karpiową, odkażacz, worek karpiowy typu sling, żyłkę o średnicy min. 0,30 mm.",
    "Możliwość wywózki modelami RC.",
    "Palenie ogniska tylko w miejscach do tego wyznaczonych.",
    "Teren jest monitorowany i ogrodzony.",
    "Rekord łowiska: 17,80 kg.",
    "Możliwość podłączenia do prądu (dodatkowo płatne).",
    "Możliwość wynajęcia całości wody pod zawody lub inne imprezy wędkarskie.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko „Zacisze Lgiń”</h1>
        <a
          href="https://lowiskozacisze.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Strona internetowa Łowisko Zacisze Lgiń
        </a>

        <h2 className="subtitle">Województwo: Lubuskie</h2>
        <h2 className="subtitle">Miejscowość: Lgiń</h2>

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

export default ZaciszeLake;
