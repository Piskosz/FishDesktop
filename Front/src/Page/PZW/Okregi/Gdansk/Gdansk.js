import React from 'react';
import '../Okreg.css';

const Gdansk = () => {
  const waters = [
    { name: 'Bagienko I', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Lubichowo Mermet' },
    { name: 'Bagienko II', description: 'N/A', type: 'Żwirownie', fishingBoat: 'tak', district: 'Lubichowo Mermet' },
    { name: 'Białe', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Kartuzy Grzybno, Prokowo' },
    { name: 'Bieszkowice', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Wejherowo Bieszkowice' },
    { name: 'Borówno Małe', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Skarszewy Skarszewy' },
    { name: 'Borówno Wielkie', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Skarszewy Skarszewy' },
    { name: 'Bukowskie', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Sierakowice Bukowo' },
    { name: 'Bukowieńskie', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Cewice Bukowina' },
    { name: 'Chojnackie', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Sulęczyno Chojna-Kistowo' },
    { name: 'Czatkowy', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Tczew Czatkowy' },
    { name: 'Czarne Pd.', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Osiek Osiek' },
    { name: 'Czarnoleskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Skórcz Czarny Las' },
    { name: 'Dobre', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Puck Tyłowo' },
    { name: 'Gałęźne', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Kościerzyna Kościerzyna' },
    { name: 'Jabłowo', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Starogard Gdański Jabłowo' },
    { name: 'Jelonek', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Lubichowo Wdecki Młyn' },
    { name: 'Kamień', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Szemud Kamień' },
    { name: 'Kamionka', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Stężyca N. i St. Czaple' },
    { name: 'Kapliczne', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Kościerzyna Kościerzyna' },
    { name: 'Kazubskie', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Kaliska Kazub' },
    { name: 'Klasztorne D. i M.', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Kartuzy Kartuzy' },
    { name: 'Krawusińskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Skarszewy Kamierowskie Piece' },
    { name: 'Księże', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Kościerzyna Wierzysko' },
    { name: 'Lichnowy', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Chojnice Lichnowy' },
    { name: 'Łapino Górne', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Żukowo Łapino Górne' },
    { name: 'Łapalickie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Łapalice Łapalice' },
    { name: 'Małe Mierzeszyńskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Trąbki Wielkie Mierzeszyn' },
    { name: 'Marchowo', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Szemud Kieleńska Huta' },
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Okręg Gdańsk</h1>
        <a href="http://www.pzwwg.pl/" className="linkButton">
          Strona główna Okręgu Gdańsk
        </a>
        {waters.map((water, index) => (
          <div key={index} className="infoBox">
            <p><strong>Nazwa:</strong> {water.name}</p>
            <p><strong>Opis:</strong> {water.description}</p>
            <p><strong>Typ:</strong> {water.type}</p>
            <p><strong>Wędkowanie z łodzi:</strong> {water.fishingBoat}</p>
            <p><strong>Gmina:</strong> {water.district}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gdansk;
