import React from 'react';
import '../../Komercje.css';

const EkoLakeWojcina = () => {
  const regulations = [
    "Łowisko Eko Lakes Wójcina czynne od 1 kwietnia do 30 listopada.",
    "Łowisko znajduje się na granicy województwa Małopolskiego i Świętokrzyskiego, w miejscowości Wójcina.",
    "Występujące gatunki ryb: Karp, Amur, Lin.",
    "Powierzchnia łowiska: 24 ha.",
    "Woda składa się z kilku zbiorników dostępnych dla karpiarzy.",
    "Łowisko oferuje 22 dwuosobowe stanowiska wędkarskie.",
    "Wymagana metoda połowu: metoda karpiowa.",
    "Obowiązuje zasada 'no kill' (złów i wypuść).",
    "Na stanowiskach VIP znajdują się domki do wynajęcia.",
    "Woda zawiera karpie powyżej 20 kg, a największe okazy mogą ważyć nawet 34 kg.",
    "Na łowisku dostępne są miejsca do ładowania akumulatorów i WC z węzłem sanitarnym.",
    "Wędkarze muszą posiadać haki bezzadziorowe lub z mikrozadziorem oraz żyłki o średnicy min. 0,33.",
    "Wszystkie stanowiska wyposażone są w kołyskę karpiową, worek do ważenia ryb oraz podbierak.",
    "Woda dostępna jest także dla modeli RC i środków pływających.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Łowisko „Eko Lakes Wójcina”</h1>

        <a
          href="https://znajdzlowisko.pl/lowisko-eko-lakes-wojcina"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Strona internetowa Łowisko Eko Lakes Wójcina
        </a>

        <h2 className="subtitle">Województwo: Małopolskie</h2>
        <h2 className="subtitle">Miejscowość: Wójcina</h2>

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

export default EkoLakeWojcina;
