export interface ExperienceData {
  title: string;
  subTitle: string;
  activities: string[];
  date: string;
  key: string;
}

export interface ProjectData {
  title: string;
  key: string;
  images: string[];
  github?: string;
  website?: string;
  android?: string;
  ios?: string;
  description: string;
}
