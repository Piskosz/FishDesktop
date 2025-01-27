import React from 'react';
import '../../Komercje.css';

const Jezow = ({ navigation }) => {
  const regulations = [
    "Lowisko Jezow to swiezutkie lowisko, które zostało otwarte w 2021 roku.",
    "Akwen czynny przez cala dobe, przez caly rok.",
    "Na terenie lowiska znajduje sie piec zbiorników: staw z ryba drapiezna, duza ryba, feeder, staw z pstragiem oraz zbiornik mieszany.",
    "Lowisko oferuje mozliwosc wedkowania róznymi metodami: karpiowa, spinningowa, feederowa, splawikowa oraz method feeder.",
    "Na lowiskach karpiowych obowiazuje zasada 'no kill' (zlow i wypusc).",
    "W przypadku polowów na pstraga, jesli ryba nie bedzie nadawala sie do ponownego wypuszczenia, obowiazuje zakup ryby.",
    "Mozliwosc rozbicia namiotu.",
    "Lowisko nie zezwala na przyjazd z przyczepa campingowa.",
    "Na lowisku dostepne sa akcesoria do wedkowania, w tym maty, podbieraki karpiowe, haczyki z mikrozadziorem lub bezzadziorowe.",
    "Wedkarze zobowiazani sa do posiadania odpowiedniego sprzetu, w tym maty, podbieraka karpiowego oraz odkazacza.",
    "Na miejscu mozna zakupić pellety, zanety oraz kulki wedkarskie.",
    "Nie ma mozliwosci podjechania na stanowiska samochodem, ale dostepne sa taczki do transportu.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Lowisko Jezow</h1>
        <a
          href="https://www.facebook.com/%C5%81owisko-Je%C5%BC%C3%B3w-105518438283538"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Facebook Lowisko Jezow
        </a>

        <h2 className="subtitle">Województwo: Lubelskie</h2>
        <h2 className="subtitle">Miejscowosc: Jezow</h2>

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

export default Jezow;