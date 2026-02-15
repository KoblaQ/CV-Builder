import {
  NewAboutMeEntrySchema,
  NewUserEntrySchema,
  UpdateUserEntrySchema,
  NewUserInfoEntrySchema,
  NewWorkExperienceEntrySchema,
  NewEducationEntrySchema,
  NewSkillsCategoryEntrySchema,
  NewSkillEntrySchema,
  NewProjectEntrySchema,
  NewLanguageEntrySchema,
  NewCertificateEntrySchema,
  NewCvDataEntrySchema,
  UpdateCvDataEntrySchema,
} from './utils';
import { z } from 'zod';

// USER INFORMATION
export type IUser = {
  // id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  cvs?: string[];
};

// Non-Sensitive User data
export type NonSensitiveUser = Omit<IUser, 'id'>;

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

// SKILLS Category INFORMATION
export interface SkillsCategory {
  id: string;
  name: string;
  isVisible: boolean;
}

export type SkillEntry = {
  name: string;
  categoryId: string;
  keywords: string[];
  // orderIndex?: number;
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

export type CertificateEntry = {
  name: string;
  issueDate: string;
  expiryDate?: string;
  url?: string;
  isVisible: boolean;
};

// export type CvData = {
//   user: string;
//   cvName: string;
//   personalInfo: UserInfoEntry;
//   aboutMe: AboutMeEntry[];
//   workExperience: WorkExperienceEntry[];
//   education: EducationEntry[];
//   skills: SkillEntry[];
//   projects: ProjectEntry[];
//   languages: LanguageEntry[];
//   certificates?: CertificateEntry[];
// };
export interface CvData {
  user: string;
  cvName: string;
  personalInfo: UserInfoEntry;
  aboutMe: AboutMeEntry[];
  workExperience: WorkExperienceEntry[];
  education: EducationEntry[];
  skills: SkillEntry[];
  projects: ProjectEntry[];
  languages: LanguageEntry[];
  certificates?: CertificateEntry[];
}

// Infer from the schema (./utils)
export type NewUserEntry = z.infer<typeof NewUserEntrySchema>;
export type UpdateUserEntry = z.infer<typeof UpdateUserEntrySchema>;
export type NewUserInfoEntry = z.infer<typeof NewUserInfoEntrySchema>;
export type NewAboutMeEntry = z.infer<typeof NewAboutMeEntrySchema>;
export type NewWorkExperienceEntry = z.infer<
  typeof NewWorkExperienceEntrySchema
>;
export type NewEducationEntry = z.infer<typeof NewEducationEntrySchema>;
export type NewSkillEntry = z.infer<typeof NewSkillEntrySchema>;
export type NewProjectEntry = z.infer<typeof NewProjectEntrySchema>;
export type NewLanguageEntry = z.infer<typeof NewLanguageEntrySchema>;
export type NewCertificateEntry = z.infer<typeof NewCertificateEntrySchema>;
export type NewSkillsCategoryEntry = z.infer<
  typeof NewSkillsCategoryEntrySchema
>;
export type NewCvDataEntry = z.infer<typeof NewCvDataEntrySchema>;
export type UpdateCvDataEntry = z.infer<typeof UpdateCvDataEntrySchema>;
