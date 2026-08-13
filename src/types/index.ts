export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  iconName?: string;
  badge?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: "Production" | "Backend" | "Full Stack" | "Mobile";
  role: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  architectureNotes?: string[];
  isFeatured: boolean;
  accentColor: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-Time" | "Internship" | "Contract / Freelance" | "Self-Employed";
  technologies: string[];
  summary: string;
  bullets: string[];
  liveUrl?: string;
  verified?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights?: string[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
  handle: string;
}

export interface ArchitectureHighlight {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  diagram: {
    steps: {
      title: string;
      description: string;
      tech: string;
    }[];
  };
  metrics: string[];
}
