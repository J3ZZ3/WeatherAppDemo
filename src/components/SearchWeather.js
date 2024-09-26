import React, { useState } from 'react';
import { getWeatherByCity, getHourlyWeatherByCity, getDailyWeatherByCity } from '../utils/weatherApi';

const SearchWeather = ({ setWeather, setHourlyWeather, setDailyWeather }) => {
  const [cityName, setCityName] = useState('');


  const handleSearch = async () => {
    const weatherData = await getWeatherByCity(cityName);
    setWeather(weatherData);

    const hourlyData = await getHourlyWeatherByCity(cityName);
    setHourlyWeather(hourlyData);

    const DailyData = await getDailyWeatherByCity(cityName,7);
    setDailyWeather(DailyData);
    
  };


  return (
    <div className="search-weather">
      
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter City Name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchWeather;