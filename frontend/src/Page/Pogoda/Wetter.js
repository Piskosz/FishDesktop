import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Wetter.css';

const Wetter = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const getCityFromLocation = (latitude, longitude) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=e3d7873db4537bbeb2abd5161168df65&units=metric`
      )
      .then((response) => {
        setCity(response.data.name);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych pogodowych:', error);
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getCityFromLocation(latitude, longitude);
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="background-wetter">
      <div className="container-wetter">
        <div className="header-container-wetter">
        </div>

        {weatherData && (
          <div className="weather-container-wetter">
            <h1 className="sub-header-text-wetter">{city || weatherData.name}</h1>
            <p className="nearby-text-wetter">
              {weatherData.weather[0].main} - {weatherData.weather[0].description}
            </p>
            <p className="nearby-text-wetter">Temperatura: {weatherData.main.temp}°C</p>
            <p className="nearby-text-wetter">Wilgotność: {weatherData.main.humidity}%</p>
            <p className="nearby-text-wetter">Ciśnienie: {weatherData.main.pressure} hPa</p>
            <p className="nearby-text-wetter">Temperatura minimalna: {weatherData.main.temp_min}°C</p>
            <p className="nearby-text-wetter">Temperatura maksymalna: {weatherData.main.temp_max}°C</p>
            <p className="nearby-text-wetter">Prędkość wiatru: {weatherData.wind.speed} m/s</p>
            <p className="nearby-text-wetter">Widoczność: {weatherData.visibility / 1000} km</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wetter;
