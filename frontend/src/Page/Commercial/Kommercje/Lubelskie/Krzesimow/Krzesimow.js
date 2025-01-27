import React from 'react';
import '../../Komercje.css';

const Krzesimow = ({ navigation }) => {
  const regulations = [
    "Łowisko Krzesimów to trzy stawy do dyspozycji wędkarzy.",
    "Akwen położony niedaleko miejscowości Lublin, Mełgiew, Łęczna.",
    "Możliwość zakupu ryb, ale są limity ochronne.",
    "Głębokość stawów wynosi średnio 1,5 m.",
    "W wodach występuje 34 gatunki ryb.",
    "Na łowisku dostępna jest gastronomia oraz przetwory z ryb.",
    "Na terenie znajdują się ławki.",
    "Od wędkarzy wymagane jest posiadanie wyhaczacza i podbieraka.",
    "Łowisko pozwala na łowienie bez karty wędkarskiej.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Krzesimów</h1>
        <a
          href="https://www.facebook.com/%C5%81owisko-W%C4%99dkarskie-Krzesim%C3%B3w-486659768156089/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Facebook Łowisko Krzesimów
        </a>

        <h2 className="subtitle">Województwo: Lubelskie</h2>
        <h2 className="subtitle">Miejscowość: Krzesimów</h2>

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

export default Krzesimow;
