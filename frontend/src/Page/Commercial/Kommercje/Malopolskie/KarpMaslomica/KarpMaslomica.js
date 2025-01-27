import React from 'react';
import '../../Komercje.css';

const KarpMaslomiaca = () => {
  const regulations = [
    "Łowisko Karp Masłomiąca czynne przez cały rok (z wyjątkiem okresu, gdy zbiornik jest skuty lodem).",
    "Łowisko znajduje się w miejscowości Masłomiąca, województwo Małopolskie.",
    "Występujące gatunki ryb: Amur, Karp, Lin, Jesiotr, Karaś, Szczupak, Okoń, Płoć, Wzdręga.",
    "Powierzchnia łowiska: 2 ha.",
    "Głębokość łowiska: 2,5-3,5 m, średnia głębokość 3 m, dno bez zaczepów.",
    "Łowisko posiada 35 stanowisk wędkarskich, z możliwością rozbicia namiotu i ustawienia przyczepy campingowej.",
    "Dostępne 6 miejsc do ustawienia przyczepy z możliwością korzystania z prądu.",
    "Na łowisku obowiązują limity dobowego oraz sezonowego połowu ryb.",
    "Wymagane akcesoria: mata karpiowa lub kołyska, podbierak o rozstawie ramion min. 80 cm, wyhaczacz.",
    "Metody połowu: spinning, feeder, spławik, grunt, metoda karpiowa.",
    "W łowisku pływają karpie i amury powyżej 10 kg, a także ryby powyżej 20 kg. Zaplanowane jest dorybienie okazami powyżej 30 kg.",
    "Łowisko oferuje możliwość zakupu karnetów rocznych z pierwszeństwem w rezerwacji terminów weekendowych.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko „Karp Masłomiąca”</h1>
        <a href="https://znajdzlowisko.pl/lowisko-karp-maslomiaca" className="linkButton">
          Strona internetowa Łowisko Karp Masłomiąca
        </a>

        <h2 className="subtitle">Województwo: Małopolskie</h2>
        <h2 className="subtitle">Miejscowość: Masłomiąca</h2>

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

export default KarpMaslomiaca;
