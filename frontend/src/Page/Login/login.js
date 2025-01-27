import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage('');
    try {
      const response = await axios.post(
        'http://172.28.16.1:8080/auth/login',
        { login, haslo: password },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status === 200) {
        const { token, userId } = response.data;
        console.log('JWT Token:', token);
        console.log('User ID:', userId);
        console.log('Login :', login);

        localStorage.setItem('token', token);
        localStorage.setItem('userId', String(userId));
        localStorage.setItem('login', String(login));

        navigate('/HomePage');
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Invalid username or password');
      } else {
        setErrorMessage('Could not connect to the server. Please try again later.');
      }
    }
  };

  const handleRegister = () => {
    navigate('/registry');
  };

  const handleRemind = () => {
    navigate('Remind-Password');
  };

  return (
    <div className="backgroundv2">
      <div className="containerv2">
        <h1 className="headerTextv2">Logowanie</h1>
        {errorMessage && <p className="errorMessagev2">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Nazwa użytkownika"
          className="inputv2"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <input
          type="password"
          placeholder="Hasło"
          className="inputv2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="loginButtonv2" onClick={handleLogin}>
          Zaloguj się
        </button>
        <button className="remindButtonv2" onClick={handleRemind}>
          Przypomnij Hasło
        </button>
        <button className="registerButtonv2" onClick={handleRegister}>
          Zarejestruj się
        </button>
      </div>
    </div>
  );
};

export default Login;
