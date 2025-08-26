import React from 'react';

interface WeatherResultProps {
  weather: {
    city: string;
    temperature: number;
    description: string;
  } | null;
}

const WeatherResult: React.FC<WeatherResultProps> = ({ weather }) => {
  if (!weather) {
    return (
      <div className="text-gray-500 text-center">
        No data yet. Search for a city!
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">{weather.city}</h2>
      <p className="text-4xl font-semibold text-blue-600">{weather.temperature}°C</p>
      <p className="text-lg capitalize mt-2">{weather.description}</p>
    </div>
  );
};

export default WeatherResult;
