import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importowanie hooka useNavigate
import './Registry.css';

const Registry = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    mail: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Zastępuje history

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    const { login, password, mail } = formData;

    // Sprawdzanie wypełnienia pól
    if (!login || !password || !mail) {
      setErrorMessage('Wszystkie pola muszą być wypełnione.');
      return;
    }

    // Sprawdzanie poprawności formatu email
    if (!validateEmail(mail)) {
      setErrorMessage('Podaj poprawny adres e-mail.');
      return;
    }

    try {
      const response = await axios.post(
        'http://172.28.16.1:8080/Rejestracja/dodawanie/',
        [formData],
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data.message);
      setRegistrationSuccess(true);
      setErrorMessage('');
      navigate('/home'); // Zastępuje history.push() na navigate
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
    }
  };

  const handleLogin = () => {
    navigate('/'); // Zastępuje history.push() na navigate
  };

  return (
    <div className="background">
      <div className="container">
        {registrationSuccess && (
          <p className="successMessage">Użytkownik zarejestrowany pomyślnie!</p>
        )}
        {errorMessage !== '' && (
          <p className="errorMessage">{errorMessage}</p>
        )}
        <div className="formContainer">
          <input
            type="text"
            placeholder="Nazwa użytkownika"
            className="input"
            onChange={(e) => handleInputChange('login', e.target.value)}
            value={formData.login}
          />
          <input
            type="password"
            placeholder="Hasło"
            className="input"
            onChange={(e) => handleInputChange('password', e.target.value)}
            value={formData.password}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="input"
            onChange={(e) => handleInputChange('mail', e.target.value)}
            value={formData.mail}
          />
          <button className="registerButton" onClick={handleRegister}>
            Zarejestruj się
          </button>
          <button className="loginButton" onClick={handleLogin}>
            Wróć do logowania
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registry;
