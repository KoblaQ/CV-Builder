import express from 'express';
import cors from 'cors';
// import mongoose from 'mongoose';
import { MONGODB_URI, connectDB } from './utils/config';

import cvRouter from './routes/cv';
import userRouter from './routes/user';
import skillsCategoryRouter from './routes/skillsCategory';

connectDB(MONGODB_URI); // connect to MongoDB before starting the server

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
app.use('/api/skillsCategories', skillsCategoryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
