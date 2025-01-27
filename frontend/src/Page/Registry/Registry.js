import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './Registry.css';

const Registry = () => {
  const [formData3, setFormData3] = useState({
    login: '',
    password: '',
    mail: '',
  });
  const [registrationSuccess3, setRegistrationSuccess3] = useState(false);
  const [errorMessage3, setErrorMessage3] = useState('');
  const navigate3 = useNavigate(); 

  const handleInputChange3 = (name, value) => {
    setFormData3({ ...formData3, [name]: value });
  };

  const validateEmail3 = (email) => {
    const emailRegex3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex3.test(email);
  };

  const handleRegister3 = async () => {
    const { login, password, mail } = formData3;

    if (!login || !password || !mail) {
      setErrorMessage3('Wszystkie pola muszą być wypełnione.');
      return;
    }

    if (!validateEmail3(mail)) {
      setErrorMessage3('Podaj poprawny adres e-mail.');
      return;
    }

    try {
      const response3 = await axios.post(
        'http://172.28.16.1:8080/Rejestracja/dodawanie/',
        [formData3],
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response3.data.message);
      setRegistrationSuccess3(true);
      setErrorMessage3('');
      navigate3('/'); 
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage3('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
    }
  };

  const handleLogin3 = () => {
    navigate3('/'); 
  };

  return (
    <div className="background3">
      <div className="container3">
        <h1 className="registrationHeader3">Rejestracja</h1>
        {registrationSuccess3 && (
          <p className="successMessage3">Użytkownik zarejestrowany pomyślnie!</p>
        )}
        {errorMessage3 !== '' && (
          <p className="errorMessage3">{errorMessage3}</p>
        )}
        <div className="formContainer3">
          <input
            type="text"
            placeholder="Nazwa użytkownika"
            className="input3"
            onChange={(e) => handleInputChange3('login', e.target.value)}
            value={formData3.login}
          />
          <input
            type="password"
            placeholder="Hasło"
            className="input3"
            onChange={(e) => handleInputChange3('password', e.target.value)}
            value={formData3.password}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="input3"
            onChange={(e) => handleInputChange3('mail', e.target.value)}
            value={formData3.mail}
          />
          <button className="registerButton3" onClick={handleRegister3}>
            Zarejestruj się
          </button>
          <button className="loginButton3" onClick={handleLogin3}>
            Wróć do logowania
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registry;
