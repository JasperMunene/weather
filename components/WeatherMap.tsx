// components/WeatherMap.tsx
'use client'
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface WeatherMapProps {
  lat: number;
  lon: number;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ lat, lon }) => {
  return (
    <div className="w-full h-96 mt-8">
      <MapContainer center={[lat, lon]} zoom={10} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API}`}
          attribution='&copy; <a href="https://www.openweathermap.org">OpenWeatherMap</a>'
        />
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
