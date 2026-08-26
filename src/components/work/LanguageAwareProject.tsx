"use client";

import {
  AvatarGroup,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
} from "@once-ui-system/core";

import { formatDate } from "@/utils/formatDate";
import { useLanguage } from "@/components/LanguageContext";

interface LanguageAwareProjectProps {
  post: any;
  frenchPost: any;
  avatars: { src: string }[];
}

export function LanguageAwareProject({
  post,
  frenchPost,
  avatars,
}: LanguageAwareProjectProps) {
  const { language } = useLanguage();

  const isFrench = language === "fr";

  const currentPost =
    language === "fr" && frenchPost
      ? frenchPost
      : post;

  const labels = {
    en: {
      projects: "Projects",
    },
    fr: {
      projects: "Projets",
    },
  };

  const text = labels[language];

  return (
    <>
      <Column
        as="section"
        maxWidth="m"
        horizontal="center"
        gap="l"
      >
        <Column
          maxWidth="s"
          gap="16"
          horizontal="center"
          align="center"
        >
          <SmartLink href="/work">
            <Text variant="label-strong-m">
              {text.projects}
            </Text>
          </SmartLink>

          <Text
            variant="body-default-xs"
            onBackground="neutral-weak"
            marginBottom="12"
          >
            {currentPost.metadata.publishedAt &&
              formatDate(currentPost.metadata.publishedAt)}
          </Text>

          <Heading variant="display-strong-m">
            {currentPost.metadata.title}
          </Heading>
        </Column>

        <Row
          marginBottom="32"
          horizontal="center"
        >
          <Row gap="16" vertical="center">
            {currentPost.metadata.team && (
              <AvatarGroup
                reverse
                avatars={avatars}
                size="s"
              />
            )}

            <Text
              variant="label-default-m"
              onBackground="brand-weak"
            >
              {currentPost.metadata.team?.map(
                (member: any, index: number) => (
                  <span key={index}>
                    {index > 0 && (
                      <Text
                        as="span"
                        onBackground="neutral-weak"
                      >
                        ,{" "}
                      </Text>
                    )}

                    {member.linkedIn ? (
                      <SmartLink href={member.linkedIn}>
                        {member.name}
                      </SmartLink>
                    ) : (
                      member.name
                    )}
                  </span>
                )
              )}
            </Text>
          </Row>
        </Row>

        {currentPost.metadata.images?.length > 0 && (
          <Media
            priority
            aspectRatio="16 / 9"
            radius="m"
            alt={currentPost.metadata.title}
            src={currentPost.metadata.images[0]}
          />
        )}

        {/* 
          Both MDX versions are rendered on the SERVER.
          This avoids the MDXRemote async Client Component problem.
        */}
        <div
          style={{
            width: "100%",
            display: isFrench ? "none" : "block",
          }}
        >
        </div>

        {post.translation && (
          <div
            style={{
              width: "100%",
              display: isFrench ? "block" : "none",
            }}
          >
          
          </div>
        )}
      </Column>
    </>
  );
}