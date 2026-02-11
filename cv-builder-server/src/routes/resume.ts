import express from 'express';
import cvData from '../data/resumes';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Hello from the other side');
});

router.get('/cvData', (_req, res) => {
  res.send(cvData);
});

export default router;
