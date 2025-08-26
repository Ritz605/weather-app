import { Router } from 'express';
import { getWeather, getAllWeather } from '../controllers/weatherController.js';

const router = Router();

router.post('/weather', getWeather);
router.get('/weather', getAllWeather);

export default router;
