import {
  NewUserEntry,
  UserInfoEntry,
  AboutMeEntry,
  WorkExperienceEntry,
  EducationEntry,
  SkillEntry,
  ProjectEntry,
  LanguageEntry,
  CertificationEntry,
} from './types';

import { object, z } from 'zod';

// User Entry Schema
export const NewUserEntrySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  passwordHash: z.string(),
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

export const toNewAboutMeEntrySchema = (object: unknown): AboutMeEntry => {
  return NewAboutMeEntrySchema.parse(object);
};

// WorkExperience Entry Schema
export const NewWorkExperienceSchema = z.object({
  companyName: z.string(),
  position: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  jobDescription: z.array(z.string()),
  isVisible: z.boolean(),
});

export const toNewWorkExperienceSchema = (
  object: unknown,
): WorkExperienceEntry => {
  return NewWorkExperienceSchema.parse(object);
};

//
