'use client'
import React from 'react';
import { WeatherData } from '@/types/types';
import Image from 'next/image';

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <section className="flex flex-col items-center bg-slate-200 p-6 rounded-md shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-2">{data.location}, {data.country}</h2> {/* Update this line */}
      <div className="flex items-center mb-4">
        <Image
          src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="weather icon"
          width={100}
          height={100}
        />
        <div className="ml-4">
          <p className="text-2xl">{data.temperature}°C</p>
          <p className="text-lg">{data.description}</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <span>Humidity:</span>
          <span>{data.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span>Wind Speed:</span>
          <span>{data.windSpeed} m/s</span>
        </div>
        <div className="flex justify-between">
          <span>Visibility:</span>
          <span>{data.visibility} km</span>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
