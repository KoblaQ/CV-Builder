import express, { Response } from 'express';
import userService from '../services/userService';

import { User } from '../types';

const router = express.Router();

// Get all users
router.get('/', (_req, res: Response<User[]>) => {
  res.send(userService.getAllUsers());
});

// Get user by id
router.get('/:id', (req, res: Response<User | { error: string }>) => {
  const user = userService.findById(String(req.params.id));

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

// Add User
// router.post()

export default router;
