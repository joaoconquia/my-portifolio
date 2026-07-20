export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  year: string;
  visitUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  iconName: string;
}
