import React from 'react';
import '../Okreg.css';

const Czestochowa = () => {
  const waters = [
    { name: 'C-01 - rz. Mała Panew', description: 'od źródeł do ujścia rzeki Lublinicy.' },
    { name: 'C-02 - zb. Zielona (Górny i Dolny)', description: '51,8 ha, gm. Kalety.' },
    { name: 'C-03 - zb. Droniowiczki', description: '3,8 ha, Lubliniec.' },
    { name: 'C-04 - Kanał Grunwaldzki', description: '2,0 ha, Lubliniec.' },
    { name: 'C-05 - zb. Dąbrowa', description: '2,5 ha, gm. Koszęcin.' },
    { name: 'C-10 - rz. Warta', description: 'od źródeł do mostu w m. Poraj wraz z dopływami.' },
    { name: 'C-11 - zb. Poraj', description: '496 ha, gm. Poraj.' },
    { name: 'C-20 - rz. Warta', description: 'od mostu w m. Poraj do mostu kolejowego w Działoszynie oraz zb. Jankowice w Zakrzówku Szlacheckim.' },
    { name: 'C-21 - zb. Widawa', description: '5,0 ha, gm. Woźniki.' },
    { name: 'C-22 - zb. Pająk', description: '6,0 ha, gm. Konopiska.' },
    { name: 'C-23 - zb. Blachownia', description: '40,0 ha, gm. Blachownia.' },
    { name: 'C-24 - zb. Amerykan', description: '4,4 ha, gm. Janów.' },
    { name: 'C-25 - zb. Guców', description: '3,5 ha, gm. Janów.' },
    { name: 'C-26 - zb. Julianka', description: '7,0 ha, gm. Przyrów.' },
    { name: 'C-30 - rz. Liswarta', description: 'od źródeł do ujścia wraz z dopływami.' },
    { name: 'C-31 - zb. Hadra', description: '40,0 ha, gm. Herby.' },
    { name: 'C-32 - zb. Lisów', description: '7,5 ha, gm. Lisów.' },
    { name: 'C-33 - zb. Borki', description: '6,45 ha, gm. Olesno.' },
    { name: 'C-34 - zb. Kucoby', description: '10,0 ha, gm. Olesno.' },
    { name: 'C-35 - zb. Zakrzew', description: '9,6 ha, gm. Kłobuck.' },
    { name: 'C-36 - zb. Ostrowy', description: '38,0 ha, gm. Miedźno (tylko zb. Dolny).' },
    { name: 'C-37 - zb. Panki', description: '3,8 ha, gm. Panki.' },
    { name: 'C-40 - rz. Pilica', description: 'od źródeł do ujścia rzeki Czarna Włoszczowska wraz z dopływami na tym odcinku.' },
    { name: 'C-41 - zb. Siamoszyce', description: '25,0 ha, gm. Kroczyce.' },
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Wody Nizinne Czestochowa</h1>
        <a href="http://www.pzw-czestochowa.pl/" className="linkButton">
          <span className="linkText">Strona główna Okręgu Czestochowa</span>
        </a>
        {waters.map((water, index) => (
          <div key={index} className="infoBox">
            <p className="infoText">
              <span className="bold">Nazwa: </span>{water.name}
            </p>
            <p className="infoText">
              <span className="bold">Opis: </span>{water.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Czestochowa;
