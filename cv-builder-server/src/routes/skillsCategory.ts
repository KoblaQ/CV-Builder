import express, { Response } from 'express';
import skillsCategoryService from '../services/skillsCategoryService';

import { SkillsCategory } from '../types';

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

export default router;
