
export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  about: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tags?: string[];
}

export interface Project {
  title: string;
  period: string;
  technologies: string[];
  description: string[];
  repoUrl?: string;
  liveUrl?: string;
  category: 'fullstack' | 'ai' | 'ml';
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
  url: string;
  description: string;
}
