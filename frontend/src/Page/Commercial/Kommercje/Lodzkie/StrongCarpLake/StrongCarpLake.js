import React from 'react';
import { Link } from 'react-router-dom';
import '../../Komercje.css';

const StrongCarpLake = () => {
  const regulations = [
    "Lowisko Strong Carp Lake polozone jest w Bolimowie, niedaleko takich miejscowosci jak Lowicz, Mszczonow czy Sochaczew, na granicy wojewodztwa lodzkiego i mazowieckiego.",
    "Na lowisku obowiazuje bezwzgledna zasada 'no kill' (zlow i wypusc) dla wszystkich gatunkow ryb.",
    "Akwen jest zbiornikiem pozwirowym. Maksymalna glebokosc wynosi 4-5 m. Bardzo zroznicowane dno akwenu, najczesciej kamieniste. Na lowisku znajduja sie dwie wyspy.",
    "Do dyspozycji wedkarzy znajduje sie lacznie 18 stanowisk wedkarskich (w tym dwu i trzyosobowe).",
    "Na jednym z brzegow udostepniono domki z mozliwoscia wynajecia. Domki w pelni wyposazone (prad, czajnik, lozka, koce, posciele, lodowka i wiele innych).",
    "Czesc stanowisk typowo pod namioty.",
    "Z dodatkowych udogodnien znajdziemy jeszcze prysznic, WC, prad na stanowisku czy mozliwosc wypozyczenia malej lodzi.",
    "Istnieje mozliwosc zamowienia jedzenia z dowozem.",
    "W przypadku polowu karpia jedyna dopuszczona metoda jest metoda wlosowa.",
    "W wodzie plywaja zarowno karpie, jak i amury powyzej 20 kg.",
    "Wedkarze musza posiadac na lowisku oraz uzywac: duzy podbierak, mata/wanna lub kolyska karpiowa, worek do wazenia ze sztywnymi ramionami oraz odkazacz.",
    "Nie jest wymagane posiadanie karty wedkarskiej.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Lowisko Strong Carp Lake</h1>
        <a
          href="https://www.facebook.com/carpstronglake"
          className="linkButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Strong Carp Lake
        </a>

        <h2 className="subtitle">Wojewodztwo: Lodzkie</h2>
        <h2 className="subtitle">Miejscowosc: Bolimow / Lasieczniki</h2>

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

export default StrongCarpLake;
