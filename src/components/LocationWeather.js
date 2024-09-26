import { useEffect } from 'react';
import { getWeatherByCity, getHourlyWeatherByCity, getDailyWeatherByCity } from '../utils/weatherApi';

const LocationWeather = ({ setWeather, setHourlyWeather, setDailyWeather, isGeolocationEnabled }) => {
  useEffect(() => {
    if (isGeolocationEnabled) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const weatherData = await getWeatherByCity(`${lat},${lon}`);
          setWeather(weatherData);

          const hourlyData = await getHourlyWeatherByCity(`${lat},${lon}`);
          setHourlyWeather(hourlyData);

          const dailyData = await getDailyWeatherByCity(`${lat},${lon}`);
          setDailyWeather(dailyData);
          
        },
        (error) => console.log(error),
        { enableHighAccuracy: true }
      );
    }
  }, [isGeolocationEnabled, setWeather, setHourlyWeather, setDailyWeather]);

  return;
};

export default LocationWeather;