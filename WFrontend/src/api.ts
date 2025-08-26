import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchWeather = async (city: string) => {
  const response = await axios.post(`${API_URL}/weather`, { city });
  return response.data;
};

export const getAllWeather = async () => {
  const response = await axios.get(`${API_URL}/weather`);
  return response.data;
};
