import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RemindPassword.css';

const RemindPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!email || !newPassword) {
      alert('Please fill in both fields.');
      return;
    }

    try {
      const response = await fetch('http://172.28.16.1:8080/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      if (response.ok) {
        alert('Password has been reset successfully.');
        navigate('/login');
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      alert('An error occurred while resetting the password.');
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="remind-password">
      <div className="container">
        <h1 className="header-text">RESET PASSWORD</h1>

        <input
          className="input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button className="reset-button" onClick={handleResetPassword}>
          Reset Password
        </button>

        <button className="go-back-button" onClick={handleGoBack}>
          Wróć do logowania
        </button>
      </div>
    </div>
  );
};

export default RemindPassword;
