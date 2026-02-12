import express, { Response, Request, NextFunction } from 'express';
import skillsCategoryService from '../services/skillsCategoryService';

import { NewSkillsCategoryEntry, SkillsCategory } from '../types';
import { NewSkillsCategoryEntrySchema } from '../utils';

import { z } from 'zod';

const router = express.Router();

// Get all categories
router.get('/', (_req, res: Response<SkillsCategory[]>) => {
  res.send(skillsCategoryService.getAllSkillsCategories());
});

// Get category by id
router.get('/:id', (req, res: Response<SkillsCategory | { error: string }>) => {
  const category = skillsCategoryService.findById(req.params.id);

  if (category) {
    res.send(category);
  } else {
    res.status(404).send({ error: 'Requested Category not found' });
  }
});

// Add Category (Using Zod for validation)
const newCategoryParser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    NewSkillsCategoryEntrySchema.parse(req.body);
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
  newCategoryParser,
  (
    req: Request<unknown, unknown, NewSkillsCategoryEntry>,
    res: Response<SkillsCategory>,
  ) => {
    const addedEntry = skillsCategoryService.AddCategory(req.body);
    res.json(addedEntry);
  },
);

router.use(errorMiddleWare);

export default router;
