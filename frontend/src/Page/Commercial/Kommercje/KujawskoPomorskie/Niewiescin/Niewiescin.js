import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Komercje.css';

const Niewiescin = () => {
  const navigate = useNavigate();

  const regulations = [
    "Lowisko Niewiescin polozone jest niedaleko Bydgoszczy, to naturalny zbiornik z trudnodostepna linia brzegowa i wysoka skarpa.",
    "Na lowisku wystepuja takie gatunki ryb jak karp, amur, szczupak, lin, leszcz, ploc, okon.",
    "Powierzchnia lowiska wynosi 11 ha, a do dyspozycji wedkarzy przygotowano 6 dwuosobowych stanowisk.",
    "Akwen dostepny dla wedkarzy caly rok, 24 h/dobe. Mozliwosc lowienia w nocy.",
    "Na lowisku obowiazuje zasada 'no kill' (zlow i wypusc) dla karpi i amurow.",
    "Metody polowu dozwolone na akwenie to: spinning, grunt, splawik, karpiowa, feeder.",
    "Dopuszczono mozliwosc spinningowania z lodzi.",
    "Na lowisku obowiazuje zakaz rozpalania ogniska (chyba, ze po wczesniejszym uzyskaniu zgody od gospodarza).",
    "Dla osob lowiacych karpie wyznaczono 6 dwuosobowych stanowisk. Dostep do pradu na stanowiskach 1 i 2.",
    "Woda ma glebokosc od 6 do 7 m, a w najglebszym miejscu osiagnie do 11 m.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Lowisko Niewiescin</h1>

        <a
          href="https://www.facebook.com/%C5%81owisko-Niewie%C5%9Bcin-105939037460795/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Facebook Lowisko Niewiescin
        </a>

        <p className="subtitle">Wojewodztwo: Kujawsko-Pomorskie</p>
        <p className="subtitle">Miejscowosc: Niewiescin</p>

        <h2 className="subtitle">Regulamin lowiska:</h2>
        {regulations.map((rule, index) => (
          <div key={index} className="info-box">
            <p className="info-text">{rule}</p>
          </div>
        ))}

    
      </div>
    </div>
  );
};

export default Niewiescin;
