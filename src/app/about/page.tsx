"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";

import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  // Select the correct language version of the About content
  const content = about[language];

  const structure = [
    {
      title: content.intro.title,
      display: content.intro.display,
      items: [],
    },
    {
      title: content.work.title,
      display: content.work.display,
      items: content.work.experiences.map(
        (experience) => experience.company
      ),
    },
    {
      title: content.studies.title,
      display: content.studies.display,
      items: content.studies.institutions.map(
        (institution) => institution.name
      ),
    },
    {
      title: content.technical.title,
      display: content.technical.display,
      items: content.technical.skills.map(
        (skill) => skill.title
      ),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={content.title}
        description={content.description}
        path={content.path}
        image={`/api/og/generate?title=${encodeURIComponent(
          content.title
        )}`}
        author={{
          name: person.name,
          url: `${baseURL}${content.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Table of contents */}
      {content.tableOfContent.display && (
        <Column
          left="0"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents
            structure={structure}
            about={content}
          />
        </Column>
      )}

      <Row
        fillWidth
        s={{ direction: "column" }}
        horizontal="center"
      >
        {/* LEFT PROFILE COLUMN */}
        {content.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{
              position: "relative",
              style: { top: "auto" },
            }}
            xs={{
              style: { top: "auto" },
            }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar
              src={person.avatar}
              size="xl"
            />

            <Row gap="8" vertical="center">
              <Icon
                onBackground="accent-weak"
                name="globe"
              />
              {person.location}
            </Row>

            {person.languages &&
              person.languages.length > 0 && (
                <Row wrap gap="8">
                  {person.languages.map(
                    (languageItem, index) => (
                      <Tag key={index} size="l">
                        {languageItem}
                      </Tag>
                    )
                  )}
                </Row>
              )}
          </Column>
        )}

        {/* MAIN CONTENT */}
        <Column
          className={styles.blockAlign}
          flex={9}
          maxWidth={40}
        >
          {/* INTRO */}
          <Column
            id={content.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {content.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter:
                    "blur(var(--static-space-1))",
                }}
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />

                <Row paddingX="8">
                  {language === "en"
                    ? "Schedule a call"
                    : "Planifier un appel"}
                </Row>

                <IconButton
                  href={content.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}

            <Heading
              className={styles.textAlign}
              variant="display-strong-xl"
            >
              {person.name}
            </Heading>

            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {language === "en"
                ? person.role
                : "Futur ingénieur en IA, scientifique des données et analyste de données"}
            </Text>

            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment
                          key={item.name}
                        >
                          <Row s={{ hide: true }}>
                            <Button
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>

                          <Row
                            hide
                            s={{ hide: false }}
                          >
                            <IconButton
                              size="l"
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      )
                  )}
              </Row>
            )}
          </Column>

          {/* INTRODUCTION DESCRIPTION */}
          {content.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {content.intro.description}
            </Column>
          )}

          {/* WORK EXPERIENCE */}
          {content.work.display && (
            <>
              <Heading
                as="h2"
                id={content.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {content.work.title}
              </Heading>

              <Column
                fillWidth
                gap="l"
                marginBottom="40"
              >
                {content.work.experiences.map(
                  (experience, index) => (
                    <Column
                      key={`${experience.company}-${experience.role}-${index}`}
                      fillWidth
                    >
                      <Row
                        fillWidth
                        horizontal="between"
                        vertical="end"
                        marginBottom="4"
                      >
                        <Text
                          id={experience.company}
                          variant="heading-strong-l"
                        >
                          {experience.company}
                        </Text>

                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {experience.timeframe}
                        </Text>
                      </Row>

                      <Text
                        variant="body-default-s"
                        onBackground="brand-weak"
                        marginBottom="m"
                      >
                        {experience.role}
                      </Text>

                      <Column as="ul" gap="16">
                        {experience.achievements.map(
                          (
                            achievement: React.ReactNode,
                            achievementIndex: number
                          ) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${achievementIndex}`}
                            >
                              {achievement}
                            </Text>
                          )
                        )}
                      </Column>

                      {/* Images */}
                      {experience.images &&
                        experience.images.length > 0 && (
                          <Row
                            fillWidth
                            paddingTop="m"
                            paddingLeft="40"
                            gap="12"
                            wrap
                          >
                            {(experience.images as any[]).map(
                              (image, imageIndex) => (
                                <Row
                                  key={imageIndex}
                                  border="neutral-medium"
                                  radius="m"
                                  minWidth={image.width}
                                  height={image.height}
                                >
                                  <Media
                                    enlarge
                                    radius="m"
                                    sizes={image.width.toString()}
                                    alt={image.alt}
                                    src={image.src}
                                  />
                                </Row>
                              )
                            )}
                          </Row>
                        )}
                    </Column>
                  )
                )}
              </Column>
            </>
          )}

          {/* EDUCATION */}
          {content.studies.display && (
            <>
              <Heading
                as="h2"
                id={content.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {content.studies.title}
              </Heading>

              <Column
                fillWidth
                gap="l"
                marginBottom="40"
              >
                {content.studies.institutions.map(
                  (institution, index) => (
                    <Column
                      key={`${institution.name}-${index}`}
                      fillWidth
                      gap="4"
                    >
                      <Row
                        fillWidth
                        horizontal="between"
                        vertical="end"
                        marginBottom="4"
                      >
                        <Text
                          id={institution.name}
                          variant="heading-strong-l"
                        >
                          {institution.name}
                        </Text>

                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {institution.timeframe}
                        </Text>
                      </Row>

                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {institution.description}
                      </Text>
                    </Column>
                  )
                )}
              </Column>
            </>
          )}

          {/* TECHNICAL SKILLS */}
          {content.technical.display && (
            <>
              <Heading
                as="h2"
                id={content.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {content.technical.title}
              </Heading>

              <Column fillWidth gap="l">
                {content.technical.skills.map(
                  (skill, index) => (
                    <Column
                      key={`${skill.title}-${index}`}
                      fillWidth
                      gap="4"
                    >
                      <Text
                        id={skill.title}
                        variant="heading-strong-l"
                      >
                        {skill.title}
                      </Text>

                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                      >
                        {skill.description}
                      </Text>

                      {skill.tags &&
                        skill.tags.length > 0 && (
                          <Row
                            wrap
                            gap="8"
                            paddingTop="8"
                          >
                            {skill.tags.map(
                              (tag, tagIndex) => (
                                <Tag
                                  key={`${skill.title}-${tagIndex}`}
                                  size="l"
                                  prefixIcon={tag.icon}
                                >
                                  {tag.name}
                                </Tag>
                              )
                            )}
                          </Row>
                        )}

                      {skill.images &&
                        skill.images.length > 0 && (
                          <Row
                            fillWidth
                            paddingTop="m"
                            gap="12"
                            wrap
                          >
                            {(skill.images as any[]).map(
                              (image, imageIndex) => (
                                <Row
                                  key={imageIndex}
                                  border="neutral-medium"
                                  radius="m"
                                  minWidth={image.width}
                                  height={image.height}
                                >
                                  <Media
                                    enlarge
                                    radius="m"
                                    sizes={image.width.toString()}
                                    alt={image.alt}
                                    src={image.src}
                                  />
                                </Row>
                              )
                            )}
                          </Row>
                        )}
                    </Column>
                  )
                )}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}