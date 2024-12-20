import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaCloud, FaCalendar, FaStickyNote, FaUser, FaMap } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const storedUserId = localStorage.getItem('userId');
      console.log('Fetched userId from localStorage:', storedUserId);
      setUserId(storedUserId || 'Nieznany użytkownik');
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    console.log('User logged out and data cleared.');
    navigate('/login');
  };

  return (
    <div className="home-page">
      <div className="header-container">
        <h1 className="header-text">Witaj, użytkowniku {userId}!</h1>
      </div>

      <div className="button-container">
        <div className="icon-row">
          <button className="icon-button" onClick={() => navigate('/home')}>
            <FaHome size={40} color="white" />
            <p className="icon-text">Home Fishing</p>
          </button>
          <button className="icon-button" onClick={() => navigate('/wetter')}>
            <FaCloud size={40} color="white" />
            <p className="icon-text">Pogoda</p>
          </button>
          <button className="icon-button" onClick={() => navigate('/calendar')}>
            <FaCalendar size={40} color="white" />
            <p className="icon-text">Kalendarz brań</p>
          </button>
        </div>

        <div className="icon-row">
          <button className="icon-button" onClick={() => navigate('/notes')}>
            <FaStickyNote size={40} color="white" />
            <p className="icon-text">Notatki</p>
          </button>
          <button className="icon-button" onClick={() => navigate('/profile')}>
            <FaUser size={40} color="white" />
            <p className="icon-text">Profil</p>
          </button>
          <button className="icon-button" onClick={() => navigate('/WaterType')}>
            <FaMap size={40} color="white" />
            <p className="icon-text">Mapy łowisk</p>
          </button>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          <p className="logout-button-text">Wyloguj się</p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
