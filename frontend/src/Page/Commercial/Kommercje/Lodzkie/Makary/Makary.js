import React from 'react';
import '../../Komercje.css';

const Makary = () => {
  const regulations = [
    "Lowisko u Makary zostalo udostepnione do wedkowania w 2021 roku.",
    "Akwen czynny codziennie w godzinach 7:00-20:00.",
    "Na lowisku mozna rozpalac grilla i ognisko w miejscach do tego wyznaczonych i po wczesniejszej konsultacji.",
    "Na lowisku obowiazuje bezwzgledna zasada 'no kill' (zlow i wypusc).",
    "Nie jest wymagana karta wedkarska.",
    "Sezon na polow bialorybu trwa od 01.03 do 31.10.",
    "Sezon na polow ryb drapieznych trwa od 01.05 do 31.12.",
    "Lowisko jest monitorowane 24 h/dobe.",
    "Lowisko zaleca posiadanie i uzywanie: duzych podbierakow, mat karpiowych, odkazacza, hakow bezzadziorowych.",
    "Dla wedkarzy dostepne sa pomosty, mozna rowniez lowic z brzegu.",
    "Przy lowisku istnieje mozliwosc wynajecia apartamentow.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Lowisko u Makary</h1>
        
        <a href="https://www.facebook.com/lowiskoumakary/" target="_blank" rel="noopener noreferrer" className="link-button">
          <span className="link-text">Facebook Lowisko u Makary</span>
        </a>

        <h2 className="subtitle">Wojewodztwo: Lodzkie</h2>
        <h2 className="subtitle">Miejscowosc: Kluki</h2>

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

export default Makary;
