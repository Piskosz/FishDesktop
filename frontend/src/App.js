import React, { useState } from 'react';
import './App.css';
import Routing from './Routing';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const goToLogin = () => {
    setCurrentScreen('Login');
  };

  const goBack = () => {
    setCurrentScreen('home');
  };

  return (
    <>
      <Routing currentScreen={currentScreen} goToLogin={goToLogin} goBack={goBack} />
    </>
  );
}

export default App;
