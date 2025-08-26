import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchWeather as fetchWeatherAPI } from './api'; 
import './App.css'
interface WeatherData {
  city: string;
  temperature: number;
  description: string;
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeatherAPI(city); // ✅ use centralized API function
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 p-6 gap-6 bg-gray-100">
        {/* Left Section */}
        <div className="w-1/2 bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Search Weather</h2>
          <WeatherForm onSearch={handleSearch} />
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center">
          <WeatherResult weather={weather} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
