import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

export type ProjectPost = {
  metadata: Metadata;
  slug: string;
  content: string;

  translation?: {
    metadata: Metadata;
    content: string;
    slug: string;
  };
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt || "",
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || "",
    team: data.team || [],
    link: data.link || "",
  };

  return {
    metadata,
    content,
  };
}

function getMDXData(dir: string): ProjectPost[] {
  const mdxFiles = getMDXFiles(dir);

  // French files are handled as translations of their English
  // counterparts and should NOT appear as separate projects.
  const englishFiles = mdxFiles.filter(
    (file) => !file.endsWith(".fr.mdx")
  );

  return englishFiles.map((file) => {
    const filePath = path.join(dir, file);

    const { metadata, content } = readMDXFile(filePath);

    const slug = path.basename(
      file,
      path.extname(file)
    );

    // Example:
    // malou.mdx -> malou.fr.mdx
    const frenchFile = `${slug}.fr.mdx`;
    const frenchFilePath = path.join(dir, frenchFile);

    let translation: ProjectPost["translation"] = undefined;

    if (fs.existsSync(frenchFilePath)) {
      const french = readMDXFile(frenchFilePath);

      translation = {
        metadata: french.metadata,
        content: french.content,
        slug,
      };
    }

    return {
      metadata,
      slug,
      content,
      translation,
    };
  });
}

export function getPosts(
  customPath = ["", "", "", ""]
): ProjectPost[] {
  const postsDir = path.join(process.cwd(), ...customPath);

  return getMDXData(postsDir);
}