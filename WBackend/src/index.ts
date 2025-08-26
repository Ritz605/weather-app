import express from 'express';
import cors from 'cors';
import weatherRoutes from './routes/weatherRoute';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', weatherRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));



import path from 'path';

const __dirname1 = path.resolve();

// Serve frontend
app.use(express.static(path.join(__dirname1, 'frontend/build')));

app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname1, 'frontend', 'build', 'index.html'));
});