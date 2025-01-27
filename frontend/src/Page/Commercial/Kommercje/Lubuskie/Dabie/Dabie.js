import React from 'react';
import '../../Komercje.css';

const Dabie = () => {
  const regulations = [
    "Łowisko Dąbie (Admar) czynne od 1.04 do połowy października (codziennie).",
    "Akwen w otoczeniu lasów oraz pól, na wodzie wyspy.",
    "Na łowisku dostępne pomosty dla wędkarzy.",
    "Możliwość zakupu ryb lub wypuszczenia ich ponownie do wody.",
    "Występujące gatunki ryb: Karp, Amur, Sum, Szczupak, Sandacz, Kleń, Leszcz, Płoć, Okoń, Węgorz, Lin.",
    "Na łowisku można wypożyczyć sprzęt wędkarski.",
    "Dla dzieci dostępne atrakcje: plac zabaw, kąpielisko, boisko, trampolina.",
    "Na terenie znajdują się miejsca na ognisko i możliwość rozpalenia grilla.",
    "Łowisko oferuje wynajem domków oraz smażalnię.",
    "Na łowisku realizowany jest Bon turystyczny.",
    "Nie jest wymagana karta wędkarska.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Dąbie (Admar)</h1>
        <a
          href="https://www.facebook.com/%C5%81owisko-rodzinne-Admar-305826872835993/"
          className="linkButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Łowisko Dąbie
        </a>

        <h2 className="subtitle">Województwo: Lubelskie</h2>
        <h2 className="subtitle">Miejscowość: Admar</h2>

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

export default Dabie;