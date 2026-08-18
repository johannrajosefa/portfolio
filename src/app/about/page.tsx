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
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  /*
   * Bilingual labels that are specific to this page.
   * Your actual experience descriptions will be translated
   * in the content object afterwards.
   */

  const labels = {
    en: {
      schedule: "Schedule a call",
      introduction: "Introduction",
      work: "Work Experience",
      education: "Education",
      technical: "Technical Skills",
    },
    fr: {
      schedule: "Planifier un appel",
      introduction: "Introduction",
      work: "Expérience professionnelle",
      education: "Formation",
      technical: "Compétences techniques",
    },
  };

  const currentLabels = labels[language];

  /*
   * Create a version of the About structure using the
   * translated section titles.
   */
  const structure = [
    {
      title: currentLabels.introduction,
      display: about.intro.display,
      items: [],
    },
    {
      title: currentLabels.work,
      display: about.work.display,
      items: about.work.experiences.map(
        (experience) => experience.company
      ),
    },
    {
      title: currentLabels.education,
      display: about.studies.display,
      items: about.studies.institutions.map(
        (institution) => institution.name
      ),
    },
    {
      title: currentLabels.technical,
      display: about.technical.display,
      items: about.technical.skills.map(
        (skill) => skill.title
      ),
    },
  ];

  return (
    <Column maxWidth="m">
      {/* TABLE OF CONTENTS */}
      {about.tableOfContent.display && (
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
            about={about}
          />
        </Column>
      )}

      {/* MAIN CONTENT */}
      <Row
        fillWidth
        s={{ direction: "column" }}
        horizontal="center"
      >
        {/* PROFILE COLUMN */}
        {about.avatar.display && (
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

              {language === "fr"
                ? "Canada / Est"
                : "Canada / Eastern"}
            </Row>

            {person.languages &&
              person.languages.length > 0 && (
                <Row wrap gap="8">
                  {person.languages.map(
                    (languageItem, index) => (
                      <Tag
                        key={index}
                        size="l"
                      >
                        {languageItem}
                      </Tag>
                    )
                  )}
                </Row>
              )}
          </Column>
        )}

        {/* ABOUT CONTENT */}
        <Column
          className={styles.blockAlign}
          flex={9}
          maxWidth={40}
        >
          {/* HEADER */}
          <Column
            id={currentLabels.introduction}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
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
                  {currentLabels.schedule}
                </Row>

                <IconButton
                  href={about.calendar.link}
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
              {language === "fr"
                ? "Futur ingénieur en IA, scientifique des données et analyste de données"
                : person.role}
            </Text>

            {/* SOCIAL LINKS */}
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

          {/* INTRODUCTION */}
          {about.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Column>
          )}

          {/* WORK EXPERIENCE */}
          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={currentLabels.work}
                variant="display-strong-s"
                marginBottom="m"
              >
                {currentLabels.work}
              </Heading>

              <Column
                fillWidth
                gap="l"
                marginBottom="40"
              >
                {about.work.experiences.map(
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

                      {experience.images &&
                        experience.images.length > 0 && (
                          <Row
                            fillWidth
                            paddingTop="m"
                            paddingLeft="40"
                            gap="12"
                            wrap
                          >
                            {experience.images.map(
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
          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={currentLabels.education}
                variant="display-strong-s"
                marginBottom="m"
              >
                {currentLabels.education}
              </Heading>

              <Column
                fillWidth
                gap="l"
                marginBottom="40"
              >
                {about.studies.institutions.map(
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
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={currentLabels.technical}
                variant="display-strong-s"
                marginBottom="40"
              >
                {currentLabels.technical}
              </Heading>

              <Column fillWidth gap="l">
                {about.technical.skills.map(
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
                            {skill.images.map(
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