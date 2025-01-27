import React from 'react';
import '../../Komercje.css';

const KarperLake = () => {
  const regulations = [
    "Lowisko komercyjne Karper Lake polozone jest niedaleko takich miejscowosci jak: Lodz, Rzgow, Piotrkow Trybunalski, Lask czy Tuszyn.",
    "Akwen czynny od poczatku lutego do konca roku (w zaleznosci od warunkow atmosferycznych umozliwiajacych polow).",
    "Na lowisku obowiazuje zasada 'no kill' (zlow i wypusc).",
    "Jest to nie za duza, ale bardzo urokliwa woda. Lowisko zostalo przygotowane w 'angielskim stylu' i jest woda typowo rzutowa.",
    "Glebokosc akwenu waha sie w przedziale od 0,5m do 2,40m. Dno jest zroznicowane, wystepuja miejsca piaszczyste oraz place pokryte roslinnoscia.",
    "Rybostan, ktory zamieszkuje wode znajduje sie w przedziale od 5kg do powyzej 10+ (karp i amur). Dodatkowymi mieszkancami sa niewielkie ilosci jesiotrow oraz karpi koi.",
    "Dla wedkarzy przygotowano 7 stanowisk dwuosobowych z mozliwoscia rozbicia namiotu.",
    "Na terenie do dyspozycji jest WC oraz parking. Teren ogrodzony i monitorowany.",
    "W cenie oplaty za lowienie wedkarze dostaja maty oraz podbierak na uzytek na lowisku.",
    "Mozliwosc polowu metoda karpiowa i method feeder.",
    "Ognisko oraz grill mozna rozpalac jedynie w miejscach do tego wyznaczonych.",
    "Auta musza byc odstawione na wyznaczone miejsce parkingowe.",
    "Wedkarze musza posiadac oraz uzywac na lowisku: odkazacz, zylke karpiowa o minimalnej srednicy 0,30 oraz wedke z zapasem mocy.",
    "Blisko infrastruktura pomocna: sklepy, apteka, stacja benzynowa.",
    "Mozliwosc zakupu licencji rocznej lub wynajecia akwenu dla grupy czy jednej osoby.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Lowisko Karper Lake</h1>
        <a href="https://www.facebook.com/karperlake" target="_blank" rel="noopener noreferrer" className="linkButton">
          Facebook Karper Lake
        </a>
        <p className="subtitle">Wojewodztwo: Lodzkie</p>
        <p className="subtitle">Miejscowosc: Tuszynek Majoracki</p>

        <p className="subtitle">Regulamin lowiska:</p>
        {regulations.map((rule, index) => (
          <div key={index} className="infoBox">
            <p className="infoText">{rule}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default KarperLake;
