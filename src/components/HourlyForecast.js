import React from 'react';

const HourlyForecast = ({ hourlyWeather }) => {
  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <ul>
        {hourlyWeather.map((hour, index) => (
          <li key={index}>
            {hour.time}: {hour.temp_c}°C / {hour.temp_f}°F, Humidity: {hour.humidity}%, Wind: {hour.wind_kph} kph
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyForecast;