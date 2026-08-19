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
  avatars: { src: string }[];
}

export function LanguageAwareProject({
  post,
  avatars,
}: LanguageAwareProjectProps) {
  const { language } = useLanguage();

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
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
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
          {post.metadata.publishedAt &&
            formatDate(post.metadata.publishedAt)}
        </Text>

        <Heading variant="display-strong-m">
          {post.metadata.title}
        </Heading>
      </Column>

      <Row marginBottom="32" horizontal="center">
        <Row gap="16" vertical="center">
          {post.metadata.team && (
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
            {post.metadata.team?.map(
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

                  <SmartLink href={member.linkedIn}>
                    {member.name}
                  </SmartLink>
                </span>
              )
            )}
          </Text>
        </Row>
      </Row>

      {post.metadata.images?.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title}
          src={post.metadata.images[0]}
        />
      )}
    </Column>
  );
}