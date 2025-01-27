import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Komercje.css';

const BobrowaPrzystan = () => {
  const navigate = useNavigate();
  
  const regulations = [
    "Łowisko Bobrowa Przystań to dwa stawy po około 30 stanowisk na każdym. Łowisko pożwirowe. Każda z wód ma około 6-8 ha, a głębokość dochodzi do 25 m.",
    "Jeden akwen jest typowo karpiowy, drugi feederowy z rybą mieszaną.",
    "Na obydwu zbiornikach obowiązuje zasada „no kill” (złów i wypuść).",
    "Łowisko karpiowe jest czynne 7 dni w tygodniu, przez całą dobę, a łowisko feederowe od 6:00 do 22:00.",
    "Na łowisku można łowić karpie powyżej 20 kg.",
    "Możliwość połowu na spinning, feeder czy grunt.",
    "Ogniska można rozpalać jedynie w miejscach do tego wyznaczonych.",
    "Wędkarze muszą posiadać odkażacz, haczyki z mikrozadziorem, matę lub kołyskę, podbierak o rozstawie ramion min. 70 cm.",
    "Na terenie łowiska znajduje się KAMPEROWISKO z prysznicami, toaletami, prądem, miejscem na zrzut nieczystości oraz placem zabaw.",
    "Możliwość wynajęcia apartamentów i pokoi.",
    "Łowisko nie wymaga posiadania karty wędkarskiej.",
    "Kontakt telefoniczny: 533 860 205.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko Bobrowa Przystań</h1>
        
        <a
          href="https://www.facebook.com/profile.php?id=100072377200090"
          className="linkButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Łowisko Bobrowa Przystań
        </a>

        <p className="subtitle">Województwo: Dolnośląskie</p>
        <p className="subtitle">Miejscowość: Bolesławiec</p>

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

export default BobrowaPrzystan;
