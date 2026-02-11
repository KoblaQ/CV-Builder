import express from 'express';
// import cors from 'cors';

import cvRouter from './routes/resume';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('Ping from cv builder');
  res.send('pong cv builder');
});

app.use('/api/cv', cvRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
