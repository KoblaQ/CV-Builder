import { Schema, model } from 'mongoose';
import {
  AboutMeEntry,
  CertificateEntry,
  CvData,
  EducationEntry,
  LanguageEntry,
  ProjectEntry,
  SkillEntry,
  UserInfoEntry,
  WorkExperienceEntry,
} from '../types';

export const userInfoEntrySchema = new Schema<UserInfoEntry>({
  name: String,
  jobTitle: String,
  location: String,
  tel: String,
  email: String,
  linkedIn: String,
  gitHub: String,
});

export const aboutMeSchema = new Schema<AboutMeEntry>({
  role: String,
  description: String,
  isVisible: Boolean,
});

export const workExperienceSchema = new Schema<WorkExperienceEntry>({
  companyName: String,
  position: String,
  startDate: String,
  endDate: String,
  jobDescription: [String],
  isVisible: Boolean,
});

export const educationSchema = new Schema<EducationEntry>({
  degree: String,
  fieldOfStudy: String,
  institution: String,
  startYear: Number,
  endYear: Number,
  gpa: String,
  isVisible: Boolean,
});

export const skillSchema = new Schema<SkillEntry>({
  name: String,
  categoryId: String,
  keywords: [String],
  isVisible: Boolean,
});

export const projectSchema = new Schema<ProjectEntry>({
  name: String,
  description: String,
  techStack: [String],
  url: String,
  isVisible: Boolean,
});

export const languageSchema = new Schema<LanguageEntry>({
  language: String,
  proficiency: String,
  isVisible: Boolean,
});

export const certificateSchema = new Schema<CertificateEntry>({
  name: String,
  issueDate: String,
  expiryDate: String,
  url: String,
  isVisible: Boolean,
});

const cvSchema = new Schema<CvData>({
  user: String,
  // user: {type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true},
  cvName: String,
  personalInfo: userInfoEntrySchema,
  aboutMe: [aboutMeSchema],
  workExperience: [workExperienceSchema],
  education: [educationSchema],
  skills: [skillSchema],
  projects: [projectSchema],
  languages: [languageSchema],
  certificates: [certificateSchema],
});

cvSchema.set('toJSON', {
  transform: (_document, returnedObject: Record<string, any>) => {
    returnedObject.id = returnedObject._id?.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const CV = model<CvData>('CV', cvSchema);

export default CV;
