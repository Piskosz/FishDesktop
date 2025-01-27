import React from 'react';
import '../Okreg.css';

const Ciechanow = () => {
  const rivers = [
    { name: 'Wkra', description: 'Obwód rybacki obejmuje wody rzeki Wkra (Nida) od źródeł do jej ujścia do rzeki Narew, wraz z dopływami: Pierławka, Swojęcianka, Luta, Topielica, Struga, Rosica, Turka, Naruszewka, Nasielna.' },
    { name: 'Płonka', description: 'Obwód rybacki obejmuje wody rzeki Płonka od źródeł do ujścia do rzeki Wkra, wraz z dopływami: Dzierzążnica, Żurawianka.' },
    { name: 'Sona', description: 'Obwód rybacki obejmuje wody rzeki Sona od źródeł do ujścia do rzeki Wkra, wraz z dopływami: Kolnica, Tatarka oraz zbiornikiem Nowomiejskim.' },
    { name: 'Łydynia', description: 'Obwód rybacki obejmuje wody rzeki Łydynia od źródeł do jej ujścia do rzeki Wkra, wraz z dopływami: Giedniówka, Dunajczyk, Pławnica, Stawnica.' },
    { name: 'Raciążnica', description: 'Obwód rybacki obejmuje wody rzeki Raciążnica od źródeł do jej ujścia do rzeki Wkra, wraz z dopływami: Zadębie, Karsówka, Rokitnica, Dobrzyca.' },
    { name: 'Mławka', description: 'Obwód rybacki obejmuje wody rzeki Mławka od źródeł do jej ujścia do rzeki Wkra, z dopływami: Dwukolanaka, Krupionka, Seracz, Sewerynka, Przylepnica.' },
    { name: 'Wel', description: 'Obwód rybacki obejmuje wody rzeki Wel z wodami jej dopływów, od 50-ciu metrów poniżej wypływu z jeziora Pancer (Pancerz, Durąskie) do jeziora Rumian.' },
    { name: 'Zarybinek', description: 'Obwód rybacki obejmuje wody jeziora Zarybinek, jeziora Rybno, z wodami ich dopływów i wody łączącego je cieku, 50-cio metrowy odcinek rzeki Wel poniżej wypływu z jeziora Zarybinek.' },
    { name: 'Tarczyńskie', description: 'Obwód rybacki obejmuje wody jeziora Zakrocz, jeziora Gronowskie, jeziora Tarczyńskie, jeziora Grądy.' },
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Obwody Rybackie Ciechanów</h1>
        <a
          href="http://www.pzw.ciechanow.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Strona główna PZW Ciechanów
        </a>
        {rivers.map((river, index) => (
          <div key={index} className="infoBox">
            <p className="infoText">
              <span className="bold">Nazwa: </span>{river.name}
            </p>
            <p className="infoText">
              <span className="bold">Opis: </span>{river.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ciechanow;
