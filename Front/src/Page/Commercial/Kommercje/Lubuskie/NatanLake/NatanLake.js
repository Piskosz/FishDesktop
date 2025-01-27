import React from 'react';
import '../../Komercje.css';

const NatanLake = ({ navigation }) => {
  const regulations = [
    "Łowisko karpiowe „Natan” czynne przez cały rok.",
    "Łowisko znajduje się w miejscowości Droszków, województwo Lubuskie.",
    "Występujące gatunki ryb: Karp, Amur, Lin, Szczupak, Sandacz, Tołpyga, Węgorz, Płoć.",
    "Łowisko składa się z naturalnego akwenu wodnego, na którym obowiązuje zasada „no kill” (złów i wypuść).",
    "Na łowisku dostępnych jest 7 stanowisk.",
    "Brak możliwości rozpalenia grilla lub ogniska. Na jeziorze znajduje się plaża.",
    "Wędkarz musi posiadać: podbierak o rozstawie ramion ~1 metr, matę z bokami uniemożliwiającymi wysunięcie się ryby poza jej obręb, odkażacz.",
    "Na łowisku znajdują się toalety.",
    "Po wypakowaniu, samochód należy odstawić na parking.",
    "Łowisko Natan otoczone jest lasem.",
    "Ryby w przedziale wagowym od 3,5 do 24 kg. Największy okaz 24,700 kg.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "Możliwość łowienia w nocy.",
    "Możliwość rozbicia namiotu oraz przyjazdu z przyczepą campingową.",
  ];

  const openFacebook = () => {
    window.open(
      'https://www.facebook.com/%C5%81owisko-karpiowe-Natan-161644987354438/',
      '_blank'
    );
  };


  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko karpiowe „Natan”</h1>
        <button className="linkButton" onClick={openFacebook}>
          Facebook Łowisko karpiowe „Natan”
        </button>

        <h2 className="subtitle">Województwo: Lubuskie</h2>
        <h2 className="subtitle">Miejscowość: Droszków</h2>

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

export default NatanLake;
