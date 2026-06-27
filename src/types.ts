export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'AI' | 'Engineering' | 'Software';
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'experience' | 'certification';
  iconName: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
