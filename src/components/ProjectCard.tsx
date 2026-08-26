"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

import { useLanguage } from "@/components/LanguageContext";

interface ProjectTranslation {
  metadata: {
    title: string;
    summary: string;
    images: string[];
    team: {
      name: string;
      role: string;
      avatar: string;
      linkedIn: string;
    }[];
    link?: string;
  };
  content: string;
}

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  translation?: ProjectTranslation;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  translation,
}) => {
  const { language } = useLanguage();

  const isFrench =
    language === "fr" && !!translation;

  const currentTitle = isFrench
    ? translation!.metadata.title
    : title;

  const currentDescription = isFrench
    ? translation!.metadata.summary
    : description;

  const currentImages = isFrench
    ? translation!.metadata.images
    : images;

  const currentLink = isFrench
    ? translation!.metadata.link || link
    : link;

  const labels = {
    en: {
      read: "Read case study",
      view: "View project",
    },
    fr: {
      read: "Lire l'étude de cas",
      view: "Voir le projet",
    },
  };

  const text = labels[language];

  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={currentImages.map((image) => ({
          slide: image,
          alt: currentTitle,
        }))}
      />

      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {currentTitle && (
          <Flex flex={5}>
            <Heading
              as="h2"
              wrap="balance"
              variant="heading-strong-xl"
            >
              {currentTitle}
            </Heading>
          </Flex>
        )}

        {(avatars?.length > 0 ||
          currentDescription?.trim() ||
          content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && (
              <AvatarGroup
                avatars={avatars}
                size="m"
                reverse
              />
            )}

            {currentDescription?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {currentDescription}
              </Text>
            )}

            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{
                    margin: "0",
                    width: "fit-content",
                  }}
                  href={href}
                >
                  <Text variant="body-default-s">
                    {text.read}
                  </Text>
                </SmartLink>
              )}

              {currentLink && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{
                    margin: "0",
                    width: "fit-content",
                  }}
                  href={currentLink}
                >
                  <Text variant="body-default-s">
                    {text.view}
                  </Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};