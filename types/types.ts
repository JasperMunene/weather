export interface HourlyWeather {
  time: number;
  temperature: number;
  icon: string;
}

export interface WeatherData {
  location: string;
  country: string;
  lat: number;
  lon: number;
  temperature: number;
  icon: string;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  hourly: HourlyWeather[];
}
