import React from 'react';
import '../../Komercje.css';

const RekreacyjnePrzemkow = ({ navigation }) => {
  const regulations = [
    "Łowisko Rekreacyjne Przemków to zbiornik wędkarstwa rekreacyjnego położony w województwie dolnośląskim, w miejscowości Łężce. To idealne miejsce dla wędkarzy szukających spokojnej okolicy i świetnych warunków do połowu.",
    "Na łowisku występują takie gatunki ryb jak karp, amur, jesiotr, pstrąg, tołpyga, lin, karaś.",
    "Łowisko składa się z kilku stawów, w tym karpiowego i pstrągowego.",
    "Wędkarze mogą łowić zarówno w dzień, jak i w nocy w wybrane weekendy, po wcześniejszym kontakcie telefonicznym.",
    "Łowisko jest czynne codziennie w sezonie, a poza sezonem (od jesieni do wiosny) tylko w weekendy.",
    "Na terenie łowiska dostępne są zanęty, przynęty oraz swojskie wyroby, takie jak wędliny i wędzone ryby.",
    "Nie jest wymagane posiadanie karty wędkarskiej, co sprawia, że jest to idealne miejsce dla amatorów wędkarstwa.",
    "Kontakt telefoniczny: 606 702 515.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Rekreacyjne Przemków</h1>
        <a
          href="https://www.facebook.com/%C5%81owisko-rekreacyjne-Przemk%C3%B3w-1369155713171796"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Facebook Łowisko Rekreacyjne Przemków
        </a>

        <p className="subtitle">Województwo: Dolnośląskie</p>
        <p className="subtitle">Miejscowość: Łężce</p>

        <h2 className="subtitle">Regulamin łowiska:</h2>
        {regulations.map((rule, index) => (
          <div key={index} className="info-box">
            <p className="info-text">{rule}</p>
          </div>
        ))}

    
      </div>
    </div>
  );
};

export default RekreacyjnePrzemkow;
