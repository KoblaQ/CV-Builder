import express from 'express';
import cors from 'cors';

import cvRouter from './routes/cv';
import userRouter from './routes/user';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('Ping from cv builder');
  res.send('pong cv builder');
});

app.use('/api/cv', cvRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
