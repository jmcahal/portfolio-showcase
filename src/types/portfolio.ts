export interface SiteProfile {
  name: string;
  headline: string;
  subheadline: string;
  bio: string;
  shortAbout: string;
  location: string;
  tagline: string;
  resumeUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
}

export interface Project {
  title: string;
  status: string;
  role: string;
  shortDescription: string;
  expandedDescription: string;
  whyItMatters: string;
  techStack: string[];
  contributions: string[];
  outcomes?: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  imageUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
