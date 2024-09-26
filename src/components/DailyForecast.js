import React from 'react';

const DailyForecast = ({ dailyWeather }) => {
  return (
    <div className="daily-forecast">
      <h3>5-Day Forecast</h3>
      <ul>
        {dailyWeather.slice(1, 6).map((day, index) => (
          <li key={index}>
            {day.date}: Avg Temp: {day.day.avgtemp_c}°C / {day.day.avgtemp_f}°F, 
            Humidity: {day.day.avghumidity}%, 
            Wind: {day.day.maxwind_kph} kph
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyForecast;