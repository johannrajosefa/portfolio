import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsPath = path.join(
  process.cwd(),
  "src",
  "app",
  "work",
  "projects"
);

export interface ProjectData {
  metadata: {
    title: string;
    subtitle?: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
    tag?: string;
    team: {
      name: string;
      role: string;
      avatar: string;
      linkedIn: string;
    }[];
    link?: string;
  };
  slug: string;
  content: string;
}

function readProject(fileName: string): ProjectData | null {
  const filePath = path.join(projectsPath, fileName);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  return {
    slug: fileName.replace(/\.mdx$/, "").replace(/\.fr$/, ""),
    metadata: {
      title: data.title || "",
      subtitle: data.subtitle || "",
      publishedAt: data.publishedAt || "",
      summary: data.summary || "",
      image: data.image || "",
      images: data.images || [],
      tag: data.tag || "",
      team: data.team || [],
      link: data.link || "",
    },
    content,
  };
}

export function getProject(slug: string) {
  const english = readProject(`${slug}.mdx`);
  const french = readProject(`${slug}.fr.mdx`);

  if (!english && !french) {
    return null;
  }

  return {
    en: english,
    fr: french,
  };
}