'use client'
import CurrentWeather from "@/components/CurrentWeather";
import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import WeatherMap from "@/components/WeatherMap";
import React, { useEffect, useState } from "react";
import { WeatherData } from "@/types/types";
import { fetchCurrentWeather } from "../app/api/weather";

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>('Nairobi');

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const fetchWeatherData = async (location: string) => {
    try {
      const data = await fetchCurrentWeather(location);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = (query: string) => {
    setLocation(query);
  };

  return (
    <div className="p-10">
      <Header onSearch={handleSearch} />
      <main className="flex flex-col items-center justify-between p-20">
        {weatherData ? (
          <>
            <CurrentWeather data={weatherData} />
            <HourlyForecast hourlyData={weatherData.hourly} />
            <WeatherMap lat={weatherData.lat} lon={weatherData.lon} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

export default Home;
