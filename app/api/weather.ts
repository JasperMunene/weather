import { WeatherData, HourlyWeather } from '@/types/types';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (location: string): Promise<WeatherData> => {
  const response = await fetch(`${BASE_URL}/weather?q=${location}&appid=${API_KEY}&units=metric`);
  const data = await response.json();

  const forecastResponse = await fetch(`${BASE_URL}/forecast?q=${location}&appid=${API_KEY}&units=metric`);
  const forecastData = await forecastResponse.json();

  const hourlyData: HourlyWeather[] = forecastData.list.slice(0, 8).map((entry: any) => ({
    time: entry.dt,
    temperature: entry.main.temp,
    icon: entry.weather[0].icon,
  }));

  console.log(hourlyData)


  return {
    location: data.name,
    country: data.sys.country,
    lat: data.coord.lat,
    lon: data.coord.lon,
    temperature: data.main.temp,
    icon: data.weather[0].icon,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    visibility: data.visibility / 1000,
    hourly: hourlyData,
  };
};
