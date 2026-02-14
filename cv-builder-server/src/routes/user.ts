import express, { NextFunction, Request, Response } from 'express';
import userService from '../services/userService';

import { NewUserEntrySchema, UpdateUserEntrySchema } from '../utils';
import { z } from 'zod';

import { NewUserEntry, IUser, UpdateUserEntry } from '../types';

const router = express.Router();

// Get all users
router.get('/', async (_req, res: Response<IUser[]>) => {
  const users = await userService.getAllUsers();
  res.send(users);
});

// Get user by id
router.get('/:id', async (req, res: Response<IUser | { error: string }>) => {
  const user = await userService.findById(String(req.params.id));

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

// Delete user by id
router.delete('/:id', async (req, res: Response<IUser | { error: string }>) => {
  const deletedUser = await userService.deleteUser(req.params.id);

  if (deletedUser) {
    return res.status(204).end();
  } else {
    return res.status(401).json({ error: 'User not found' });
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

// ADD USER
router.post(
  '/',
  newUserParser,
  async (
    req: Request<unknown, unknown, NewUserEntry>,
    res: Response<IUser>,
  ) => {
    const addedEntry = await userService.addUser(req.body);
    res.json(addedEntry);
  },
);

// Update User using ZOD Validator
const updateUserParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    UpdateUserEntrySchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

router.put(
  '/:id',
  updateUserParser,
  async (
    req: Request<{ id: string }, unknown, UpdateUserEntry>,
    res: Response<IUser | { error: string }>,
  ) => {
    const id = req.params.id;
    const updateFields: Partial<IUser> = req.body;
    const updatedEntry = await userService.updateUser(id, updateFields);
    res.json(updatedEntry ?? { error: 'Error updating' });
  },
);

router.use(errorMiddleWare);
export default router;
