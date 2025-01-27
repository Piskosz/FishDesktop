import React from 'react';
import '../../Komercje.css';

const FishZone = () => {
  const regulations = [
    "Łowisko „Fish Zone” czynne przez całą dobę.",
    "Łowisko znajduje się w miejscowości Bobrowniki Wielkie, województwo Małopolskie.",
    "Występujące gatunki ryb: Karp, Amur, Karaś, Szczupak, Sandacz, Sum, Jesiotr.",
    "Powierzchnia łowiska: 5,6 ha.",
    "Łowisko czynne przez całą dobę, z możliwością łowienia w nocy.",
    "Na łowisku obowiązuje zasada „no kill” (złów i wypuść) dla wszystkich gatunków ryb.",
    "Łowisko udostępnia 6 dwuosobowych stanowisk wędkarzom.",
    "Wędkarze muszą posiadać: matę karpiową typu wanienka lub kołyski, podbierak o rozstawie ramion ~1 metr, żyłkę o średnicy min. 0,30 mm, strzałówki, haki z mikrozadziorem lub bezzadziorowe o rozmiarze od 1 do 4, oraz odkażacz.",
    "Na łowisku występują karpie 20+.",
    "Możliwość rozbicia namiotu i przyjazdu z przyczepą campingową (po wcześniejszym ustaleniu).",
    "Zakaz nęcenia surowymi ziarnami, można gotowanymi.",
    "Możliwość rezerwacji online.",
    "Możliwość połowów metodą gruntową lub ZIG RIG.",
    "Palenie ognisk tylko w wyznaczonych miejscach.",
    "Rezerwacja na minimum dwie doby. Wymagany wcześniejszy kontakt telefoniczny.",
    "Kontakt: tel. 693 082 804 lub 603 325 943.",
    "Facebook: www.facebook.com/FishZoneNoKill.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko „Fish Zone”</h1>
        <a href="https://znajdzlowisko.pl/lowisko-fish-zone" className="link-button">
          Strona internetowa Łowisko Fish Zone
        </a>

        <h2 className="subtitle">Województwo: Małopolskie</h2>
        <h2 className="subtitle">Miejscowość: Bobrowniki Wielkie</h2>

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

export default FishZone;
