import {
  NewAboutMeEntrySchema,
  NewUserEntrySchema,
  NewUserInfoEntrySchema,
  NewWorkExperienceSchema,
} from './utils';
import { z } from 'zod';

// USER INFORMATION
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  cvs?: string[];
};

// Non-Sensitive User data
export type NonSensitiveUser = Omit<User, 'id'>;

export type UserInfoEntry = {
  name: string;
  jobTitle: string;
  location?: string;
  tel: string;
  email: string;
  linkedIn: string;
  gitHub?: string;
};

export type AboutMeEntry = {
  role: string;
  description: string;
  isVisible: boolean;
};

export type WorkExperienceEntry = {
  companyName: string;
  position: string;
  startDate: string;
  endDate?: string;
  jobDescription: string[];
  isVisible: boolean;
};

export type EducationEntry = {
  degree: string;
  fieldOfStudy: string;
  institution: string;
  startYear: number;
  endYear?: number;
  gpa?: string;
  isVisible: boolean;
};

export type SkillEntry = {
  name: string;
  category: string;
  keywords: string[];
  orderIndex?: number;
  isVisible: boolean;
};

export type ProjectEntry = {
  name: string;
  description: string;
  techStack: string[];
  url: string;
  isVisible: boolean;
};

export type LanguageEntry = {
  language: string;
  proficiency: string;
  isVisible: boolean;
};

export type CertificationEntry = {
  name: string;
  issueDate: Date;
  expiryDate?: Date;
  url?: string;
  isVisible: boolean;
};

export interface CvData {
  id: string;
  personalInfo: UserInfoEntry;
  aboutMe: AboutMeEntry[];
  workExperience: WorkExperienceEntry[];
  education: EducationEntry[];
  skills: SkillEntry[];
  projects: ProjectEntry[];
  languages: LanguageEntry[];
  certifications?: CertificationEntry[];
}

// Infer from the schema
export type NewUserEntry = z.infer<typeof NewUserEntrySchema>;
export type NewUserInfoEntry = z.infer<typeof NewUserInfoEntrySchema>;
export type NewAboutMeEntry = z.infer<typeof NewAboutMeEntrySchema>;
export type NewWorkExperienceEntry = z.infer<typeof NewWorkExperienceSchema>;
