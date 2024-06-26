```markdown
# Weather App

A weather application built with Next.js and TypeScript, utilizing the OpenWeatherMap API to provide current weather conditions, hourly forecasts, and weather maps for searched cities.Built by <a href='https://github.com/JasperMunene'>Jasper<a>

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for weather conditions by city
- Display current weather, including temperature, humidity, wind speed, and visibility
- Show hourly weather forecast
- Interactive weather map using Leaflet

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Leaflet](https://leafletjs.com/) for interactive maps
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/JasperMunene/weather.git
cd weather
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:

```plaintext
NEXT_PUBLIC_OPENWEATHERMAP_API=your_api_key_here
```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

## Environment Variables

The following environment variables need to be set in your `.env.local` file:

- `NEXT_PUBLIC_OPENWEATHERMAP_API`: Your OpenWeatherMap API key

## Folder Structure

```
weather-app/
├── components/
│   ├── CurrentWeather.tsx
│   ├── Header.tsx
│   ├── HourlyForecast.tsx
│   ├── SearchBar.tsx
│   └── WeatherMap.tsx
├── app/
│   ├── _page.tsx
│   ├── layout.tsx
│   └── api/
│       └── weather.ts
├── public/
│   ├── favicon.ico
│   └── vercel.svg
├── styles/
│   └── globals.css
├── types/
│   └── types.ts
├── .env.local
├── package.json
└── README.md
```

## Usage

1. **Search for a City:**
   - Use the search bar to enter a city name and press Enter or click the search icon.
   - The application will fetch and display the current weather, hourly forecast, and weather map for the searched city.

2. **Current Weather:**
   - Displays temperature, weather description, humidity, wind speed, visibility, and the country of the searched city.

3. **Hourly Forecast:**
   - Shows the hourly weather forecast for the next 24 hours.

4. **Weather Map:**
   - Displays an interactive weather map centered on the searched city.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

