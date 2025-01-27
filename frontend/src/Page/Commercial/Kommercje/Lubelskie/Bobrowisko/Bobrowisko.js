import React from 'react';
import '../../Komercje.css';

const Bobrowisko = () => {
  const regulations = [
    "Łowisko Bobrowisko zostało udostępnione do wędkowania w okolicy Krasnegostawu oraz Chełmu.",
    "Akwen czynny przez całą dobę, przez cały rok.",
    "Na terenie łowiska znajduje się kilka stawów: pstrągowy, spinningowy oraz karpiowy.",
    "Łowisko oferuje wynajem domków i altanek.",
    "Na zbiorniku karpiowym o powierzchni 3,5 ha można złowić karpie do 20 kg.",
    "Zbiornik spinningowy o powierzchni 2,5 ha z szczupakami ponad metr i okoniami do 50 cm.",
    "Zbiornik pstrągowy oferuje świetne warunki do połowu pstrągów.",
    "Możliwość rezerwacji telefonicznej.",
    "Nie jest wymagana karta wędkarska.",
    "Na łowisku dostępne są pomosty i pontony do wynajęcia.",
    "Możliwość połowu z lodu.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Bobrowisko</h1>
        <a
          href="https://www.facebook.com/Kamil.Bobrowski91"
          className="linkButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Łowisko Bobrowisko
        </a>

        <h2 className="subtitle">Województwo: Lubelskie</h2>
        <h2 className="subtitle">Miejscowość: Siennica Różana</h2>

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

export default Bobrowisko;
