export type UserInfoEntry = {
  name: string;
  jobTitle: string;
  location: string | null;
  tel: string;
  email: string;
  linkedIn: string;
  gitHub: string;
};

export type AboutMeEntry = {
  role: string;
  description: string;
  isVisible: boolean;
};

export type WorkExperienceEntry = {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  jobDescription: string[];
  isVisible: boolean;
};

export type EducationEntry = {
  degree: string;
  fieldOfStudy: string;
  institution: string;
  startYear: number;
  endYear: number;
  gpa: string | null;
  isVisible: boolean;
};

export type SkillEntry = {
  name: string;
  category: string;
  keywords: string[];
  orderIndex: number;
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
  expiryDate: Date | null;
  url: string | null;
  isVisible: boolean;
};

export interface CvData {
  personalInfo: UserInfoEntry;
  aboutMe: AboutMeEntry[];
  workExperience: WorkExperienceEntry[];
  education: EducationEntry[];
  skills: SkillEntry[];
  projects: ProjectEntry[];
  languages: LanguageEntry[];
  certifications: CertificationEntry[];
}
