import React from 'react';

const CurrentWeather = ({ weather }) => {
  return (
    <div className="current-weather">
      <h3>Current Weather</h3>
      <p>Temperature: {weather.temp_c}°C / {weather.temp_f}°F</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.wind_kph} kph</p>
    </div>
  );
};

export default CurrentWeather;