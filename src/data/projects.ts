// src/data/projects.ts
import projectsData from "./projects.json";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface GalleryItem {
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription: string;
  videoUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  gallery?: (string | GalleryItem)[];
  tags?: string[];
  metrics?: ProjectMetric[];
}

export const projects: Project[] = projectsData as Project[];

export function getProjectById(id: string): Project | undefined {
  return projects.find(
    (p) => p.id.toLowerCase() === id.toLowerCase() || p.title.toLowerCase() === id.toLowerCase()
  );
}
