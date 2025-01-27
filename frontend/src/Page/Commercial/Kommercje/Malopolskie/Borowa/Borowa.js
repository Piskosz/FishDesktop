import React from 'react';
import '../../Komercje.css';

const Borowa = () => {
  const regulations = [
    "Łowisko Borowa czynne przez cały rok.",
    "Łowisko znajduje się w miejscowości Borzęcin, województwo Małopolskie.",
    "Występujące gatunki ryb: Karp, Amur, Lin, Sumik.",
    "Powierzchnia łowiska: 5,5 ha.",
    "Łowisko położone jest w otoczeniu lasu dębowo-sosnowego.",
    "Na łowisku wyznaczono 9 stanowisk dwuosobowych.",
    "Jedno z stanowisk jest VIP, z domkiem dla czterech osób i własnym tarasem.",
    "Na stanowiskach znajdują się miejsca parkingowe.",
    "Obowiązuje zasada 'no kill' (złów i wypuść).",
    "Na łowisku dostępne są przenośne toalety oraz prysznic.",
    "Wędkarze muszą używać haków zadziorowych w rozmiarach od 1 do 6.",
    "Zakaz stosowania orzecha tygrysiego oraz surowego ziarna.",
    "Dozwolona metoda połowu: gruntowa. Dzieci mogą używać metody spławikowej.",
    "Okazy karpi dochodzą do 20 kg.",
    "Na łowisku dostępne są środki pływające: łódka zdalnie sterowana, ponton, łódź wędkarska.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Borowa</h1>
        <a
          href="https://znajdzlowisko.pl/lowisko-borowa"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Strona internetowa Łowisko Borowa
        </a>

        <h2 className="subtitle">Województwo: Małopolskie</h2>
        <h2 className="subtitle">Miejscowość: Borzęcin</h2>

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

export default Borowa;
