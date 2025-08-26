import { Request, Response } from 'express';
import pool from '../db/connection.js';
import { fetchWeather } from '../services/weatherService.js';

export const getWeather = async (req: Request, res: Response) => {
  try {
    const { city } = req.body;
    const weather = await fetchWeather(city);

    await pool.query(
      'INSERT INTO weather(city, temperature, description) VALUES($1, $2, $3)',
      [weather.city, weather.temperature, weather.description]
    );

    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
};

export const getAllWeather = async (_req: Request, res: Response) => {
  const result = await pool.query('SELECT * FROM weather ORDER BY created_at DESC');
  res.json(result.rows);
};
