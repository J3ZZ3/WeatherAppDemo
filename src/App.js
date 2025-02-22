import React, { useState } from 'react';
import LocationWeather from './components/LocationWeather';
import SearchWeather from './components/SearchWeather';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);
  const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(true);

  console.log('Daily Weather Data:', dailyWeather);

  return (
    <div className="app">
      <h1>Weather App</h1>

      {}
      <SearchWeather
        setWeather={setWeather}
        setHourlyWeather={setHourlyWeather}
        setDailyWeather={setDailyWeather}
      />

      {}
      <LocationWeather
        setWeather={setWeather}
        setHourlyWeather={setHourlyWeather}
        setDailyWeather={setDailyWeather}
        isGeolocationEnabled={isGeolocationEnabled}
      />

      {}
      {weather && <CurrentWeather weather={weather} />}

      {}
      {hourlyWeather && <HourlyForecast hourlyWeather={hourlyWeather} />}

      {}
      {dailyWeather && <DailyForecast dailyWeather={dailyWeather} />}
    </div>
  );
};

export default App;