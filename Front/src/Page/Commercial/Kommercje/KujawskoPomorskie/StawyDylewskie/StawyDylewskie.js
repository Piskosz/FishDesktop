import React from 'react';
import '../../Komercje.css';

const StawyDylewskie = () => {
  const regulations = [
    "Łowisko podzielone jest na cztery stawy. Pierwszy z najmniejszymi karpiami i amurami, kolejny z większymi, trzeci z okazami powyżej 4-5 kg. Ostatni staw jest przeznaczony dla drapieżników.",
    "Na stawie nr 3 - wymagana jest rezerwacja stanowisk i znajduje się ich 13. Jest to typowy staw karpiowy. Obowiązuje na nim zasada 'no kill' (złów i wypuść).",
    "Na tym stawie wymagane jest od wędkarza posiadanie oraz używanie: maty karpiowej, podbieraka karpiowego, odkażacza, żyłki o średnicy 0,28 mm.",
    "W przypadku braku posiadania maty czy podbieraka, łowisko udostępnia możliwość wypożyczenia tego sprzętu.",
    "Na łowisku można korzystać z prądu.",
    "Akwen czynny 24h/dobę.",
    "Głębokość łowiska oscyluje w granicach 0,5 m-2 m.",
    "Karpie i amury powyżej 3,6 kg i poniżej 1 kg nie są na sprzedaż i muszą wrócić ponownie do wody. Inne gatunki i mniejsze sztuki można zakupić po cenach z cennika. Okoń, płoć i leszcz bez opłaty.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Stawy Dylewskie</h1>
        <a
          href="https://www.facebook.com/Stawy-Dylewskie-wwwstawydylewskiepl-295674600558960/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Facebook Stawy Dylewskie
        </a>

        <p className="subtitle">Wojewodztwo: Kujawsko-Pomorskie</p>
        <p className="subtitle">Miejscowosc: Dylewo</p>

        <h2 className="subtitle">Regulamin lowiska:</h2>
        {regulations.map((rule, index) => (
          <div key={index} className="infoBox">
            <p className="infoText">{rule}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default StawyDylewskie;
