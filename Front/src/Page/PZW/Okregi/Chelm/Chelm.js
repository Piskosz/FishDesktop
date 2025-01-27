import React from 'react';
import '../Okreg.css';

const Chelm = () => {
  const waters = [
    { name: 'Sumin', description: '91,5 ha' },
    { name: 'Starosiele', description: '7,75 ha' },
    { name: 'Białe', description: '106,4 ha' },
    { name: 'Deusze', description: '2,65 ha' },
    { name: 'Glinki', description: '46,9 ha' },
    { name: 'Pompka', description: '3,0 ha' },
    { name: 'Rotcze', description: '42,7 ha' },
    { name: 'Dubeczyńskie (Hańskie)', description: '11,6 ha' },
    { name: 'Płotycze', description: '14,0 ha' },
    { name: 'Syczyn', description: '6,0 ha' },
    { name: 'Święte', description: '5,7 ha' },
    { name: 'Słone', description: '4,6 ha' },
    { name: 'Lipieniec', description: '4,1 ha' },
    { name: 'Berdyszcze', description: '2,5 ha' },
    { name: 'Wereszczyńskie', description: '5,2 ha' },
    { name: 'Krychowskie', description: '3,97 ha' },
    { name: 'Wytyczno', description: '487 ha (dodatkowa składka 120 zł)' },
    { name: 'Zahajki', description: '235 ha' },
    { name: 'Stańków', description: '41,7 ha' },
    { name: 'Żółtańce Duży', description: '46,9 ha' },
    { name: 'Żółtańce Mały', description: '9,0 ha' },
    { name: 'Staw', description: '14,8 ha' },
    { name: 'Tuligłowy', description: '15 ha' },
    { name: 'Tuligłowy kąpielisko', description: '1,5 ha' },
    { name: 'Niva I', description: '44,3 ha' },
    { name: 'Niva II', description: '8,5 ha' },
    { name: 'Zb.Husynne', description: '99 ha' },
  ];

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Jeziora i Zbiorniki Chełm</h1>
        <a
          href="http://www.pzw-chelm.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkButton"
        >
          Strona główna Okręgu Chełm
        </a>
        {waters.map((water, index) => (
          <div key={index} className="infoBox">
            <p className="infoText">
              <strong>Nazwa: </strong>{water.name}
            </p>
            <p className="infoText">
              <strong>Opis: </strong>{water.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chelm;
