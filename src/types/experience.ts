export type ExperienceCategory =
  | 'Full Time'
  | 'Freelence'
  | 'Internship'
  | 'Study';

export type Experience = {
  position: string;
  experienceCategory: ExperienceCategory;
  company: string;
  companyLink?: string;
  logo?: string;
  startDate: string;
  endDate: string;
  shortDesc: string;
  longDesc?: string;
  jobdesc?: string;
};
