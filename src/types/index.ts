export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  status: 'Completed' | 'In Progress' | 'No Longer Accessible';
  featuredImage?: string;
  projectType: 'Client Project' | 'Personal' | 'Proprietary';
  dateCompleted?: string;
  order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  excerpt: string;
  readTimeInMinutes: number;
  coverImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company?: string;
  relationship: string;
  text: string;
  photo?: string;
  linkedInUrl?: string;
  date?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
