import { cookies } from "next/headers";
import { getPosts } from "@/utils/utils";

export async function getProject(
  slug: string
) {
  const cookieStore = await cookies();

  const languageCookie = cookieStore.get("language")?.value;

  const language =
    languageCookie === "fr" ? "fr" : "en";

  const posts = getPosts([
    "src",
    "app",
    "work",
    "projects",
  ]);

  const project = posts.find(
    (post) =>
      post.slug === slug &&
      post.language === language
  );

  // Fallback to English if French version doesn't exist
  if (!project && language === "fr") {
    return posts.find(
      (post) =>
        post.slug === slug &&
        post.language === "en"
    );
  }

  return project;
}