import { notFound } from "next/navigation";
import {
  Meta,
  Schema,
  Column,
  Line,
} from "@once-ui-system/core";

import { baseURL, about, person, work } from "@/resources";
import { Metadata } from "next";

import { Projects } from "@/components/work/Projects";
import { LanguageAwareProject } from "@/components/work/LanguageAwareProject";
import { LanguageAwareProjectContent } from "@/components/work/LanguageAwareProjectContent";
import { RelatedProjectsTitle } from "@/components/work/RelatedProjects";
import { ProjectContent } from "@/components/work/ProjectContent";

import { getPosts } from "@/utils/utils";
import { getProject } from "@/utils/getProject";

export async function generateStaticParams(): Promise<
  { slug: string }[]
> {
  const posts = getPosts([
    "src",
    "app",
    "work",
    "projects",
  ]);

  // Only generate routes for English/base projects.
  // French files such as malou.fr.mdx are not separate routes.
  const slugs = posts
    .map((post) => post.slug)
    .filter((slug) => !slug.endsWith(".fr"));

  return slugs.map((slug) => ({
    slug,
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

  const project = getProject(slugPath);

  if (!project) {
    return {};
  }

  const post = project.en || project.fr;

  if (!post) {
    return {};
  }

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image:
      post.metadata.image ||
      `/api/og/generate?title=${encodeURIComponent(
        post.metadata.title
      )}`,
    path: `${work.path}/${slugPath}`,
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

  const project = getProject(slugPath);

  if (!project) {
    notFound();
  }

  const post = project.en || project.fr;

  if (!post) {
    notFound();
  }

  const frenchPost = project.fr;

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
        path={`${work.path}/${slugPath}`}
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

      {/* Project header */}
      <LanguageAwareProject
        post={post}
        frenchPost={frenchPost}
        avatars={avatars}
      />

      {/* Project content */}
      <LanguageAwareProjectContent
        englishContent={
          project.en ? (
            <ProjectContent content={project.en.content} />
          ) : null
        }
        frenchContent={
          project.fr ? (
            <ProjectContent content={project.fr.content} />
          ) : null
        }
      />

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
          exclude={[slugPath]}
          range={[2]}
        />
      </Column>
    </Column>
  );
}