import express, { Response } from 'express';

import cvService from '../services/cvService';
import { CvData } from '../types';

const router = express.Router();

// router.get('/', (_req, res) => {
//   res.send('Hello from the other side');
// });

// Get all CVs
router.get('/', (_req, res: Response<CvData[]>) => {
  res.send(cvService.getAllCvData());
});

// Get CV by ID
// router.get('/:id', (req, res: Response<CvData | { error: string }>) => {
//   const cv = cvService.findById(String(req.params.id));

//   if (cv) {
//     res.send(cv);
//   } else {
//     res.status(404).send({ error: 'CV not found' });
//   }
// });

export default router;
