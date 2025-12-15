export type Category = 'All' | 'Data' | 'Engineering' | 'Art' | 'Design';

export interface Project {
  id: number;
  title: string;
  category: Category;
  tags: string[];
  year: string;
  shortDescription: string;
  fullDescription: string;
  process?: string[]; 
  challenge: string;
  solution: string;
  image: string; 
  size: 'small' | 'medium' | 'large';
  gallery?: string[]; 
}

export interface TimelineItem {
  id: number;
  year: string;
  role: string;
  organization: string;
  description: string;
  type: 'education' | 'extracurricular';
}