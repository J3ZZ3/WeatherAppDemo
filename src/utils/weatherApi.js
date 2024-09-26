import axios from 'axios';

const API_KEY = '9a6597aa5e5c415d98284905242609';

export const getWeatherByCity = async (cityName) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`;
  const response = await axios.get(url);
  return {
    temp_c: response.data.current.temp_c,
    temp_f: response.data.current.temp_f,
    humidity: response.data.current.humidity,
    wind_kph: response.data.current.wind_kph,
  };
};

export const getDailyWeatherByCity = async (cityName, days) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=${days}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data.forecast.forecastday;
};

export const getHourlyWeatherByCity = async (cityName) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=1`;
  const response = await axios.get(url);
  const hourlyData = response.data.forecast.forecastday[0].hour;

  const currentHour = new Date().getHours();
  const nextSixHours = hourlyData.filter((hour) => {
    const hourTime = new Date(hour.time).getHours();
    return hourTime >= currentHour && hourTime < currentHour + 6;
  });

  return nextSixHours.map(hour => ({
    time: hour.time,
    temp_c: hour.temp_c,
    temp_f: hour.temp_f,
    humidity: hour.humidity,
    wind_kph: hour.wind_kph,
  }));
};