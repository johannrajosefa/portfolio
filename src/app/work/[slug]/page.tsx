import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";

import {
  Meta,
  Schema,
  Column,
  Heading,
  Line,
} from "@once-ui-system/core";

import { baseURL, about, person, work } from "@/resources";
import { Metadata } from "next";

import { Projects } from "@/components/work/Projects";
import { LanguageAwareProject } from "@/components/work/LanguageAwareProject";
import { RelatedProjectsTitle } from "@/components/work/RelatedProjects";
import { ProjectContent } from "@/components/work/ProjectContent";
import { getProject } from "@/utils/getProject";

export async function generateStaticParams(): Promise<
  { slug: string }[]
> {
  const posts = getPosts(["src", "app", "work", "projects"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;

  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);

  const post = posts.find(
    (post) => post.slug === slugPath
  );

  if (!post) {
    return {};
  }

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image:
      post.metadata.image ||
      `/api/og/generate?title=${encodeURIComponent(
        post.metadata.title
      )}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;

  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts([
    "src",
    "app",
    "work",
    "projects",
  ]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((member) => ({
      src: member.avatar,
    })) || [];

  return (
    <Column
      as="section"
      maxWidth="m"
      horizontal="center"
      gap="l"
    >
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(
            post.metadata.title
          )}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Main project content */}
      <LanguageAwareProject
  post={post}
  avatars={avatars}
/>

<ProjectContent content={post.content} />

      {/* Related projects */}
      <Column
        fillWidth
        gap="40"
        horizontal="center"
        marginTop="40"
      >
        <Line maxWidth="40" />

        <RelatedProjectsTitle />

        <Projects
          exclude={[post.slug]}
          range={[2]}
        />
      </Column>
    </Column>
  );
}