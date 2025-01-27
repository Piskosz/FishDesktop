import React from 'react';
import '../../Komercje.css';

const MlynekTuszyn = () => {
  const regulations = [
    "Lowisko Mlynek Tuszyn polozone jest w poblizu takich miejscowosci jak Lodz, Rzgow, Gluchow.",
    "Akwen otoczony jest lasem, a na wodzie znajduje sie wyspa.",
    "Glebokosc lowiska oscyluje miedzy 1,5 a 2,5 m. Dno jest mulowate.",
    "Na lowisku obowiazuje bezwzgledna zasada 'no kill' (zlow i wypusc) dla wszystkich gatunkow ryb.",
    "Dozwolone metody polowu to metoda splawikowa, gruntowa oraz spinningowa.",
    "Dla wedkarzy przygotowano 20 stanowisk z pomostami.",
    "Wedkarze musza posiadac i uzywac: mate, wanienke lub kolyske karpiowa, podbierak karpiowy, odkazacz, haczyki bezzadziorowe oraz zylke o srednicy min. 0,25 (w metodzie splawikowej moze byc ciensza).",
    "W wodzie plywaja okazy amura do 15 kg, karpie do 10-12 kg oraz szczupaki o dlugosci okolo 1 metra.",
    "Zakaz rozpalania grilla i ogniska. Auto musi pozostac na parkingu.",
    "Na terenie znajduje sie wakepark, altany dla gosci, toaleta z prysznicami oraz punkt gastronomiczny.",
    "W sezonie dostepne sa pole namiotowe oraz namioty glampingowe.",
    "Nie jest wymagane posiadanie karty wedkarskiej.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Lowisko Mlynek Tuszyn</h1>
        <a
          href="https://www.facebook.com/wakeboardmlynek"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Facebook Mlynek Tuszyn
        </a>

        <h2 className="subtitle">Wojewodztwo: Lodzkie</h2>
        <h2 className="subtitle">Miejscowosc: Tuszyn</h2>

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

export default MlynekTuszyn;
