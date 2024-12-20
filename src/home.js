import { useNavigate } from 'react-router-dom';
import React from 'react';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRejestracja = () => {
    navigate("/Registry");
  };

  return (
    <div>
      <div className="bazaInformacji">
        <h1>Witaj na stronie głównej</h1>
        <p>Wybierz jedną z poniższych opcji, aby kontynuować:</p>
        <button onClick={goToLogin}>Przejdź do Logowania</button>
        <button onClick={goToRejestracja}>Przejdź do Rejestracji</button>
      </div>
    </div>
  );

};

export default Home;
