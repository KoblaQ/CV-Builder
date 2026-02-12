import skillsCategories from '../data/skillsCategories';

import { SkillsCategory } from '../types';

const getAllSkillsCategories = (): SkillsCategory[] => {
  return skillsCategories;
};

const findById = (id: string): SkillsCategory | undefined => {
  const category = skillsCategories.find((category) => category.id === id);
  return category;
};

export default {
  getAllSkillsCategories,
  findById,
};
