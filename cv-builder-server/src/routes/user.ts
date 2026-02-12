import express, { NextFunction, Request, Response } from 'express';
import userService from '../services/userService';

import { NewUserEntrySchema } from '../utils';
import { z } from 'zod';

import { NewUserEntry, User } from '../types';

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

// Add User (Using Zod for Validation)
const newUserParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewUserEntrySchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

const errorMiddleWare = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

router.post(
  '/',
  newUserParser,
  async (req: Request<unknown, unknown, NewUserEntry>, res: Response<User>) => {
    const addedEntry = await userService.addUser(req.body);
    res.json(addedEntry);
  },
);

router.use(errorMiddleWare);
export default router;
