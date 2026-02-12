import { v1 as uuid } from 'uuid';

import skillsCategories from '../data/skillsCategories';

import { SkillsCategory, NewSkillsCategoryEntry } from '../types';

const getAllSkillsCategories = (): SkillsCategory[] => {
  return skillsCategories;
};

const findById = (id: string): SkillsCategory | undefined => {
  const category = skillsCategories.find((category) => category.id === id);
  return category;
};

// Add Category (if needed in the future)
const AddCategory = (entry: NewSkillsCategoryEntry): SkillsCategory => {
  // const { name } = entry;
  const newCategoryEntry = {
    ...entry,
    id: uuid(),
    isVisible: true, // ADD isVisible property when creating a new category
  };
  skillsCategories.push(newCategoryEntry);
  return newCategoryEntry;
};

export default {
  getAllSkillsCategories,
  findById,
  AddCategory,
};
