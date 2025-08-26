import React, { useState } from 'react';

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
      />
      <button
        type="submit"
        className="bg-[#FFDBB6] text-[#5D688A] px-4 py-2 rounded hover:bg-[#FFDBB6] transition"
      >
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
