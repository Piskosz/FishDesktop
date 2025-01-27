import React from 'react';
import '../../Komercje.css';

const PodSilosami = () => {
  const regulations = [
    "Łowisko 'Pod Silosami' to zbiornik wędkarstwa no kill położony w województwie dolnośląskim, w miejscowości Grzymalin. To idealne miejsce dla wędkarzy szukających spokojnej okolicy i świetnych warunków do połowu.",
    "Na łowisku występują takie gatunki ryb jak karp, jesiotr, lin, amur, okoń, szczupak, sandacz, leszcz, płoć.",
    "Powierzchnia łowiska wynosi 6,5 ha, a wędkarze mogą łowić metodami gruntowymi i spławikowymi.",
    "Wędkarze muszą posiadać większy podbierak, matę (najlepiej z bokami uniemożliwiającymi wysunięcie się ryb), odkażacz oraz haczyki bezzadziorowe.",
    "Łowisko jest otwarte od maja 2021 roku, a woda jest typu 'no kill' (złów i wypuść).",
    "Na łowisku można łowić w nocy w wybranych terminach, a także rozbić namiot lub przyjechać z przyczepą campingową.",
    "Po dojeździe do kompleksu stawów należy kierować się bezpośrednio do żółtego SILOSA.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Pod Silosami</h1>
        <a
          href="https://www.facebook.com/%C5%81owisko-Pod-Silosami-w-Grzymalinie-106952018246337"
          className="link-button"
        >
          Facebook Łowisko Pod Silosami
        </a>

        <p className="subtitle">Województwo: Dolnośląskie</p>
        <p className="subtitle">Miejscowość: Grzymalin</p>

        <p className="subtitle">Regulamin łowiska:</p>
        {regulations.map((rule, index) => (
          <div key={index} className="info-box">
            <p className="info-text">{rule}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default PodSilosami;
