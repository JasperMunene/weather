'use client'
import React from 'react';
import { HourlyWeather } from '@/types/types';
import Image from 'next/image';

interface HourlyForecastProps {
  hourlyData: HourlyWeather[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
  return (
    <section className="flex flex-col items-center bg-slate-200 p-6 rounded-md shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Hourly Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hourlyData.map((hour, index) => (
          <div key={index} className="flex flex-col items-center">
            <span>{new Date(hour.time * 1000).getHours()}:00</span>
            <Image
              src={`http://openweathermap.org/img/wn/${hour.icon}.png`}
              alt="weather icon"
              width={50}
              height={50}
            />
            <span>{hour.temperature}°C</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
