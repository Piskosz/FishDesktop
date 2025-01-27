import React from 'react';
import '../Okreg.css';

const Bialystok = () => {
  const waters = [
    { name: 'rz. Narew nr 1', details: 'Zbiornik Siemianówka obejmuje wody: a) zbiornika Siemianówka, b) rzeki Narew (od granicy Państwa do zbiornika), c) Cisówkę, d) Kołonną, e) Pszczółkę', location: 'Białystok, Hajnówka', surface: '3253 ha' },
    { name: 'rz. Narew nr 2', details: 'Obwód rybacki obejmuje wody: a) rzeki Narew wraz ze starorzeczami, b) rzeki Narewka, c) rzeki Łoknica, d) rzeki Orlanka, e) Zbiornika Dubicze Cerkiewne', location: 'Hajnówka, Bielsk Podlaski, Białystok', surface: '275 ha' },
    { name: 'rz. Narew nr 4', details: 'Obwód rybacki obejmuje wody: a) rzeki Narew, b) rzeki Nereśl, c) rzeka Ślina', location: 'Białystok, Mońki', surface: '285 ha' },
    { name: 'rz. Supraśl nr 1', details: 'Obwód rybacki obejmuje wody: a) rzeki Supraśl, b) rzeki Sokołda, c) Zbiornika Gródek, d) Zbiornika Sokółka, e) Zbiornika Wasilków', location: 'Białystok, Sokółka', surface: '166 ha' },
    { name: 'rz. Leśna nr 1', details: 'Obwód rybacki obejmuje wody: a) rzeki Leśna, b) Zbiornika Topiło', location: 'Hajnówka', surface: '45 ha' },
    { name: 'rz. Kamianka nr 1', details: 'Obwód rybacki obejmuje wody: a) rzeki Kamianka, b) Zbiornika Siemiatycze dolny, c) Zbiornika Siemiatycze górny, d) Zbiornika Czartajew', location: 'Siemiatycze', surface: '42 ha' },
    { name: 'rz. Biebrza nr 2', details: 'Obwód rybacki obejmuje wody: a) rzeki Sidra, b) Zbiornika Sidra, c) rzeki Kamienna, d) Zbiornika Janów, e) Zbiornika Korycin', location: 'Sokółka, Augustów, Mońki', surface: '100 ha' },
    { name: 'rz. Świsłocz nr 1', details: 'Obwód rybacki obejmuje wody: a) rzeki Świsłocz, b) Zbiornika Krynki', location: 'Białystok, Sokółka', surface: '55 ha' },
    { name: 'rz. Łosośna nr 1', details: 'Obwód rybacki obejmuje wody: a) Zbiornika Kuźnica Białostocka', location: 'Sokółka', surface: '5 ha' },
    { name: 'rz. Czarna Hańcza nr 7', details: 'Obwód rybacki obejmuje wody: a) rzeki Czarna Hańcza', location: 'Sokółka', surface: 'unknown' }
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Okręg Białystok</h1>
        <a href="http://www.pzw.bialystok.pl" target="_blank" rel="noopener noreferrer" className="linkButton">
          Strona główna Okręgu Białystok
        </a>
        {waters.map((water, index) => (
          <div key={index} className="infoBox">
            <p className="infoText"><strong>Nazwa: </strong>{water.name}</p>
            <p className="infoText"><strong>Szczegóły: </strong>{water.details}</p>
            <p className="infoText"><strong>Lokalizacja: </strong>{water.location}</p>
            <p className="infoText"><strong>Powierzchnia: </strong>{water.surface} ha</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bialystok;
