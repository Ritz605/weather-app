import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import weatherRoutes from './routes/weatherRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ESM fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', weatherRoutes);

// Serve frontend build
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all for React Router
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
