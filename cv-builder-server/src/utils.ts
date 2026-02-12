import {
  NewUserEntry,
  UserInfoEntry,
  AboutMeEntry,
  WorkExperienceEntry,
  EducationEntry,
  NewSkillsCategoryEntry,
  SkillEntry,
  ProjectEntry,
  LanguageEntry,
  CertificateEntry,
} from './types';

import { z } from 'zod';

// User Entry Schema
export const NewUserEntrySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  cvs: z.array(z.string()).optional(),
});

export const toNewUserEntry = (object: unknown): NewUserEntry => {
  return NewUserEntrySchema.parse(object);
};

// UserInfo Entry Schema
export const NewUserInfoEntrySchema = z.object({
  name: z.string(),
  jobTitle: z.string(),
  location: z.string().optional(),
  tel: z.string(),
  email: z.string(),
  linkedIn: z.string(),
  gitHub: z.string().optional(),
});

export const toNewUserInfoEntry = (object: unknown): UserInfoEntry => {
  return NewUserInfoEntrySchema.parse(object);
};

// AboutMe Entry Schema
export const NewAboutMeEntrySchema = z.object({
  role: z.string(),
  description: z.string(),
  isVisible: z.boolean(),
});

export const toNewAboutMeEntry = (object: unknown): AboutMeEntry => {
  return NewAboutMeEntrySchema.parse(object);
};

// WorkExperience Entry Schema
export const NewWorkExperienceEntrySchema = z.object({
  companyName: z.string(),
  position: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  jobDescription: z.array(z.string()),
  isVisible: z.boolean(),
});

export const toNewWorkExperienceEntry = (
  object: unknown,
): WorkExperienceEntry => {
  return NewWorkExperienceEntrySchema.parse(object);
};

// Education Entry Schema
export const NewEducationEntrySchema = z.object({
  degree: z.string(),
  fieldOfStudy: z.string(),
  institution: z.string(),
  startYear: z.number(),
  endYear: z.number().optional(),
  gpa: z.string().optional(),
  isVisible: z.boolean(),
});

export const toNewEducationEntry = (object: unknown): EducationEntry => {
  return NewEducationEntrySchema.parse(object);
};

// SkillsCategory Entry Schema
export const NewSkillsCategoryEntrySchema = z.object({
  name: z.string(),
});

export const toNewSkillsCategoryEntry = (
  object: unknown,
): NewSkillsCategoryEntry => {
  return NewSkillsCategoryEntrySchema.parse(object);
};

// Skill Entry Schema
export const NewSkillEntrySchema = z.object({
  name: z.string(),
  categoryId: z.string(),
  keywords: z.array(z.string()),
  // orderIndex: z.number().optional(),
  isVisible: z.boolean(),
});

export const toNewSkillEntry = (object: unknown): SkillEntry => {
  return NewSkillEntrySchema.parse(object);
};

// Project Entry Schema
export const NewProjectEntrySchema = z.object({
  name: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  url: z.string(),
  isVisible: z.boolean(),
});

export const toNewProjectEntry = (object: unknown): ProjectEntry => {
  return NewProjectEntrySchema.parse(object);
};

// Language Entry Schema
export const NewLanguageEntrySchema = z.object({
  language: z.string(),
  proficiency: z.string(),
  isVisible: z.boolean(),
});

export const toNewLanguageEntry = (object: unknown): LanguageEntry => {
  return NewLanguageEntrySchema.parse(object);
};

// Certificates Entry Schema
export const NewCertificateEntrySchema = z.object({
  name: z.string(),
  issueDate: z.string(),
  expiryDate: z.string().optional(),
  url: z.string().optional(),
  isVisible: z.boolean(),
});

export const toNewCertificateEntry = (object: unknown): CertificateEntry => {
  return NewCertificateEntrySchema.parse(object);
};
