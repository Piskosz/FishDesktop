import React from "react";
import '../../Komercje.css';

const Moszczanka = () => {
  const regulations = [
    "Łowisko Moszczanka położone jest niedaleko takich miejscowości jak: Ryki, Dęblin.",
    "Łowisko czynne jest od piątku do niedzieli w godzinach 6:00-21:00 oraz od 1 kwietnia do końca października po wcześniejszym uzgodnieniu.",
    "Możliwość wędkowania następującymi metodami: spławikową, gruntową, spinningową.",
    "Obowiązuje zasada 'no kill' (złów i wypuść) na rybach takich jak: okoń, jesiotr, karaś złocisty, lin. Pozostałe gatunki mają wymiary ochronne.",
    "Nie można zabierać ryb powyżej 3 kg.",
    "Na łowisku obowiązuje zakaz przyjazdu z przyczepą campingową.",
    "Wędkarze muszą posiadać długi podbierak, haki i kotwice bezzadziorowe, matę oraz odkażacz.",
    "Na łowisku istnieje możliwość odpłatnego skorzystania z prądu, rezerwacji stanowiska oraz rozbicia namiotu.",
    "Karta wędkarska nie jest wymagana.",
    "Obiekt monitorowany całodobowo.",
    "Możliwość łowienia w nocy po wcześniejszym uzgodnieniu.",
  ];

  const openMap = () => {
    window.open("https://maps.google.com/?q=51.4161,19.1777", "_blank");
  };

  const openFacebook = () => {
    window.open("https://znajdzlowisko.pl/lowisko-moszczanka/", "_blank");
  };

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Moszczanka</h1>
        <button onClick={openFacebook} className="link-button">
          Facebook Łowisko Moszczanka
        </button>
        <h2 className="subtitle">Województwo: Lubelskie</h2>
        <h2 className="subtitle">Miejscowość: Moszczanka</h2>
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

export default Moszczanka;
